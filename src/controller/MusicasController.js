import { musicas_info } from "../model/musicas.js";

export const getIndex = async (req, res) => {
  try {
    const musicas = await musicas_info.findAll();
    res.status(200).render("index.ejs", {
      musicas,
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};
//isso será post no futuro \/
export const getCreate = async (req, res) => {
  try {
    const musicas = await musicas_info.findAll();
    res.status(200).render("create.ejs");
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const postCreate = async (req, res) => {
  try {
    const { nome, banda, ano, linky, img} = req.body;
    await musicas_info.create({
      nome,
      banda,
      ano,
      linky,
      img,
    });
    res.status(200).redirect("/");
  } catch (error) {
    console.log(req.body);
    res.status(500).send(error.message);
  }
};

export const getDetails = async (req, res) => {
  try {
    const musica = await musicas_info.findByPk(req.params.id);
    res.status(200).render("detalhes.ejs", {
      musica,
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};
export const getDelete = async (req, res) => {
  try {
    await musicas_info.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.redirect("/");
  } catch (error) {
    res.status(500).send(error.message);
  }
};
export const getEdit = async (req, res) => {
  const musica = await musicas_info.findByPk(req.params.id);
  res.status(200).render("editar.ejs", {
    musica,
  });
};
export const postEdit = async (req, res) => {
  const { nome, banda, ano, linky,img } = req.body;
  try {
    await musicas_info.update(
      {
        nome: nome,
        banda: banda,
        ano: ano,
        linky: linky,
        img: img,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.redirect("/");
  } catch (error) {
    res.status(500).send(error.message);
  }
};
