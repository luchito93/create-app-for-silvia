import { getImagen} from './utils.js';
export function Profile ({
    imagenID,
    name,
    preofesion,
    awards,
    discoverer,
    imagensize = 70
}){
    return(
        <section className="profile">
            <h1>{name}</h1>
            <img 
            className="avatar"
            src={getImagen(imagenID)}
            alt={name}
            width={imagensize}
            height={imagensize}
            />
            <ul>
                <li> <b>preofesion:</b> {preofesion}</li>
                <li> <b>awards{awards.length}:</b>({awards.join(',')})</li>
                <li> <b> discoverer:</b>{discoverer}</li>
            </ul>
        </section>
    );
}
    
export default function Galleria(){
    return(
        <div>
            <h1> Notable cientifiaca</h1>
            <Profile
             imagenID="szV5sdG"
             name="Maria Skłodowska-Curie"
             profesion="polonium (chemical element)"
             awards={[
                'Nobel Prize in Physics',
                'Nobel Prize in Chemistry',
                'Davy Medal',
                'Matteucci Medal'
              ]}
             />
             <Profile
             imagenID='YfeOqp2'
             name='Katsuko Saruhashi'
             preofesion='geochemist'
             discoverer="a method for measuring carbon dioxide in seawater"
             awards={[
               'Miyake Prize for geochemistry',
               'Tanaka Prize'
             ]}
             />
        </div>

    );

}
