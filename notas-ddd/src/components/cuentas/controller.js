import MongoCuentaRepository from './infraestructure/MongoCuentaRepository'
import CrearCuenta from './application/crearCuenta'
import ObtenerCuenta from './application/listarCuenta'
import ModificarCuenta from './application/modificarCuenta.js'
import ObtenerUno from './application/obtenerUno'
import BorrarUno from './application/borrarUno'

import AgregarMonto from './application/agregarMonto'
import DesembolsarMonto from './application/desembolsarMonto'
import ObtenerbyEntidad from './application/obtenerbyEntidad'
import ObtenertodoDinero from './application/obtenertodoDinero'

import { schemaName } from './domain/validate'

const CuentaRepository = new MongoCuentaRepository()

/**
 * @param {import('express').Request} _
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
export const crearCuenta = async (req, res, next) => {
  try {
    const query = CrearCuenta({ CuentaRepository })
    await schemaName.validateAsync(req.body)
    const persona = await query(req.body)
    res.status(201).json({
      data: persona,
      message: 'created'
    })
  } catch (e) {
    next(e)
  }
}

export const obtenerCuenta = async (req, res, next) => {
  try {
    const query = ObtenerCuenta({ CuentaRepository })
    const persona = await query(req.body)
    res.status(201).json({
      data: persona,
      message: 'datos obtenidos'
    })
  } catch (e) {
    next(e)
  }
}

export const modificarCuenta = async (req, res, next) => {
  try {
    const query = ModificarCuenta({ CuentaRepository })
    const persona = await query(req.body)
    res.status(201).json({
      data: persona,
      message: 'datos modificados'
    })
  } catch (e) {
    next(e)
  }
}

export const obtenerUno = async (req, res, next) => {
  try {
    const id = req.params.id
    const query = ObtenerUno({ CuentaRepository })
    const persona = await query(id)
    res.status(201).json({
      data: persona,
      message: 'Persona Obtenida'
    })
  } catch (e) {
    next(e)
  }
}

export const borrarUno = async (req, res, next) => {
  try {
    const id = req.params.id
    const query = BorrarUno({ CuentaRepository })
    await query(id)
    res.status(204).end()
  } catch (e) {
    next(e)
  }
}

export const agregarMonto = async (req, res, next) => {
  try {
    const query = AgregarMonto({ CuentaRepository })
    const account = await query(req.body)
    res.status(201).json({
      data: account,
      message: 'Abono OK'
    })
  } catch (e) {
    next(e)
  }
}

export const desembolsarMonto = async (req, res, next) => {
  try {
    const query = DesembolsarMonto({ CuentaRepository })
    const account = await query(req.body)
    res.status(201).json({
      data: account,
      message: 'Desembolso OK'
    })
  } catch (e) {
    next(e)
  }
}

export const transferirMonto = async (req, res, next) => {
  try {
    const query = TransferirMonto({ CuentaRepository })
    const account = await query(req.body)
    res.status(201).json({
      data: account,
      message: 'Tranfer OK'
    })
  } catch (e) {
    next(e)
  }
}

export const obtenerbyEntidad = async (req, res, next) => {
  try {
    const query = ObtenerbyEntidad({ CuentaRepository })
    const contact = await query(req.params)
    res.status(200).json({
      data: contact,
      message: 'Lista de Cuentas'
    })
  } catch (e) {
    next(e)
  }
}

export const obtenertodoDinero = async (req, res, next) => {
  try {
    const query = ObtenertodoDinero({ CuentaRepository })
    const contact = await query(req.params)

    var AllMoney = contact.reduce(function (prev, cur) {
      return prev + cur.money
    }, 0)

    res.status(200).json({
      data: AllMoney,
      message: 'Todo el dinero de tus cuentas'
    })
  } catch (e) {
    next(e)
  }
}
