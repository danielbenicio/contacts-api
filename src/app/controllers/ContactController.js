const ContactReporsitory = require('../repositories/ContactRepository');

class ContactController {
  async index(req, res) {
    // Listar todos os registros
    const contacts = await ContactReporsitory.findAll();
    res.json(contacts);
  }

  async show(req, res) {
    // Obter 1 registro
    const { id } = req.params;
    const contact = await ContactReporsitory.findById(id);
    if(!contact) {
      //404: Not Found
      return res.status(404).json({ error: 'User not found' });
    }

    res.json(contact);
  }

  async store(req, res) {
    // Criar novo registro
    const { name, email, phone, category_id } = req.body;

    if(!name) {
      return res.status(400).json(
        { error: 'Name is required' }
      );
    }

    const contactExists = await ContactReporsitory.findByEmail(email);

    if(contactExists) {
      return res.status(400).json(
        { error: 'This email is already in use' }
      );
    };

    const contact = await ContactReporsitory.create({
      name, email, phone, category_id,
    });

    res.json(contact);
  }

  async update(req, res) {
    // Editar um registro
    const { id } = req.params;
    const { name, email, phone, category_id } = req.body;

    const contactExists = await ContactReporsitory.findById(id);
    if(!contactExists) {
      return res.status(404).json({ error: 'User not found' });
    }

    if(!name) {
      return res.status(400).json(
        { error: 'Name is required' }
      );
    }

    const contactByEmail = await ContactReporsitory.findByEmail(email);
    if(contactByEmail && contactByEmail.id !== id) {
      return res.status(400).json(
        { error: 'This email is already in use' }
      );
    };

    const contact = await ContactReporsitory.update(id, {
      name, email, phone, category_id,
    });

    res.json(contact);
  }

  async delete(req, res) {
    // Deletar um registro
    const { id } = req.params;
    const contact = await ContactReporsitory.findById(id);
    if(!contact) {
      //404: Not Found
      return res.status(404).json({ error: 'User not found' });
    }

    await ContactReporsitory.delete(id);
    //204: Not Content
    res.sendStatus(204);
  }
}

// Singleton
module.exports = new ContactController();
