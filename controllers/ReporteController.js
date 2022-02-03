var ReporteModel = require('../models/ReporteModel.js');

/**
 * ReporteController.js
 *
 * @description :: Server-side logic for managing Reportes.
 */
module.exports = {

    /**
     * ReporteController.list()
     */
    list: function (req, res) {
        ReporteModel.find(function (err, Reportes) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Reporte.',
                    error: err
                });
            }

            return res.json(Reportes);
        });
    },

    /**
     * ReporteController.show()
     */
    show: function (req, res) {
        var id = req.params.id;

        ReporteModel.findOne({_id: id}, function (err, Reporte) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Reporte.',
                    error: err
                });
            }

            if (!Reporte) {
                return res.status(404).json({
                    message: 'No such Reporte'
                });
            }

            return res.json(Reporte);
        });
    },

    /**
     * ReporteController.create()
     */
    create: function (req, res) {
        var Reporte = new ReporteModel({
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

        Reporte.save(function (err, Reporte) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating Reporte',
                    error: err
                });
            }

            return res.status(201).json(Reporte);
        });
    },

    /**
     * ReporteController.update()
     */
    update: function (req, res) {
        var id = req.params.id;

        ReporteModel.findOne({_id: id}, function (err, Reporte) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Reporte',
                    error: err
                });
            }

            if (!Reporte) {
                return res.status(404).json({
                    message: 'No such Reporte'
                });
            }

            Reporte.id_usuario = req.body.id_usuario ? req.body.id_usuario : Reporte.id_usuario;
			Reporte.cedula = req.body.cedula ? req.body.cedula : Reporte.cedula;
			Reporte.nombres = req.body.nombres ? req.body.nombres : Reporte.nombres;
			Reporte.apellidos = req.body.apellidos ? req.body.apellidos : Reporte.apellidos;
			Reporte.fecha_nacimiento = req.body.fecha_nacimiento ? req.body.fecha_nacimiento : Reporte.fecha_nacimiento;
			Reporte.celular = req.body.celular ? req.body.celular : Reporte.celular;
			Reporte.rol = req.body.rol ? req.body.rol : Reporte.rol;
			Reporte.provincia = req.body.provincia ? req.body.provincia : Reporte.provincia;
			Reporte.ciudad = req.body.ciudad ? req.body.ciudad : Reporte.ciudad;
			Reporte.referencia = req.body.referencia ? req.body.referencia : Reporte.referencia;
			Reporte.correo = req.body.correo ? req.body.correo : Reporte.correo;
			Reporte.contrasenia = req.body.contrasenia ? req.body.contrasenia : Reporte.contrasenia;
			Reporte.id_auto = req.body.id_auto ? req.body.id_auto : Reporte.id_auto;
			Reporte.placa = req.body.placa ? req.body.placa : Reporte.placa;
			Reporte.marca = req.body.marca ? req.body.marca : Reporte.marca;
			Reporte.modelo = req.body.modelo ? req.body.modelo : Reporte.modelo;
			Reporte.color = req.body.color ? req.body.color : Reporte.color;
			Reporte.clave_llave = req.body.clave_llave ? req.body.clave_llave : Reporte.clave_llave;
			Reporte.fecha_registro = req.body.fecha_registro ? req.body.fecha_registro : Reporte.fecha_registro;
			
            Reporte.save(function (err, Reporte) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating Reporte.',
                        error: err
                    });
                }

                return res.json(Reporte);
            });
        });
    },

    /**
     * ReporteController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;

        ReporteModel.findByIdAndRemove(id, function (err, Reporte) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the Reporte.',
                    error: err
                });
            }

            return res.status(204).json();
        });
    }
};
