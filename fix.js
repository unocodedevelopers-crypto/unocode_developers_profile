const fs = require('fs');

const aboutPath = 'c:/Users/bavan/Documents/Company profile/profile_next_code/src/app/about/page.tsx';
const contactPath = 'c:/Users/bavan/Documents/Company profile/profile_next_code/src/app/contact/page.tsx';

function updateFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');

    if (!content.includes('import Header')) {
        content = 'import Header from \'@/components/Header\';\nimport Footer from \'@/components/Footer\';\n' + content;
    }

    const headerRegex = /<a\s+className=\"group fixed[^\>]*\>[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/;
    content = content.replace(headerRegex, '<Header />');

    const footerRegex = /<div\n\s*className=\"relative flex w-full flex-col items-center gap-12 overflow-clip bg-black\/20[^>]*>[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/;
    content = content.replace(footerRegex, '<Footer />');

    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Updated', filePath);
}

updateFile(aboutPath);
updateFile(contactPath);
