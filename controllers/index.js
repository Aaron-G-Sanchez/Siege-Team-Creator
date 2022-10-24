const { Operator } = require('../models')

const findAllOperators = async (req, res) => {
  try {
    const operators = await Operator.find()
    return res.status(200).json({ operators })
  } catch (err) {
    return res.status(500).send(err.message)
  }
}

const findAttackOps = async (req, res) => {
  try {
    const attackers = await Operator.find({ team: 'Attack' })
    return res.status(200).json({ attackers })
  } catch (err) {
    return res.status(500).send(err.message)
  }
}

const findDefenseOps = async (req, res) => {
  try {
    const defenders = await Operator.find({ team: 'Defense' })
    return res.status(200).json({ defenders })
  } catch (err) {
    return res.status(500).send(err.message)
  }
}

const findAttackOpById = async (req, res) => {
  try {
    const { id } = req.params
    const attackerId = await Operator.findById(id)
    if (attackerId) {
      return res.status(200).json({ attackerId })
    }
  } catch (err) {
    return res.status(500).send(err.message)
  }
}

const findDefenseOpById = async (req, res) => {
  try {
    const { id } = req.params
    const defenseId = await Operator.findById(id)
    if (defenseId) {
      return res.status(200).json({ defenseId })
    }
  } catch (err) {
    return res.status(500).send(err.message)
  }
}

module.exports = {
  findAllOperators,
  findAttackOps,
  findDefenseOps,
  findAttackOpById,
  findDefenseOpById
}
