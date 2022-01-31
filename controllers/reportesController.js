var ReportesModel = require('../models/reportesModel.js');

/**
 * reportesController.js
 *
 * @description :: Server-side logic for managing reportess.
 */
module.exports = {

    /**
     * reportesController.list()
     */
    list: function (req, res) {
        ReportesModel.find(function (err, reportess) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting reportes.',
                    error: err
                });
            }

            return res.json(reportess);
        });
    },

    /**
     * reportesController.show()
     */
    show: function (req, res) {
        var id = req.params.id;

        ReportesModel.findOne({_id: id}, function (err, reportes) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting reportes.',
                    error: err
                });
            }

            if (!reportes) {
                return res.status(404).json({
                    message: 'No such reportes'
                });
            }

            return res.json(reportes);
        });
    },

    /**
     * reportesController.create()
     */
    create: function (req, res) {
        var reportes = new ReportesModel({
			id_usuario : req.body.id_usuario,
			cedula : req.body.cedula,
			nombres : req.body.nombres,
			apellidos : req.body.apellidos,
			fecha_nacimiento : req.body.fecha_nacimiento,
			celular : req.body.celular,
			rol : req.body.rol,
			provincia : req.body.provincia,
			ciudad : req.body.ciudad,
			referencia : req.body.referencia,
			correo : req.body.correo,
			contrasenia : req.body.contrasenia,
			id_auto : req.body.id_auto,
			placa : req.body.placa,
			marca : req.body.marca,
			modelo : req.body.modelo,
			color : req.body.color,
			clave_llave : req.body.clave_llave,
			fecha_registro : req.body.fecha_registro
        });

        reportes.save(function (err, reportes) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating reportes',
                    error: err
                });
            }

            return res.status(201).json(reportes);
        });
    },

    /**
     * reportesController.update()
     */
    update: function (req, res) {
        var id = req.params.id;

        ReportesModel.findOne({_id: id}, function (err, reportes) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting reportes',
                    error: err
                });
            }

            if (!reportes) {
                return res.status(404).json({
                    message: 'No such reportes'
                });
            }

            reportes.id_usuario = req.body.id_usuario ? req.body.id_usuario : reportes.id_usuario;
			reportes.cedula = req.body.cedula ? req.body.cedula : reportes.cedula;
			reportes.nombres = req.body.nombres ? req.body.nombres : reportes.nombres;
			reportes.apellidos = req.body.apellidos ? req.body.apellidos : reportes.apellidos;
			reportes.fecha_nacimiento = req.body.fecha_nacimiento ? req.body.fecha_nacimiento : reportes.fecha_nacimiento;
			reportes.celular = req.body.celular ? req.body.celular : reportes.celular;
			reportes.rol = req.body.rol ? req.body.rol : reportes.rol;
			reportes.provincia = req.body.provincia ? req.body.provincia : reportes.provincia;
			reportes.ciudad = req.body.ciudad ? req.body.ciudad : reportes.ciudad;
			reportes.referencia = req.body.referencia ? req.body.referencia : reportes.referencia;
			reportes.correo = req.body.correo ? req.body.correo : reportes.correo;
			reportes.contrasenia = req.body.contrasenia ? req.body.contrasenia : reportes.contrasenia;
			reportes.id_auto = req.body.id_auto ? req.body.id_auto : reportes.id_auto;
			reportes.placa = req.body.placa ? req.body.placa : reportes.placa;
			reportes.marca = req.body.marca ? req.body.marca : reportes.marca;
			reportes.modelo = req.body.modelo ? req.body.modelo : reportes.modelo;
			reportes.color = req.body.color ? req.body.color : reportes.color;
			reportes.clave_llave = req.body.clave_llave ? req.body.clave_llave : reportes.clave_llave;
			reportes.fecha_registro = req.body.fecha_registro ? req.body.fecha_registro : reportes.fecha_registro;
			
            reportes.save(function (err, reportes) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating reportes.',
                        error: err
                    });
                }

                return res.json(reportes);
            });
        });
    },

    /**
     * reportesController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;

        ReportesModel.findByIdAndRemove(id, function (err, reportes) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the reportes.',
                    error: err
                });
            }

            return res.status(204).json();
        });
    }
};
