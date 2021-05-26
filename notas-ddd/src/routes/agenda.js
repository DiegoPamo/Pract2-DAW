import express from 'express'
import { crearCuenta, obtenerCuenta, obtenerUno, borrarUno } from '../components/cuentas/controller'

const router = express.Router()

router.get('/', async (_, response, next) => {
  response.send('<h1>Hello World!</h1>')
})

router.get('/api/personas', obtenerCuenta)

router.get('/api/personas/:id', obtenerUno)

router.post('/api/personas', crearCuenta)

router.get('/info', (_, res) => {
  const persons = obtenerPersona.length
  res.send('<h3>PhoneBook has info for ' + persons + ' people</h3>' + '<h3>Hora de la Solicitud ' + new Date() + '</h3>')
})

router.delete('/api/personas/:id', borrarUno)

export default router
