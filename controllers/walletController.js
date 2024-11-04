const apiClient = require("../apiClient");

exports.registrar = async (req, res, next) => {
	try {
		const response = await apiClient.post("/registro", req.body);
		res.json(response.data);
	} catch (error) {
		next(error);
	}
};

exports.recargar = async (req, res, next) => {
	try {
		const response = await apiClient.post("/recarga", req.body);
		res.json(response.data);
	} catch (error) {
		next(error);
	}
};

exports.pagar = async (req, res, next) => {
	try {
		const response = await apiClient.post("/pagar", req.body);
		res.json(response.data);
	} catch (error) {
		next(error);
	}
};

exports.confirmar = async (req, res, next) => {
	try {
		const response = await apiClient.post("/confirmar", req.body);
		res.json(response.data);
	} catch (error) {
		next(error);
	}
};

exports.consultar = async (req, res, next) => {
	try {
		const response = await apiClient.get("/consultar", { params: req.query });
		res.json(response.data);
	} catch (error) {
		next(error);
	}
};
