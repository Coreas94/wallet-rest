const errorHandler = (err, req, res, next) => {
	console.error(err);
	res.status(500).json({
		success: false,
		message_error: err.message || "Error en el servidor",
	});
};

module.exports = errorHandler;
