

//
// Upload a collection of files to the backend.
//
function uploadFiles(files) {
    for (let i = 0; i < files.length; ++i) {
        uploadFile(files[i]);
    }
}

//
// Upload a file from the browser to the backend API.
//
function uploadFile(file) {

    const uploadRoute = `/api/upload`;
    const encodedFileName = encodeURIComponent(file.name);
    fetch(uploadRoute, {
            body: file,
            method: "POST",
            headers: {
                "File-Name": encodedFileName,
                "Content-Type": file.type,
            },
        })
        .then(() => { 
            //
            // Display that the upload has completed.
            //
            const resultsElement = document.getElementById("results");
            resultsElement.innerHTML +=  `<div>${file.name}</div>`;

            //
            // Clear the file form the upload input.
            //
            const uploadInput = document.getElementById("uploadInput");
            uploadInput.value = null;
        })
        .catch((err) => { 
            console.error(`Failed to upload: ${file.name}`);
            console.error(err);
    
            const resultsElement = document.getElementById("results");
            resultsElement.innerHTML +=  `<div>Failed ${file.name}</div>`;
        });
}

