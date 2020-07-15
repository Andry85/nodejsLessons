const fs = require('fs');
const path = require('path');

// fs.mkdir(path.join(__dirname, 'notes'), err => {
//     if (err) throw err;

//     console.log('Folder was created');
// });

fs.writeFile(
    path.join(__dirname, 'notes', 'text.text'),
    'Hello nodejs',
    err => {
        if (err) throw err;

        console.log('File was created');

        fs.appendFile(
            path.join(__dirname, 'notes', 'text.text'),
            'from append file',
            err => {
                if (err) throw err;

                console.log('File was changed');

                fs.readFile(
                    path.join(__dirname, 'notes', 'text.text'),
                    'utf-8',
                    (err, data) => {
                        if (err) throw err;
                
                        console.log(data);

                        fs.rename(
                            path.join(__dirname, 'notes', 'text.text'),
                            path.join(__dirname, 'notes', 'newtext.text'),
                            err => {
                                if (err) throw err;
                        
                                console.log('File renamed');
                            }
                        );


                    }
                );

            }
        );
    }
);

