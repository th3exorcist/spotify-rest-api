module.exports = {

  get: (req, res) => {
    // res send  req body

    res.status(200).send("Buscando Músicas");
  },

  post: (req, res) => {
    res.status(200).send("Criando Músicas");
  }

  put: (req, res) => {
    res.status(200).send("Editando Músicas");
  }
}