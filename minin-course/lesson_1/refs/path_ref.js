const path = require('path');

console.log(path.basename(__filename));
console.log(path.dirname(__filename));
console.log(path.extname(__filename));
console.log(path.parse(__filename));
console.log(path.parse(__filename).name);

console.log(path.join(__dirname, 'test', 'second.html'));
console.log(path.resolve(__dirname, 'test', 'second.html'));

console.log(path.format({
    root: '/ignored',
    dir: '/home/user/dir',
    base: 'file.txt'
  }));

console.log(path.isAbsolute(__dirname));
console.log(path.normalize('C:\\temp\\\\foo\\bar\\..\\'));
console.log(path.relative('/data/orandea/test/aaa', '/data/orandea/impl/bbb'));