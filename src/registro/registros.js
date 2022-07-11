const person = {
    nombre: 'kim shim',
    theme: {
        backgroundColor: 'black',
        color: 'blue'
    }
};

export default function Todolist(){
    return(
        <div style={person.theme}>
            <h1>{person.nombre} globin</h1>
            <img 
            className = 'avatar'
            src= "https://i.pinimg.com/736x/9e/ab/0e/9eab0e92dea9cba03e1b047b0d54727b--fan-art-goblin-drawing-kdrama.jpg"
            alt= " dorama de globin"
            />

            <ul>
                <li> serie extrenada en 2016</li>
                <li> globim es un ser inmoral</li>
                <li> un hobre q paso años cumpiedo su maldicon </li>
            </ul>
        </div>
    );
}