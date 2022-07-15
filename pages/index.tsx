import type { NextPage } from "next"
import styled from "styled-components"
import { colors } from "../styles/theme"

const Title = styled.h1`
  font-size: 75px;
  font-weight: 500;
  text-align: center;
  color: ${({ theme }) => theme.colors.title_pink};
`

const ThemesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  margin: auto;
`

const Image = styled.img`
  object-fit: contain;
  width: 100%;
  border: 2px solid var(--ocean-blue);
`

const H2 = styled.h2`
  color: ${({ theme }) => theme.colors.gold_orange};
  font-size: 40px;
  font-weight: 500;
  align-self: flex-start;
  text-decoration: underline;
`

const Paragraph = styled.p`
  color: ${({ theme }) => theme.colors.gold_orange};
  font-size: 30px;
  font-weight: 400;
`

const Spacer = styled.div`
  height: 50px;
`

const ReferencesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
`
const ImagesRows = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 50%;
`

const ReferenceImageWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  padding: 10px;
`

const ReferenceImage = styled.img`
  object-fit: contain;
  height: auto;
  width: 100%;
  border: 2px solid var(--ocean-blue);
`

const PaletteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 80%;
  height: 200px;
`
const PaletteRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 50%;
`

const PaletteItemWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  padding: 5px;
  align-items: center;
`

const PaletteItem = styled.div`
  height: 80px;
  width: 80px;
  border-radius: 40px;
  background-color: ${({ color }) => color};
  border: 1px solid ${({ theme }) => theme.colors.guybrush_white};
  @media (max-width: 800px) {
    height: 60px;
    width: 60px;
    border-radius: 30px;
  }
  @media (max-width: 600px) {
    height: 40px;
    width: 40px;
    border-radius: 20px;
  }
`

const BuiltByWrapper = styled.div`
  display: flex;
  width: 80%;
  margin: auto;
  align-self: center;
  justify-content: center;
  align-items: center;
`

const BuiltByLink = styled.a`
  font-size: 30px;
  font-weight: 500;
  text-align: center;
  color: ${({ theme }) => theme.colors.guybrush_white};
`

const Home: NextPage = () => {
  const firstSetOfColors = colors.slice(0, 7)
  const secondSetOfColors = colors.slice(7, 14)

  return (
    <>
      <Title>Monkey Island Themes</Title>
      <ThemesWrapper>
        <H2>Mêlée island theme</H2>
        <Image src="/melee-island-theme-demo.png" alt="demo" />
        <Spacer />
        <Paragraph>
          Mêlée Island was one of the main islands of the Tri-Island Area and
          served as the main home of its governor, Elaine Marley. Is the first
          island where Guybrush Threepwood starts his journey.
        </Paragraph>
        <H2>References and palette</H2>
        <ReferencesWrapper>
          <ImagesRows>
            <ReferenceImageWrapper>
              <ReferenceImage src="/palette-1.jpg" alt="reference-1" />
            </ReferenceImageWrapper>
            <ReferenceImageWrapper>
              <ReferenceImage src="/palette-2.jpg" alt="reference-2" />
            </ReferenceImageWrapper>
          </ImagesRows>
          <ImagesRows>
            <ReferenceImageWrapper>
              <ReferenceImage src="/palette-3.jpg" alt="reference-3" />
            </ReferenceImageWrapper>
            <ReferenceImageWrapper>
              <ReferenceImage src="/palette-4.jpg" alt="reference-4" />
            </ReferenceImageWrapper>
          </ImagesRows>
        </ReferencesWrapper>
        <Spacer />

        <PaletteWrapper>
          <PaletteRow>
            {firstSetOfColors.map((color, index) => (
              <PaletteItemWrapper key={index}>
                <PaletteItem color={color} />
              </PaletteItemWrapper>
            ))}
          </PaletteRow>
          <PaletteRow>
            {secondSetOfColors.map((color, index) => (
              <PaletteItemWrapper key={index}>
                <PaletteItem color={color} />
              </PaletteItemWrapper>
            ))}
          </PaletteRow>
        </PaletteWrapper>
      </ThemesWrapper>
      <Spacer />
      <BuiltByWrapper>
        <BuiltByLink href="https://www.victorchirino.com" target="_blank">
          Built by Victor Chirino
        </BuiltByLink>
      </BuiltByWrapper>
      <Spacer />
    </>
  )
}

export default Home
