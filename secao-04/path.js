const path = require("path");

console.log('basename:', path.basename("index.html"));

console.log('normalize:', path.normalize("C:\\wamp64/www/hcode/nodejs/Seção-04/.."));

console.log('join path:', path.join('/teste', 'teste2/', 'teste3', 'teste4', 'dir2', '..'));

console.log('join path:', path.resolve('path.js'));

console.log('extension', path.extname('path.js'));
