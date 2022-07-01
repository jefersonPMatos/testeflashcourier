const { Track, Routes } = require("../models");

const trackController = {
  track: async (req, res) => {
    const { id } = req.params;

    const tracked = await Track.findOne({ where: { id } });

    return res.status(200).json({ tracked });
  },

  registerPack: async (req, res) => {
    const { id, status } = req.body;
    await Track.create({
      id,
      status,
    });
    return res.status(200).json({ msg: "succesfully updated" });
  },
};

module.exports = trackController;
