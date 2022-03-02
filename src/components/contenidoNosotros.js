import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { css } from '@emotion/react';
import Image from 'gatsby-image';
import styled from '@emotion/styled';

const Contenido = styled.div`
    padding-top: 1.5rem;
    max-width: 1200px;
    width: 95%;
    margin: 0 auto;

    @media (min-width: 768px){
        display: grid;
        grid-template-columns: repeat(2,1fr);
        column-gap: 3rem;
    }
    p{
        line-height: 1.5;
        margin-top: .5rem;
    }
`;

const ContenidoNosotros = () => {

    const resultado = useStaticQuery(graphql`
    query{
        allDatoCmsPagina(filter: {slug: {eq: "nosotros"}}){
            nodes{
                titulo
                contenido
                imagen{
                    fluid(maxWidth: 1200){
                        ...GatsbyDatoCmsFluid
                    }
                }
            }
        }  
    }
    `);
    const {titulo, contenido, imagen} = resultado.allDatoCmsPagina.nodes[0];
    //console.log(resultado.allDatoCmsPagina.nodes[0]);
    return ( 
        <>
            <h2
                css= {css`
                    margin-top: .5rem;
                    text-align:center;
                    font-size: 4rem;
                `}
            >{titulo}</h2>
            <Contenido>
                <Image fluid={imagen.fluid} />
                <p>{contenido}</p>
            </Contenido>
        </>
     );
}
 
export default ContenidoNosotros;