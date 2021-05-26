/**
 * @param {Object} obj
 * @param {import('../infraestructure/MongoCuentaRepository')} obj.CuentaRepository
 */
export default ({ CuentaRepository }) => {
  return async ({ id, dinero }) => {
    const cuenta = await CuentaRepository.obtenUno(id)
    const cuentadinero = parseInt(cuenta.dinero)
    const nuevaCuentaDinero = cuentadinero + parseInt(dinero)
    const nuevaCuenta = {
      dinero: nuevaCuentaDinero
    }
    return await CuentaRepository.add(nuevaCuenta)
  }
}
