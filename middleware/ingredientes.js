import { check } from "express-validator";

const validacionIngredientes=[
    check('id').notEmpty().isNumeric().withMessage('id es un campo obligatorio y debe ser un numero'),
    check('nombre').notEmpty().isString().withMessage('nombre es un campo obligatorio y debe ser de tipo string'),
    check('stock').notEmpty().isNumeric().withMessage('stock es un campo obligatorio y debe ser de tipo number'),
    check('precio').notEmpty().isNumeric().withMessage('precio es un campo obligatorio y debe ser de tipo number'),
    check('descripcion').notEmpty().isString().withMessage('descripcion es un campo obligatorio y debe ser de tipo string'),
    check('idHamburguesa').notEmpty().isNumeric().withMessage('idHamburguesa es un campo obligatorio y debe ser de tipo number'),


];

export default validacionIngredientes;