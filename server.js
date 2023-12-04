const express = require("express");
const cors = require("cors");
const app = express();
const port = 8080;
const models = require("./models");

app.use(express.json());
app.use(cors());

app.get("/products", (req, res) => {
  const query = req.query;
  console.log("QUERY :", query);
  res.send({
    products: [
      {
        id: 1,
        name: "농구공",
        price: "100000",
        seller: "조던",
        imageUrl: "/images/products/basketball1.jpeg",
      },
      {
        id: 2,
        name: "축구공",
        price: "200000",
        seller: "메시",
        imageUrl: "/images/products/soccerball1.jpg",
      },
      {
        id: 3,
        name: "키보드",
        price: "15000",
        seller: "구랩",
        imageUrl: "/images/products/keyboard1.jpg",
      },
    ],
  });
});

app.post("/products", (req, res) => {
  const body = req.body;
  res.send({
    body,
  });
});

app.get("/products/:id/events/:eventsId", (req, res) => {
  const params = req.params;
  const { id, eventsId } = params;
  res.send(`id는 ${id}와 ${eventsId} 입니다.`);
});

app.listen(port, () => {
  console.log("그랩에 쇼핑몰 서버가 돌아가고 있습니다.");
  models.sequelize
    .sync()
    .then(() => {
      console.log("db연결 성공");
    })
    .catch(() => {
      console.error(error);
      console.log("db연결 에러");
      process.exit();
    });
});
