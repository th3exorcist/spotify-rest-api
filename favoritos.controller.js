module.exports = {

  get: (req, res) => {
    // res send  req body

    res.status(200).send("Buscando Favoritos");
  },

  post: (req, res) => {
    res.status(200).send("Criando Favoritos");
  }

  put: (req, res) => {
    res.status(200).send("Editando Favoritos");
  }

  delete: (req, res) => {
    res.status(200).send("Deletando Favoritos");
  }
}