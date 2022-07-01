
const {proceso1, proceso2} = require("./node");

async function respuesta()
{
    console.time("Tiempo: ");
    const ejecucion1 = await proceso1();
    const ejecucion2 =await proceso2();
    console.timeEnd("Timepo");

    console.log("Tiempo usado ", ejecucion1);
    console.log("Tiempo usado ", ejecucion2);
}

respuesta()

// paralelo

const {proceso1, proceso2} = require("./node");

async function respuesta()
{
    try
    {
    console.time("Tiempo: ");
   const resp = await Promise.all([ proceso1(), proceso2() ]);
    console.timeEnd("Timepo");

    console.log("Tiempo usado ", resp [0]);
    console.log("Tiempo usado ", resp [1]);
    }
    catch(errores)
    {
        console.log(errores)

    }
}

respuesta()