import express from 'express'
import { crearCuenta, obtenerCuenta, obtenerUno, borrarUno } from '../components/cuentas/controller'

const router = express.Router()

router.get('/', async (_, response, next) => {
  response.send('<h1>Hello World!</h1>')
})

router.get('/api/cuentas', obtenerCuenta)

router.get('/api/cuentas/:id', obtenerUno)

router.post('/api/cuentas', crearCuenta)

router.get('/info', (_, res) => {
  const cuentas = obtenerCuenta.length
  res.send('<h3>PhoneBook has info for ' + cuentas + ' people</h3>' + '<h3>Hora de la Solicitud ' + new Date() + '</h3>')
})

router.delete('/api/cuentas/:id', borrarUno)

export default router
