const mongoose = require('mongoose');
const User = mongoose.model('users');

module.exports = (app) => {

  // GET /api/user (CRUD -> READ)
  app.get(`/api/user`, async (req, res) => {
    const persons = await User.find();
    return res.status(200).send(persons);
  });

  // POST /api/user (CRUD -> CREATION)
  app.post(`/api/user`, async (req, res) => {
    const user = await User.create(req.body);
    return res.status(201).send({
      error: false,
      user,
    });
  });

  // GET /api/user/:id (CRUD -> READ)
  app.get(`/api/user/:id`, async (req, res) => {
    const { id } = req.params;

    const user = await User.findById(id);

    return res.status(200).send({
      error: false,
      user,
    });
  });

  // PUT /api/user/:id (CRUD -> UPDATE)
  // PUT /api/user/5fc94978f648a175792c30d3
  app.put(`/api/user/:id`, async (req, res) => {
    const { id } = req.params;

    const user = await User.findByIdAndUpdate(id, req.body);

    return res.status(202).send({
      error: false,
      user,
    });
  });

  // DELETE /api/user/:id (CRUD -> DELETE)
  app.delete(`/api/user/:id`, async (req, res) => {
    const { id } = req.params;

    const user = await User.findByIdAndDelete(id);

    return res.status(202).send({
      error: false,
      user,
    });
  });
};
