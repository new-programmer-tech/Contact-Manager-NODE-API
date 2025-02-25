const { constants } = require('../constants')


const errorHandler = (err, req, res, next) => {
  console.log("err.statusCode", res.statusCode);

  switch (res.statusCode) {
    case constants.VALIDATION_ERROR:
      res.json({
        title: "VALIDATION  FAILED",
        message: err.message,
        status: res.statusCode
      })
      break;
    case constants.NOT_FOUND:
      res.json({
        title: "NOT FOUND",
        message: err.message,
        status: res.statusCode
      })
      break;
    case constants.UNAUTHORIZED:
      res.json({
        title: "UNAUTHORIZED",
        message: err.message,
        status: res.statusCode
      })
      break;
    case constants.FORBIDDEN:
      res.json({
        title: "FORBIDDEN",
        message: err.message,
        status: res.statusCode
      })
      break;
    case constants.SERVER_ERROR:
      res.json({
        title: "SERVER_ERROR",
        message: err.message,
        status: res.statusCode
      })
      break;

    default:
      break;
  }


}

module.exports = errorHandler