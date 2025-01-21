
/**
 * Promise()
 * pending -> pendiente
 * fullfilled -> cuando se resuelve
 * Rejected -> cuando no se resolvió
 * 
 * 
 * resolve
 * reject -> cuando no se puede resolver
 * 
 * then() -> cuando la promesa se resuelve
 * catch -> cuando no se resuelve se puede obtener el error
 */

const promise = new Promise((resolve, reject)=>{
    setTimeout(() => {
        let operationSuccessful = true;
        if(operationSuccessful){
            resolve("La operación fue exitosa")
        }else{
            reject("Falló la operación")
        }
    }, 2000);
    
});

promise
    .then((successMessage)=>{
        console.log(successMessage)
    })
    .catch((errorMessage)=>{
        console.log(errorMessage)
    });