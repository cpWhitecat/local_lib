const { body, validationResult } = require('express-validator');

function isError(req,statusCode,errorMessage,next){  // 这个项目以后应该会变成ts 而且使用es6
    const err = new Error(errorMessage)

    // confirm the req type at after on typescript
    req.status = statusCode
    return next(err)
}

function createData(model){
    switch (model) {
        case 'author':{

        }
        default:
            break;
    }
}


function lengthLimited(control_name,length_rule){
    const _limit = body(`${control_name}`, `${control_name} name must contain at least 3 characters`)
    .trim()
    .isLength(length_rule)
    .escape()

    return _limit
}

module.exports = {
    isError,
    lengthLimited
}