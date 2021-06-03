export const authToken = async(req, res, next) => {
    const token = req.headers["Authorization"];

    console.log(token)
    next()
    
}