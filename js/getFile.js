document.getElementById("fileInput2").addEventListener("change" , function (event) {
    const file = event.target.files[0];
    
    console.log("file");

    const fileAsBlob = new Blob([file]);

    console.log(fileAsBlob);

    const BlobAsFile = new file ([fileAsBlob],

    file.name, {type: file.type, lastModified: file.lastModifiedDate});

    console.log(BlobAsFile);


},false 
);