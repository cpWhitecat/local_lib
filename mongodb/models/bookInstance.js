const mongoose = require('mongoose');
const {DateTime} = require('luxon')
const Schema = mongoose.Schema;

const bookInstanceSchema = new Schema({

    book: { type: Schema.Types.ObjectId, ref: 'book', required: true },

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

bookInstanceSchema
  .virtual('due_back_formatted')
  .get(function(){
    const formattedTime = DateTime.fromJSDate(this.due_back).setLocale('zh').toLocaleString(DateTime.DATE_MED)
    return formattedTime
  })

// 导出 BookInstancec 模型
module.exports = mongoose.model('bookInstance', bookInstanceSchema);
