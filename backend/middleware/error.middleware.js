exports.errorHandler = (err, req, res, next) => {
  console.error(err.stack);

  if (err.name === "SequelizeValidationError") {
    return res.status(400).json({
      message: "Validation xatosi",
      errors: err.errors.map((e) => e.message),
    });
  }

  if (err.name === "SequelizeUniqueConstraintError") {
    return res.status(400).json({
      message: "Bu ma'lumot allaqachon mavjud",
      errors: err.errors.map((e) => e.message),
    });
  }

  res.status(500).json({
    message: "Server xatosi",
    error:
      process.env.NODE_ENV === "development"
        ? err.message
        : "Ichki server xatosi",
  });
};
