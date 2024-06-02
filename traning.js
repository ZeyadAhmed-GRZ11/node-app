const { query } = require("express")

app.get('/',(req,res)=>{
    query.query("SELECT * FROM products",(err,data)=>{
        if(err){
            res.json(err)
        }else{
           res.json(data)
        }
    })
})

app.post('/',(req,res)=>{
    const {name,price, qty} = req.body
    query.query (`INSERT INTO products(name,price,qty) VALUES ('${name}, '${price}',${qty}')`,
    (err,data)=>{
        if(err){
            res.json(err)
        }else{
            res.json({msg: "Added done"})
        }
    }
   )
})
app.put('/:id',(req,res)=>{
    const id = req.params.id
    const {name,price, qty} = req.body
    query.query (`UPDATE products SET name='${name}', price='${price}',qty='${qty}' WHERE id=${id}`,
    (err,data)=>{
        if(err){
            res.json(err)
        }else{
            res.json({msg: "updated done"})
        }
    }
   )
})
app.delete('/:id',(req,res)=>{
    const id = req.params.id
    query.query (`DELETE FROM products WHERE id=${id}`,
    (err,data)=>{
        if(err){
            res.json(err)
        }else{
            res.json({msg: "deleted"})
        }
    }
   )
})

