const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookInstanceSchema = new Schema({

    book: { type: Schema.Types.ObjectId, ref: 'Book', required: true },

    imprint: {type: String, required: true},
    status: {
      type: String,
      required: true,
      enum: ['Available', 'Maintenance', 'Loaned', 'Reserved'],
      default: 'Maintenance'
    },
    due_back: {type: Date, default: Date.now}
  }
);

// 虚拟属性'url'：藏书副本 URL
bookInstanceSchema
  .virtual('url')
  .get(function () {
    return '/catalog/bookinstance/' + this._id;
  });

// 导出 BookInstancec 模型
module.exports = mongoose.model('bookInstance', bookInstanceSchema);
