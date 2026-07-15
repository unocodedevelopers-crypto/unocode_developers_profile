import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    
    if (!file) {
      return NextResponse.json({ error: 'No file uploaded.' }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Sanitize the filename to prevent issues
    const originalName = file.name || 'image.jpg';
    const filename = `${Date.now()}-${originalName.replace(/[^a-zA-Z0-9.-]/g, '_')}`;
    
    // Save to public/uploads directory
    const uploadDir = path.join(process.cwd(), 'public', 'uploads');
    
    // Ensure the directory exists (though we already created it)
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    
    const filepath = path.join(uploadDir, filename);
    fs.writeFileSync(filepath, buffer);

    // The URL should be relative to the public folder
    const fileUrl = `/uploads/${filename}`;
    
    return NextResponse.json({ success: true, url: fileUrl });
  } catch (error) {
    console.error('Error uploading file:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
