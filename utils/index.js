function isError(req,statusCode,errorMessage,next){  // 这个项目以后应该会变成ts 而且使用es6
    const err = new Error(errorMessage)

    // confirm the req type at after on typescript
    req.status = statusCode
    next(err)
}




module.exports = {
    isError
}