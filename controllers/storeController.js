const express = require("express");
const Image = require("../model/storeModel");

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */
exports.getStore = async (req, res) => {
  await Image.find({})
    .then((article) => {
      if (!article)
        return res.status(404).json({ message: "article Not Found !" });

      return res.status(200).json(article);
    })
    .catch((error) => {
      console.log(error);
      return res.status(500).json(error);
    });
};

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */
exports.getArticle = async (req, res) => {
  await Image.findOne({ email: req.body.email })
    .then((article) => {
      if (!article)
        return res.status(404).json({ message: "article Not Found !" });

      return res.status(200).json(article);
    })
    .catch((error) => {
      console.log(error);
      return res.status(500).json(error);
    });
};
