const fs = require('fs');

function getCodes(fileName) {
    try {
        const data = fs.readFileSync(fileName, 'utf8');
        const jsonContent = JSON.parse(data);
        return jsonContent;
    } catch (err) {
        console.error('Ошибка чтения файла:', err);
        return {};
    }
}

module.exports = getCodes;