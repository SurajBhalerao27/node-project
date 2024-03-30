// By using the promises 
//  we manage to have one fun as a utility to use it when needed further in the cod

const handler = (requestHandler) => {
    (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next)).catch((err)=>{
            next(err);
        })
    }
}
export default handler



// By using async and await

// const handler = (fn) => async (req,res,next) =>{
//     try {
//         await fn(req,res,next);
//     } catch (error) {
//         res.status(err.code || 500).json({
//             success : false,
//             messege : err.messege
//         })
//     }
// }