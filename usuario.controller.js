module.exports = {

  get: (req, res) => {
    // res send  req body

    res.status(200).send("Autenticando Usuarios");
  },

  post: (req, res) => {
    res.status(200).send("Criando Usuarios");
  }

  put: (req, res) => {
    res.status(200).send("Editando Usuarios");
  }
}