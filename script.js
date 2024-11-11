//LOG IT

// const promise = new Promise((resolve, reject) => {
//   console.log(reject);
//   console.log(resolve);
// });

// console.log(promise); // pending
// promise
//   .then((resolve) => {
//     //resolve
//     console.log(resolve);
//   })
//   .then((reject) => {
//     //rejected
//     console.log(reject);
//   })
//   .catch((error) => {
//     console.log(error);
//   }); //error

//------------------------------------------------------------------------------------

//POLKA LOVER

// function letsDance(dance) {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (dance === "polka") {
//         resolve("ja polka");
//       } else reject("nej inge polka");
//     }, 3000);
//   });
//   return promise;
// }

// letsDance("polka")
//   .then((resp) => {
//     console.log(resp);
//   })

//   .catch((err) => {
//     console.log(err);
//   });

//Hantera then: I din kedja av .then() så är det bra att komma ihåg att det
//första .then() hanterar det uppfyllda löftet och det andra .then() inte kommer att
//hantera ett avvisat löfte. hantera detta med .catch() istället.

//-------------------------------------------------------------------------------------------

// Async / Await, try / catch, Fetch, Webbprojektet
// function research() {
//   const promise = new Promise((res, rej) => {
//     setTimeout(() => {
//       res("research done");
//     }, 4000);
//   });
//   return promise;
// }
// function skissa() {
//   const promise = new Promise((res, rej) => {
//     setTimeout(() => {
//       res("skissa");
//     }, 2000);
//   });
//   return promise;
// }

// function figma() {
//   const promise = new Promise((res, rej) => {
//     setTimeout(() => {
//       res("figma");
//     }, 3000);
//   });
//   return promise;
// }

// function koda() {
//   const promise = new Promise((res, rej) => {
//     setTimeout(() => {
//       res("koda");
//     }, 3000);
//   });
//   return promise;
// }

// function stackoverflowa() {
//   const promise = new Promise((res, rej) => {
//     setTimeout(() => {
//       res("stack..");
//     }, 1000);
//   });
//   return promise;
// }

// function testa() {
//   const promise = new Promise((res, rej) => {
//     setTimeout(() => {
//       res("testar");
//     }, 2000);
//   });
//   return promise;
// }

// function fira() {
//   const promise = new Promise((res, rej) => {
//     setTimeout(() => {
//       res("firar");
//     }, 1000);
//   });
//   return promise;
// }

// function webProject() {
//   research()
//     .then((res) => {
//       console.log(res);
//       skissa().then((res) => {
//         console.log(res);
//         figma().then((res) => {
//           console.log(res);
//           koda().then((res) => {
//             console.log(res);
//             stackoverflowa().then((res) => {
//               console.log(res);
//               testa().then((res) => {
//                 console.log(res);
//                 fira().then((res) => {
//                   console.log(res);
//                 });
//               });
//             });
//           });
//         });
//       });
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }

// webProject();

// de här är lite meckigt för massa .then som går in i varandra...kallas en promise kedja
// kedjas i varandrars .then block
// promise kedja kan de kallas i async await me men den e lättare att avläsa
// i asyn await använd try & catch block!!! som nedan=>

//samma övning fast med async await =>

// async function webProject2() {
//   try {
//     const find = await research();
//     console.log(find);
//     const rita = await skissa();
//     console.log(rita);
//     const uxui = await figma();
//     console.log(uxui);
//     const code = await koda();
//     console.log(code);
//     const stackOw = await stackoverflowa();
//     console.log(stackOw);
//     const testing = await testa();
//     console.log(testing);
//     const wiho = await fira();
//     console.log(wiho);
//   } catch (error) {
//     console.log(error);
//   }
// }
// webProject2();

// mycket enklare o läsa o mindre kod!

// OBS, VID BÅDE ASYNC/AWAIT OCH .THEN() ANVÄNDER MAN
// SIG FÖRST AV ATT SKAPA PROMISES! DE JOBBAR IHOP!

//---------------------------------------------------------------------

// kaffemaskinen
// function brewCoffee(kaffetyp) {
//   const promiseKaffe = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (kaffetyp === "espresso") {
//         setTimeout(() => {
//           resolve("Your espresso is ready!");
//         }, 5000);
//       } else {
//         {
//           reject("We only serve espresso here!");
//         }
//       }
//     }, 2000); // pending 2 sek
//   });
//   return promiseKaffe; // de som returneras kommer ta tid ( kanske hämta data från API el nåt async ärende) och därav gör ja ett promise ,
//   //det som returneas är ju resolve eller reject
//   // när de returnerats klart..DÅ, gör jag en .then() som finns nedanför.
// }

