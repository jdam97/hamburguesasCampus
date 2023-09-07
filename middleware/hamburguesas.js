import { check } from "express-validator";

const validarHamburguesas = [
    check('id').isNumeric().withMessage('id es requerido y debe ser de tipo number'),
    check('nombre').isString().withMessage('nombre es requerido y debe ser de tipo number'),
    check('precio').isNumeric().withMessage('precio es requerido y debe ser de tipo string'),
    check('idCategorias').isNumeric().withMessage('idCategorias es requerido y debe ser de tipo number'),
    check('idChefs').isNumeric().withMessage('idChefs es requerido y debe ser de tipo string')
];

export default validarHamburguesas;