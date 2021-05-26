/**
 * @param {Object} obj
 * @param {import('../infraestructure/MongoCuentaRepository')} obj.CuentaRepository
 */
export default ({ CuentaRepository }) => {
  return async ({ cuenta, nombre, entidad, dinero }) => {
    const nuevaCuenta = {
      cuenta: cuenta,
      nombre: nombre,
      entidad: entidad,
      dinero: dinero
    }
    return await CuentaRepository.add(nuevaCuenta)
  }
}
