class CostumAPIError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

const createCostumError = (msg, statusCode) => {
  return new CostumAPIError(msg, statusCode);
};

module.exports = {
  createCostumError,
  CostumAPIError,
};
