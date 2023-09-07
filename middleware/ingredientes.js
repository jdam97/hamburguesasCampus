import { check } from "express-validator";

const validacionIngredientes=[
    check('id').notEmpty().isNumeric().withMessage('id es un campo obligatorio y debe ser un numero'),
    check('nombre').notEmpty().isString().withMessage('nombre es un campo obligatorio y debe ser de tipo string'),
    check('stock').notEmpty().isString().withMessage('stock es un campo obligatorio y debe ser de tipo string'),
    check('precio').notEmpty().isString().withMessage('precio es un campo obligatorio y debe ser de tipo string'),
    check('descripcion').notEmpty().isString().withMessage('descripcion es un campo obligatorio y debe ser de tipo string'),
    check('idHamburguesa').notEmpty().isString().withMessage('idHamburguesa es un campo obligatorio y debe ser de tipo string'),


];

export default validacionIngredientes;