import { check } from "express-validator";

const validarChefs = [
    check('id').isNumeric().withMessage('id es requerido y debe ser de tipo number'),
    check('nombre').isString().withMessage('nombre es requerido y es de tipo string'),
    check('especializacion').isString().withMessage('especializacion es requerido y es de tipo string'),
    check('especialidad').isString().withMessage('especialidad es requerido y es de tipo string'),
]

export default validarChefs;