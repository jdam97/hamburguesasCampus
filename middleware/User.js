import { check } from "express-validator";

const validarUsuarios = [
    check('id').isNumeric().withMessage('id es requerido y debe ser de tipo number'),
    check('cedula').isString().withMessage('cedcedulaula es requerido y es de tipo string'),
    check('nombre').isString().withMessage('nombre es requerido y es de tipo string'),
    check('apellido').isString().withMessage('apellido es requerido y es de tipo string'),
    check('email').isEmail().withMessage('email es requerido y es de tipo email'),
]

export default validarUsuarios;