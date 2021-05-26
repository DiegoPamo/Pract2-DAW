import MongoLib from '../../../lib/mongo'

class MongoPersonaRepository {
  constructor () {
    this.collection = 'cuenta'
    this.mongoDB = new MongoLib()
  }

  async add (cuenta) {
    const id = await this.mongoDB.create(this.collection, cuenta)
    return { id, ...cuenta }
  }

  async all () {
    const todos = await this.mongoDB.getAll(this.collection)
    return { todos }
  }

  async modificar (id, cuenta) {
    return await this.mongoDB.get(this.collection, id, cuenta)
  }

  async obtenUno (unica) {
    return await this.mongoDB.get(this.collection, unica)
  }

  async borrarUno (borrada) {
    return await this.mongoDB.delete(this.collection, borrada)
  }

  // Obtener las cuentas de la entidad
  async obtenerByEntidad (entity) {
    return await this.mongoDB.obtenerByEntidad(this.collection, entity)
  }
}

export default MongoPersonaRepository
