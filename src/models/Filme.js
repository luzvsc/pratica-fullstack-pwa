const mongoose = require("mongoose");

const filmeSchema = new mongoose.Schema(
  {
    titulo: {
      type: String,
      required: true,
    },
    genero: {
      type: String,
      required: true,
      unique: true,
    },
    ano: {
      type: Number,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Filme", filmeSchema);
