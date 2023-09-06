import { check } from "express-validator";

const validacionAutos=[
    check('id').notEmpty().isNumeric().withMessage('id es un campo obligatorio y debe ser un numero'),
    check('punto_recogida').notEmpty().isString().withMessage('punto_recogida es un campo obligatorio y debe ser de tipo string'),
    check('punto_devolucion').notEmpty().isString().withMessage('punto_devolucion es un campo obligatorio y debe ser de tipo string'),
];

export default validacionAutos;