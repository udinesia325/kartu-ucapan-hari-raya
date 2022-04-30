const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.set("views", "./views");
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get('/', (req, res) => {
	const nama = req.query.nama || "";
    res.render('index', {nama});
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
