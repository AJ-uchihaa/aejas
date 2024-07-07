let url = 'https://meowfacts.herokuapp.com';

async function aj(){
   try {
    let q = await fetch(url);
    let w = await q.json();
    console.log(w)
   } catch (error) {
      alert('error')
   }
    
}
aj();