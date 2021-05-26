/**
 * @param {Object} obj
 * @param {import('../infraestructure/MongoCuentaRepository')} obj.CuentaRepository
 */
export default ({ CuentaRepository }) => {
  return async (borrada) => {
    return await CuentaRepository.borrarUno(borrada)
  }
}
