function Random(){
    let a = Math.random()*100;
    return <h1>The random number is : {Math.round(a)}</h1>
}

export default Random;