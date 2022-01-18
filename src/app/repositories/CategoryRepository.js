const db = require('../../database');

class CategoryRepository {
  async findALl() {
    const rows = await db.query(`SELECT * FROM categories ORDER BY name ASC`);
    return rows;
  }

  async create({name}) {
    const [row] = await db.query(`
      INSERT INTO categories(name)
      VALUES($1)
      RETURNING *
    `, [name]);
    return row;
  }

  async delete(id) {
    const deleteCat = await db.query('DELETE FROM categories WHERE id = $1', [id]);
    return deleteCat;
  }
}

module.exports = new CategoryRepository();
