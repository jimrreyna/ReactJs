
const ItemListContainer = ({ saludo }) => {
  
}

let productos= [
{id:'1',categoria: 'polos', name:"producto1", price:170, foto:'https://cdn.shopify.com/s/files/1/0468/1524/8536/products/MW0MW10764_C7D_alternate4_3e3b6e2d-afeb-40a1-a430-9102333eddf1_1024x1024@2x.png?v=1601334448'}
{id:'2',categoria: 'polos', name:"producto2", price:180, foto:'https://cdn.shopify.com/s/files/1/0468/1524/8536/products/MW0MW10764_XLG_alternate4_2d22b362-d147-4d25-9398-088509e48868_1024x1024@2x.png?v=1601334918'}
{id:'3',categoria: 'polos', name:"producto3", price:185,foto:'https://cdn.shopify.com/s/files/1/0468/1524/8536/products/MW0MW10765_ZFB_alternate4_1_50352a18-6e08-4686-869c-045ffaa68783_1024x1024@2x.png?v=1601334396'}
{id:'4',categoria:'shorts',name:"producto4",price:149,foto:'https://falabella.scene7.com/is/image/FalabellaPE/17976638_1?wid=1004&hei=1500&crop=248,0,1004,1500&qlt=70'}
{id:'5',categoria:'shorts',name:"producto5",price:100,foto:'https://falabella.scene7.com/is/image/FalabellaPE/17976638_1?wid=1004&hei=1500&crop=248,0,1004,1500&qlt=70'}
{id:'6',categoria:'shorts',name:"producto6",price:90,foto:'https://topitop.vteximg.com.br/arquivos/ids/266856-1000-1248/1874440_1.jpg?v=638021672262130000'}

]

const gFetch = () => {
  return new Promise((resolve, reject) => {
     
      setTimeout(()=>{
        resolve(productos)
    },3000)
  
  })
}

export default ItemListContainer

gFetch()
.then(resResuelto=> {
  console.log(resResuelto)
})
.catch(error=> console.log(error))
.finally(()=> console.log('siempre y al ultimo'))


return (
  <h1>
      { saludo}
  </h1>
  
  )