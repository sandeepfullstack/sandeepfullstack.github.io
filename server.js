// upload multiple files  on pc or server 
const http = require('http');
const fs = require('fs');
const path = require('path');
const formidable = require('formidable');

const PORT = 3000;

// Serve HTML form
const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`
            <h2>Upload Multiple Files</h2>
            <form action="/upload" method="post" enctype="multipart/form-data">
                <input type="file" name="files" multiple>
                <button type="submit">Upload</button>
            </form>
        `);
    } else if (req.method === 'POST' && req.url === '/upload') {
        const form = new formidable.IncomingForm();
        form.multiples = true; // Enable multiple file uploads

        form.parse(req, (err, fields, files) => {
            if (err) {
                res.writeHead(400, { 'Content-Type': 'text/plain' });
                return res.end('Error parsing the files.');
            }

            // Ensure files are in an array
            const fileArray = Array.isArray(files.files) ? files.files : [files.files];
            let uploadCount = 0;

            fileArray.forEach((file) => {
                const oldPath = file.filepath; // Use `filepath` for formidable
                const newPath = path.join(__dirname, 'uploads', file.originalFilename);

                fs.rename(oldPath, newPath, (err) => {
                    if (err) {
                        console.error(err);
                        return res.writeHead(500, { 'Content-Type': 'text/plain' }).end('Error saving the file.');
                    }
                    uploadCount++;
                    if (uploadCount === fileArray.length) {
                        // res.writeHead(200, { 'Content-Type': 'text/plain' });
                        // res.end(`Uploaded ${uploadCount} files successfully.`);
                        res.writeHead(200, { 'Content-Type': 'text/html' });
                        res.end(`Uploaded ${uploadCount} files successfully.<a href="../">Home</a>`);
                    }
                });
            });
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
    }
});

// Create uploads directory if it doesn't exist
fs.mkdirSync('uploads', { recursive: true });

// Start the server
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
