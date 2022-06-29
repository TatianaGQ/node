
// callback

function llegar ()
{
    console.log("llegar");
}

function esperar(callback)
{
    setTimeout(() =>

    {
        console.log("esperar")
        callback()
    },1000);
}
function irse()
{
    console.log("irse")
}

function main()
{
    llegar()
    esperar(irse)
}
 main()

 // promesa


  function amarillo()
  {
    console.log("amarillo")
  }

 function azul()
 {

 
   return new Promise((resolver,rechazar)=>
    {
        setTimeout(()=>
        {
            console.log("azul")
            resolver()
        },1000)
    })
} 
  lapromesa.then(()=>
  {
     console.log("azul")
  }).catch(()=>
  {
    console.log("no hay color")
  })
  console.log("rojo");


  // async y await

  function nombre()
  {
    console.log("Tatiana")
  }

  function apellido()
  {
    return new Promise ((resolver,rechazar)=>
    {
        setTimeout(function()
        {
            console.log("Gomez")
            resolver();
        }, 1000)
    })
  }

async function sicronico()
{
    console.log("nombre");
    await conexion()
    console.log("apellido");
}

sincronico()
