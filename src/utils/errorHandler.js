const BaseError = require("../errors/base.error");
const {statusCodes}=require('http-status-codes');

function errorHandler(err,req,res,next){
    if(err instanceof BaseError){
        return res.status(err.statusCode).json({
            sucess: false,
            message:err.message,
            error:err.details,
            data:{} // because this is an exception so no data is going to be provided
        });
    }
    return res.status(statusCodes.INTERNAL_SERVER_ERROR).json({
            sucess: false,
            message:"something went wrong",
            error:err,
            data:{} // because this is an exception so no data is going to be provided
    });
}
module.exports=errorHandler;