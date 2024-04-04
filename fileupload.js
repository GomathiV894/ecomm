const multer=require('multer');
const storage=multer.diskStorage(
    {
    destination:'uploads/',
    filename: function(req,file,cb) {
        const uniqueSuffix=Date.now() + '-' + Math.round(Math.random());
        const filetype=file.originalname.split('.').pop();

        cb(null,uniqueSuffix + '.'+filetype);

    }

    });
    const upload=multer({storage:storage});
    
     module.exports=upload;