import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';


const useHabitacion = () => {    

    const data = useStaticQuery(graphql`
        query{
            allDatoCmsHabitacion{
                nodes{
                    titulo
                    id
                    slug
                    contenido
                    imagen{
                        fluid(maxWidth:1200){
                            ...GatsbyDatoCmsFluid
                        }
                    }      
                }
            }
        }
    `);
    //console.log(data);
    
    return data.allDatoCmsHabitacion.nodes.map(habitacion =>({
        titulo: habitacion.titulo,
        id: habitacion.id,
        contenido: habitacion.contenido,
        imagen: habitacion.imagen,
        slug: habitacion.slug,
    }))
}
 
export default useHabitacion;