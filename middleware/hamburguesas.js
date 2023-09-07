import { check } from "express-validator";

const validarContratos = [
    check('id').isNumeric().withMessage('id es requerido y debe ser de tipo number'),
    check('usuarioId').isNumeric().withMessage('usuarioId es requerido y debe ser de tipo number'),
    check('tipoReserva').isString().withMessage('tipoReserva es requerido y debe ser de tipo string'),
    check('reservaId').isNumeric().withMessage('reservaId es requerido y debe ser de tipo number'),
    check('estado').isString().withMessage('estado es requerido y debe ser de tipo string')
];

export default validarContratos;