// brewCoffee("espresso")
//   .then((resolve) => {
//     console.log(resolve);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//-----------------------------------------------------------------------------------------------------------------------------

//Matlagningstidslinje

// function förbereda() {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("förberett och klart");
//       reject("gick inte o förbereda");
//     }, 2000);
//   });
//   return promise;
// }

// function kokaVatten() {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("kokat och klart");
//       reject("gick inte o koka");
//     }, 4000);
//   });
//   return promise;
// }

// function lagaMaten() {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("gick o laga");
//       reject("gick INTE o laga");
//     }, 5000);
//   });
//   return promise;
// }

// function serveraMaten() {
//   const promise = new Promise((resolve, rejecect) => {
//     setTimeout(() => {
//       resolve("gick bra o servera");
//       rejecect("gick INTE o servera");
//     });
//   }, 1000);
//   return promise;
// }

// function allaSteg() {
//   förbereda()
//     .then((resolve) => {
//       console.log(resolve);
//       kokaVatten().then((resolve) => {
//         console.log(resolve);
//         lagaMaten().then((resolve) => {
//           console.log(resolve);
//           serveraMaten().then((resolve) => {
//             console.log(resolve);
//           });
//         });
//       });
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// }

// allaSteg();

// samma fast async await->

// async function allaSteg() {
//   try {
//     console.log(await förbereda());
//     console.log(await kokaVatten());
//     console.log(await lagaMaten());
//     console.log(await serveraMaten());
//   } catch (err) {
//     console.log(err);
//   }
// }

// allaSteg();

//------------------------------------------------------------------------------------------------------------------

//Bokläsningsutmaning

// function readBook(book) {
//   const promise = new Promise((res, rej) => {
//     // men här ska både res o rej me för man kan hantera 2 scenarion
//     setTimeout(() => {
//       if (book === "JavaScript: The Good Parts") {
//         res("Great choice!");
//       } else {
//         rej("Maybe try a different book?");
//       }
//     }, 2000);
//   });
//   return promise;
// }

// readBook("JavaScript: The Good Parts")
//   .then((res, rej) => {
//     // inte 2 st i paranteserana här..bara RES...för catch tar sedan om de rejectas på rad 312
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Inom .then()-metoden i en Promise, hanterar du bara det som händer när Promisen blir resolved
//, alltså när den lyckas. Den tar bara ett argument för res, vilket är resultatet av en lyckad Promise. som på rad 307 skrev
// jag bara in rej nu.men de ska INTE med...rejected ska med isttällett på catch rad 312 för ta felet

// samma uppg men med async await

// function readBook(book) {
//   const promise = new Promise((res, rej) => {
//     setTimeout(() => {
//       if (book === "JavaScript: The Good Parts") {
//         res("Great choice!");
//       } else {
//         rej("Maybe try a different book?");
//       }
//     }, 2000);
//   });
//   return promise;
// }

// async function myAsyncFunc() {
//   try {
//     console.log(await readBook("JavaScript: The Good Parts"));
//   } catch (err) {
//     console.log(err);
//   }
// }

// myAsyncFunc();

//--------------------------------------------------------------------------------------------------------------------------------

// Filmkväll

// makePopcorn() - Tar 2 sekunder och löser med "Popcorn ready!". getDrinks() -
// Tar 1 sekund och löser med "Drinks are cold!". chooseMovie() - Tar 3 sekunder och löser med "Movie selected!".

// Använd Promise.all() för att vänta på att alla dessa förberedelser är klara innan du loggar "Let's start the movie night!".

function makePopcorn() {
  const promise = new Promise((res, rej) => {
    setTimeout(() => {
      res("popcorn ready");
    }, 2000);
  });
  return promise;
}

function getDrinks() {
  const promise = new Promise((res, rej) => {
    setTimeout(() => {
      res("drinks are cold");
    }, 1000);
  });
  return promise;
}

function chooseMovies() {
  const promise = new Promise((res, rej) => {
    setTimeout(() => {
      res("movie selected");
    }, 3000);
  });
  return promise;
}

Promise.all([makePopcorn(), getDrinks(), chooseMovies()])
  .then((res) => {
    console.log(res);
    console.log("Let's start the movie night!");
  })
  .catch((err) => {
    console.log(err); // varför är de en callback på .catch( )här men när man gör try catch med async / await är catch (){}
  });

// ist för en .then här kan ja köra async /await här ist?kolla imorgon!
