import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';

import Wrapper from './Wrapper';
import HeaderTitle from './HeaderTitle';
import Background from './Background';
import Content from './Content';

const Container = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  margin-bottom: calc(var(--margin-base) + (var(--margin-sm) / 2));
`;

export default function Projects() {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativePath: {regex: "/png/", ne: "profile.jpg"}}) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 532, maxHeight: 400, fit: FILL, grayscale: true) 
              {
                ...GatsbyImageSharpFluid,
                originalName
              }
            }
          }
        }
      }
    }
  `)

  let files = data.allFile.edges;

  return (
    <Container id="projects">
      <HeaderTitle options={{ title: 'projects', border: true }} />
      <Wrapper>
        {files.map(({ node }) => {
          return (
            <Background
              key={node.childImageSharp.fluid.originalName}
              childImageSharp={node.childImageSharp}
            >
              <Content childImageSharp={node.childImageSharp} />
            </Background>
          )
        })}
      </Wrapper>
    </Container>
  )
}
