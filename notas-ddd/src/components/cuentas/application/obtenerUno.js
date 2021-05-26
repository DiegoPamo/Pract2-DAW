/**
 * @param {Object} obj
 * @param {import('../infraestructure/MongoCuentaRepository')} obj.CuentaRepository
 */
export default ({ CuentaRepository }) => {
  return async (unica) => {
    return await CuentaRepository.obtenUno(unica)
  }
}
