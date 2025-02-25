const errorHandler = (err, req, res, next) => {
  console.log("err.statusCode", res.statusCode);

  res.json({
    message: err.message,
    status:res.statusCode
  })
}

module.exports = errorHandler