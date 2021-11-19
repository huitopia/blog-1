const mongoose = require("mongoose");
const connect = () => {
  mongoose
    .connect("mongodb://test:1234@15.164.245.175:27017/admin", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      ignoreUndefined: true,
    })
    .catch(err => console.log(err));
};
mongoose.connection.on("error", err => {
  console.error("몽고디비 연결 에러", err);
});
module.exports = connect;