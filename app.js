const express = require("express");

const { userRouter } = require("./routes/registrations.routes");

const app = express();
app.use(express.json());

app.use("/registration", userRouter);

// Catch non-existing endpoints
app.all('*', (req, res) => {
	res.status(404).json({
		status: 'error',
		message: `${req.method} ${req.url} does not exists in our server`,
	});
});

module.exports = {
  app,
};
