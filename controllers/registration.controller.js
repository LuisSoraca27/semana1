const { Registrations } = require("../models/registrations.model");

// get all registration
const getAllregistration = async (req, res) => {
  try {
    const allRegistration = await Registrations.findAll();
    res.status(200).json({
      status: "success",
      data: { allRegistration },
    });
  } catch (error) {
    console.log(error);
  }
};
// get one registration
const getOneRegistration = async (req, res) => {
  try {
    const { id } = req.params;
    const registration = await Registrations.findOne({ where: { id } });

    if (!registration) {
      res.status(404).json({
        status: "error",
        message: "registration not found",
      });
    }
    res.status(200).json({
      status: "success",
      data: { registration },
    });
  } catch (error) {
    console.log(error);
  }
};

// create new registration
const createRegistration = async (req, res) => {
  try {
    const { entranceTime } = req.body;

    const newRegistration = await Registrations.create({ entranceTime });
    res.status(201).json({
      status: "success",
      data: { newRegistration },
    });
  } catch (error) {
    console.log(error);
  }
};

// update registration
const updateRegistration = async (req, res) => {
  try {
    const { exitTime } = req.body;
    const { id } = req.params;
    const registration = await Registrations.findOne({ where: { id } });

    if (!registration) {
      return res.status(404).json({
        status: "error",
        messange: "registration not found",
      });
    }
    await registration.update({ exitTime, status: "out" });
    res.status(200).json({
      status: "success",
      data: { registration },
    });
  } catch (error) {
    console.log(error);
  }
};

// update status registration
const updateStatusRegistration = async (req, res) => {
  try {
    const { id } = req.params;
    const registration = await Registrations.findOne({ where: { id } });

    if (!registration) {
      res.status(404).json({
        status: "error",
        message: "registration not found",
      });
    }

    await registration.update({ status: "cancelled" });

    res.status(200).json({
      status: "success",
      data: { registration },
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createRegistration,
  getAllregistration,
  updateRegistration,
  getOneRegistration,
  updateStatusRegistration,
};
