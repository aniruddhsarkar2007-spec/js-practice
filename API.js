async function demo()
{
    let d = await  fetch ('https://jsonplaceholder.typicode.com/photos')
    let a = await d.json()
    console.log(a)
}
demo()

