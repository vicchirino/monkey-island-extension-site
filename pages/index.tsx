import type { NextPage } from "next";
import styled from "styled-components";
import { colors } from "../styles/theme";
import { Github } from "@styled-icons/boxicons-logos/Github";
import { shake } from "../styles/transitions";
import Tooltip from "../components/Tooltip";

const Title = styled.h1`
  font-size: 75px;
  font-weight: 500;
  text-align: center;
  color: ${({ theme }) => theme.colors.title_pink};
`;

const ThemesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  margin: auto;
`;

const Link = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.guybrush_white};
  position: relative;
  transition: all 0.3s ease-in-out;
  ::before {
    content: "";
    background-color: ${({ theme }) => theme.colors.title_pink};
    position: absolute;
    left: 0;
    bottom: 3px;
    width: 100%;
    height: 8px;
    z-index: -1;
  }
  :hover::before {
    bottom: 0;
    height: 100%;
  }
`;

const ThemeTitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: flex-start;
`;

const Image = styled.img`
  object-fit: contain;
  width: 100%;
  border: 2px solid var(--ocean-blue);
`;

const H2 = styled.h2`
  color: ${({ theme }) => theme.colors.gold_orange};
  font-size: 40px;
  font-weight: 500;
  align-self: flex-start;
`;

const Paragraph = styled.p`
  color: ${({ theme }) => theme.colors.gold_orange};
  font-size: 30px;
  font-weight: 400;
`;

const Spacer = styled.div`
  height: 50px;
`;

const ReferencesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
`;
const ImagesRows = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 50%;
`;

const ReferenceImageWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  padding: 10px;
`;

const ReferenceImage = styled.img`
  object-fit: contain;
  height: auto;
  width: 100%;
  border: 2px solid var(--ocean-blue);
`;

const PaletteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 80%;
  height: 200px;
`;
const PaletteRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 50%;
`;

const PaletteItemWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  padding: 5px;
  align-items: center;
`;

const PaletteItemLink = styled.a`
  text-decoration: none;
`;

const PaletteItem = styled.div`
  height: 80px;
  width: 80px;
  border-radius: 40px;
  background-color: ${({ color }) => color};
  border: 1px solid ${({ theme }) => theme.colors.guybrush_white};
  cursor: pointer;
  :hover {
    transform: scale(1.1);
    border-width: 3px;
  }
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
`;

const BuiltByWrapper = styled.div`
  display: flex;
  width: 80%;
  margin: auto;
  flex-direction: row;
  align-self: center;
  justify-content: center;
  align-items: center;
`;

const BuiltByLink = styled.a`
  font-size: 30px;
  font-weight: 500;
  text-align: center;
  color: ${({ theme }) => theme.colors.guybrush_white};
  text-decoration: none;
  position: relative;
  transition: all 0.3s ease-in-out;
  ::before {
    content: "";
    background-color: ${({ theme }) => theme.colors.title_pink};
    position: absolute;
    left: 0;
    bottom: 3px;
    width: 100%;
    height: 8px;
    z-index: -1;
  }
  :hover::before {
    bottom: 0;
    height: 100%;
  }
`;

const IconWrapper = styled.a`
  padding-left: 20px;
  cursor: pointer;
  :hover {
    animation: ${shake} 150ms 2 linear;
  }
`;

const GithubIcon = styled(Github)`
  color: ${({ theme }) => theme.colors.gold_orange};
`;

const Home: NextPage = () => {
  const firstSetOfColors = colors.slice(0, 7);
  const secondSetOfColors = colors.slice(7, 14);
  return (
    <>
      <Title>Monkey Island Themes</Title>
      <ThemesWrapper>
        <ThemeTitleWrapper>
          <H2>Mêlée island theme</H2>
          <IconWrapper
            href="https://github.com/vicchirino/monkey-island-theme"
            target="_blank"
          >
            <GithubIcon size="40" />
          </IconWrapper>
        </ThemeTitleWrapper>
        <Image src="/melee-island-theme-demo.png" alt="demo" />
        <Spacer />
        <Paragraph>
          <Link
            href="https://monkeyisland.fandom.com/wiki/Mêlée_Island"
            target="_blank"
          >
            Mêlée Island{" "}
          </Link>
          was one of the main islands of the{" "}
          <Link
            href="https://monkeyisland.fandom.com/wiki/Tri-Island_Area"
            target="_blank"
          >
            Tri-Island
          </Link>{" "}
          Area and served as the main home of its governor, Elaine Marley. Is
          the first island where Guybrush Threepwood starts his journey.
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
                <Tooltip text={color}>
                  <PaletteItemLink
                    href="https://github.com/vicchirino/monkey-island-theme#syntax-colors"
                    target="_blank"
                  >
                    <PaletteItem color={color} />
                  </PaletteItemLink>
                </Tooltip>
              </PaletteItemWrapper>
            ))}
          </PaletteRow>
          <PaletteRow>
            {secondSetOfColors.map((color, index) => (
              <PaletteItemWrapper key={index}>
                <Tooltip text={color}>
                  <PaletteItemLink
                    href="https://github.com/vicchirino/monkey-island-theme#syntax-colors"
                    target="_blank"
                  >
                    <PaletteItem color={color} />
                  </PaletteItemLink>
                </Tooltip>
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
  );
};

export default Home;
