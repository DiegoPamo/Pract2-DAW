/**
 * @param {Object} obj
 * @param {import('../infraestructure/MongoCuentaRepository')} obj.CuentaRepository
 */
export default ({ CuentaRepository }) => {
  return async ({ id }) => {
    return await CuentaRepository.obtenerByEntidad(id)
  }
}
