const express = require("express");
const Image = require("../model/storeModel");
const jwt = require("jsonwebtoken");

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */
exports.getStore = async (req, res) => {
  await Image.find({})
    .then((store) => res.status(200).json(store))
    .catch((error) => res.status(500).json(error));
};

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */
exports.getArticle = async (req, res) => {
  await Image.findOne({ _id: req.body.id })
    .then((store) => res.status(200).json(store))
    .catch((error) => res.status(500).json(error));
};
