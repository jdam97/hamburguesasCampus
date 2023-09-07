import { check } from "express-validator";

const validarCategorias = [
    check('id').isNumeric().withMessage('id es requerido y debe ser de tipo number'),
    check('nombre').isString().withMessage('nombre es requerido y es de tipo string'),
    check('descripcion').isString().withMessage('descripcion es requerido y es de tipo string'),
]

export default validarCategorias;