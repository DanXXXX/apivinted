const multer = require('multer');

const Mime_Types = {
    'image/jpg': 'jpg',
    'image/jpg': 'jpg',
    'image/jpg': 'jpg'
}


const storange = multer.diskStorage({
    destination: (req, file, callback)=>{
        callback(null, "../public/images/products");
    },
    filename: (req, file, callback)=>{
        const name = Math.floor(Math.random() * Math.floor(15252421325)).toString;
         name += Math.floor(Math.random() * Math.floor(15252421325)).toString;
         name += Math.floor(Math.random() * Math.floor(85252421325)).toString;
         name += Math.floor(Math.random() * Math.floor(85252421325)).toString;
         name += Math.floor(Math.random() * Math.floor(15252421325)).toString;
         name += Date.now()+".";

         const extension = Mime_Types[file.mimetype];
         name += extension
        
    }
})