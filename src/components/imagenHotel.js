import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import styled from '@emotion/styled';

const ImgageBackground = styled(BackgroundImage)`
    height: 700px;
`
const TextoImagen = styled.div`
    background-image: linear-gradient( to top, rgba(34,49,63,.8),rgba(34,49,63,.8)  );
                      
    color: #FFF;
    height: 100%;
    display: flex;
    flex-direction: column;
    flex:1;
    align-items:center;
    justify-content:center;
`;

const ImagenHotel = () => {

    const {image} = useStaticQuery(graphql`
    query{
        image: file(relativePath: {eq:"8.jpg"}){
            sharp: childImageSharp{
                fluid{
                    ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
    `);
    //console.log(image.sharp.fluid);
    return ( 
        <ImgageBackground tag="section" fluid={image.sharp.fluid} fadeIn="soft">
            <TextoImagen>
                <h1>Bienvenido a Hotel Gatsby</h1>
                <p>El mejor hotel para tus vacaciones </p>
            </TextoImagen>
        </ImgageBackground>
     );
}
 
export default ImagenHotel;