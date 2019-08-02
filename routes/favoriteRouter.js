const express = require('express')
const favoriteRouter = express.Router()
const User = require('../models/favorites.js')
const jwt = require('jsonwebtoken')






module.exports = favoriteRouter