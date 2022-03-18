let inputArr=process.argv;
console.log(inputArr);
// array milega 0 th index pr node ka address 1st index is pr file ka 
/*node fileOrganizer.js something  age ye likhege to us array me something bhi ajegaa mtlb hmara content 2nd index pr aaayega
 ese hi aage aage aate jayega */

 /*let input=inputArr[3];
 console.log(input);
 
                                           // 1 TASK                            INPUT LENA SIKHA HAI HMNE 
                                          //  node fileOrganizer.js something 
                                          // [something ya kuch bhi isliye add kiya hai kyuki input lere hai na hm]
//---------------------------------------------------------------------------------------------------------------------------------------*/
let fs = require("fs");
let path = require("path");
let folderPath = process.argv[2];

// console.log(folderPath);
let folderExists = fs.existsSync(folderPath);

let extensions = {
    Audio:[".mp3"],
    Video:[".mp4",".mkv"],
    Document:[".doc",".xlsx",".pdf",".txt"],
    Image:[".jpeg",".jpg",".png",".gif"],
    Software:[".exe"]
    // hr key k samne array pda hai
};

if(folderExists){
    //we will code
    // console.log("path is valid!!!!!!");
    let files = fs.readdirSync(folderPath);
    for(let i=0;i<files.length;i++){
        let ext = path.extname(files[i]);
        let nameOfFolder = giveFolderName(ext);
        // console.log("Ext--",ext,"Folder--",nameOfFolder);
        let pathOfFolder = path.join(folderPath,nameOfFolder); 
        let exist = fs.existsSync(pathOfFolder);
        if(exist){
            moveFile(folderPath,pathOfFolder,files[i]);
        }else{
            fs.mkdirSync(pathOfFolder);
            moveFile(folderPath,pathOfFolder,files[i]);
        }
    }
}
else{
    console.log("Please Enter a Valid Path!!!!!!!");
}


function giveFolderName(ext){
    for(let key in extensions){
        let extArr = extensions[key];
        for(let i=0;i<extArr.length;i++){
            if(extArr[i] == ext){
                return key;
            }
        }
    }
    return 'Others'
}


function moveFile(folderPath,pathOfFolder,fileName){
    let sourcePath = path.join(folderPath,fileName);
    let destinationPath = path.join(pathOfFolder,fileName);
    fs.copyFileSync(sourcePath,destinationPath);
    fs.unlinkSync(sourcePath);
}



// ---------------------------------------------------------------------------------------------------------------------------------------------


































/*
let fs=require("fs");
let folderPath=process.argv[2];

// console.log(folderPath)
let folderExists=fs.existsSync(folderPath);
if(folderExists){
    // we will code
    console.log("path is valid !!");

    let files =fs.readdirSync(folderPath);
    console.log(files);

}
else{
    console.log("Please enter a valid path !!!");
}
// node fileOrganizer.js "E:\Project\download" ese run kro

                                           // 2 TASK 

// ----------------------------------------------------------------------------------------------------------------------------------------
let path=require("path")
let extensions={
    Audio :[".mp3"],
    Video:[".mp4",".mkv"],
    Document:[".doc",".xlsx",".pdf",".txt"],
    Image:[".png",".jpeg",".gif",".jpg"],
    Software:[".exe"]

// hr key k samne array pda hai
}




if(folderExists)
{
let files =fs.readdirSync(folderPath);
for(let i=0;i<files.length;i++)
{
    let ext=path.extname(files[i])
    let nameOfFolder=giveFolderName(ext)
    console.log("Extension - > ",ext, "Folder - >",nameOfFolder)
}

}
else
{
    console.log("Please enter a valid path !!!");
}



function giveFolderName(ext)
{
    for(let key in extensions)
    {
        let extensionArr=extensions[key];
        for(let i=0;i<extensionArr.length;i++)
        {
            if(extensionArr[i]==ext)
            {
                return key;
            }
            
        }

    }
    return 'Others'
}
                                                                 // 3 TASK extension k according key dedo
//---------------------------------------------------------------------------------------------------------------------------------------


                                                                // 4 TASK
                                                                // hme audio vli , video etc etc....ka path nikalna hai
                                                                if(folderExists)
                                                                {
                                                                let files =fs.readdirSync(folderPath);
                                                                for(let i=0;i<files.length;i++)
                                                                {
                                                                    let ext=path.extname(files[i])
                                                                    let nameOfFolder=giveFolderName(ext)
                                                                    //console.log("Extension - > ",ext, "Folder - >",nameOfFolder)




// Task 4
                                                                    let pathOfFolder = path.join(folderPath,nameOfFolder)
                                                                    let exist=fs.existsSync(pathOfFolder)
                                                                    if(exist){
                                                                    // task 5 move file [download to particular foler]
                                                                    moveFile(folderPath,pathOfFolder,files[i])
                                                                
                                                                    }
                                                                    else{
                                                                        // if not exists create folder
                                                                        fs.mkdirSync(pathOfFolder)
                                                                        moveFile(folderPath,pathOfFolder,files[i])
                                                                    }
                                                                }
                                                            }
                                                                // task 4
                                                                
                                                                
                                                                else
                                                                {
                                                                    console.log("Please enter a valid path !!!");
                                                                }



//---------------------------------------------------------------------------------------------------------------------------------------

//task 5 move file*/

/*function moveFile(folderPath,pathOfFolder,fileName)
{
    let srcPath= path.join(folderPath)
    let destinationPath=path.join(pathOfFolder,fileName)
    fs.copyFileSync(srcPath,destinationPath)
    fs.unlinkSync(srcPath)
}


let fs = require("fs");
let path = require("path");
let folderPath = process.argv[2];

// console.log(folderPath);
let folderExists = fs.existsSync(folderPath);

let extensions = {
    Audio:[".mp3"],
    Video:[".mp4",".mkv"],
    Document:[".doc",".xlsx",".pdf",".txt"],
    Image:[".jpeg",".jpg",".png",".gif"],
    Software:[".exe"]
};

if(folderExists){
    //we will code
    // console.log("path is valid!!!!!!");
    let files = fs.readdirSync(folderPath);
    for(let i=0;i<files.length;i++){
        let ext = path.extname(files[i]);
        let nameOfFolder = giveFolderName(ext);
        // console.log("Ext--",ext,"Folder--",nameOfFolder);
        let pathOfFolder = path.join(folderPath,nameOfFolder); 
        let exist = fs.existsSync(pathOfFolder);
        if(exist){
            moveFile(folderPath,pathOfFolder,files[i]);
        }else{
            fs.mkdirSync(pathOfFolder);
            moveFile(folderPath,pathOfFolder,files[i]);
        }
    }
}
else{
    console.log("Please Enter a Valid Path!!!!!!!");
}


function giveFolderName(ext){
    for(let key in extensions){
        let extArr = extensions[key];
        for(let i=0;i<extArr.length;i++){
            if(extArr[i] == ext){
                return key;
            }
        }
    }
    return 'Others'
}


function moveFile(folderPath,pathOfFolder,fileName){
    let sourcePath = path.join(folderPath,fileName);
    let destinationPath = path.join(pathOfFolder,fileName);
    fs.copyFileSync(sourcePath,destinationPath);
    fs.unlinkSync(sourcePath);
}*/
