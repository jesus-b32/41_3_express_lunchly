/** Start server for Lunchly. */

require('@dotenvx/dotenvx').config();
const app = require("./app");

app.listen(3000, function() {
  console.log("listening on 3000");
});
