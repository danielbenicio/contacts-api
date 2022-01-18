const CategoryRepository = require('../repositories/CategoryRepository')

class CategoryController {
  async index(req, res) {
    const categories = await CategoryRepository.findALl();
    res.json(categories)
  }

  async store(req, res) {
    const { name } = req.body;

    if(!name) {
      return res.status(400).json(
        { error: 'Name is required' }
      );
    }

    const category = await CategoryRepository.create({ name });

    res.json(category)
  }

  async delete(req, res) {
    const { id } = req.params;

    await CategoryRepository.delete(id);

    res.sendStatus(204);
  }
}

module.exports = new CategoryController();
