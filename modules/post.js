const mongoose = require("mongoose");

const postSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    content: {
      type: String,
      required: true,
      trim: true,
    },
    meta: {
      type: String,
      required: true,
      trim: true,
    },
    tags: [String],
    author: {
      type: mongoose.Schema.Types.ObjectId,
      default: "Admin",
    },
    thumbnail: {
      type: Object,
      url: {
        type: URL,
        require: true,
      },
      slug: {
        type: String,
        required: true,
        trim: true,
        unique: true,
      },
      public_id: {
        type: String,
        require: true,
      },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Post", postSchema);
