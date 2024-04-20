const { CostumAPIError } = require(`../errors/constum-error`);

const errorHandlerMiddleware = (err, req, res, next) => {
  console.log(err);
  if (err instanceof CostumAPIError) {
    return res.status(err.statusCode).json({ msg: err.message });
  }
  return res.status(500).json({ msg: "Something went wrong" });
};

module.exports = errorHandlerMiddleware;
