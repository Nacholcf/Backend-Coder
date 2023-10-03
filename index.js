class ProductManager {

    constructor(){
      this.products =[],
      this.id = 1
    }
  
    addProduct (product){
      const {title, description, price, thumbnail, code, stock} = product
      
      const newProduct = {
        id: this.id++,
        title,
        description,
        price,
        thumbnail,
        code,
        stock
      }
      
      if(
        !title || 
        !description || 
        !price ||
        !thumbnail ||
        !code || 
        !stock
      ){
        console.log('Error: faltan datos')
        return
      }      
      if ( this.products.some(p => p.code === code) ){
        console.log('Error: Ya existe este código de producto')
        return
      }
          
      this.products.push(newProduct)
      
    }
    
    getProducts() {
      return this.products
    }
  
    getProductByID = (id) => {
      const product = this.products.find(p => p.id === id)
      return product ? product : 'ID Not Found'
    }
  
  }
  
  const productManager = new ProductManager()
  
  console.log('Array al inicio: ', productManager.getProducts())
  
  productManager.addProduct({
    title:'producto de prueba',
    description:'Este es un producto de prueba',
    price:500,
    thumbnail:'Sin Foto',
    code:'aaa001',
    stock:20
  })
  
  console.log('agregar productos: ', productManager.getProducts())
  
  productManager.addProduct({
    title:'producto de prueba',
    description:'Este es un producto de prueba',
    price:200,
    thumbnail:'Sin Foto',
    code:'aaa001',
    stock:20
  })
  
  console.log('Este es el producto segun ID:', productManager.getProductByID(8))