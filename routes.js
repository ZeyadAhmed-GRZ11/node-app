const express = require("express");
const router = express.Router();
const query = require("./conn");

router.get("/", (req, res) => {
  query.execute("SELECT * FROM products", (err, data) => {
    if (err) {
      res.json(err);
    } else {
      res.json(data);
    }
  });
});

router.get("/", (req, res) => {
  query.execute("SELECT * FROM products", (err, data) => {
    if (err) {
      res.json(err);
    } else {
      res.json(data);
    }
  });
});
router.post("/", (req, res) => {
  const { name, price, qty } = req.body;
  query.execute(
    `INSERT INTO products(name, price, qty) VALUES ('${name}','${price}','${qty}')`,
    (err, data) => {
      if (err) {
        res.json(err);
      } else {
        res.json({ msg: "product added successfully" });
      }
    }
  );
});

router.put("/:id", (req, res) => {
  const id = req.params.id;
  const { name, price, qty } = req.body;
  query.execute(
    `UPDATE products SET name='${name}',price='${price}',qty='${qty}' WHERE id = ${id}`,
    (err, data) => {
      if (err) {
        res.json(err);
      } else {
        res.json({ msg: "product updated successfully" });
      }
    }
  );
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  query.execute(`DELETE FROM products WHERE id = ${id}`, (err, data) => {
    if (err) {
      res.json(err);
    } else {
      res.json({ msg: "product deleted successfully" });
    }
  });
});
module.exports = router;
