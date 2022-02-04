const mongoose = require("mongoose");

const todosSchema = new mongoose.Schema(
  {
    task: { type: String },
    tags: [{ type: String, required: false, default: "assinment" }],
    status: { type: String },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Todos = mongoose.model("product", todosSchema);
module.exports = Todos;
