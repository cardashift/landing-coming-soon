import styled from "styled-components";
import DiscordOrangeIcon from "../../assets/icons/discord-orange.svg";
import DiscordIcon from "../../assets/icons/discord-icon.svg";
import TwitterIcon from "../../assets/icons/twitter-icon.svg";
import MediumIcon from "../../assets/icons/medium-icon.svg";
import LinkedInIcon from "../../assets/icons/linkedin-icon.svg";
import Link from "next/link";
import { DISCORD_LINK, LINKEDIN_LINK, MEDIUM_LINK, TWITTER_LINK } from "../../utils/links";

const Title = styled.div`
  font-family: Nizzoli;
  font-style: normal;
  font-weight: 900;
  font-size:calc(60px + 1.5vw);

  display: flex;
  align-items: center;
  text-align: center;

  color: #000000;

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 16px 0px;
  max-width: 628px;
  @media (max-width: 769px) {
    font-size: 120px;
    font-family: Nizzoli;
    font-size: 61px;
    font-style: normal;
    font-weight: 900;
    line-height: 70px;
    letter-spacing: 0em;
    text-align: center;
    height: 140px;
    width: 326px;
  }
`;

const Subtitle = styled.div`
  width: 628px;
  height: 68px;

  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 34px;
  letter-spacing: 0em;
  text-align: center;

  color: #4d515c;

  flex: none;
  flex-grow: 0;
  margin: 16px 0px;

  @media (max-width: 769px) {
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: center;
    height: 50px;
    width: 326px;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-bottom: 32px
  margin-top: 10em;
  @media (max-width: 767px) and (max-height: 780px){
    margin-top: 10em;
  }
`;

const DiscordButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 24px;

  width: 28vw;
  min-width: 326px;
  
  height: 64px;

  background: linear-gradient(
      135.37deg,
      rgba(0, 0, 0, 0.4) 4.29%,
      rgba(255, 255, 255, 0.4) 95.6%
    ),
    #ff7a00;
  background-blend-mode: soft-light, normal;

  border: 1px solid rgba(255, 255, 255, 0.4);
  box-sizing: border-box;

  box-shadow: -10px -10px 20px #fafbff, 10px 10px 20px #a6abbd;
  border-radius: 40px;

  flex: none;
  order: 0;
  flex-grow: 0;
  cursor: pointer;
`;

const TextDiscordButton = styled.span`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 40px;

  color: #ffffff;

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 9px 0px 0px;
`;
const Ellipse = styled.div`
  background: #ffffff;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
`;

const SocialMediaButton = styled.button`
  background: linear-gradient(
      135deg,
      rgba(0, 0, 0, 0.4) 0%,
      rgba(255, 255, 255, 0.4) 100%
    ),
    #ebecf0;
  background-blend-mode: soft-light, normal;
  border: 2px solid rgba(255, 255, 255, 0.4);
  box-sizing: border-box;
  box-shadow: -10px -10px 20px rgba(250, 251, 255, 0.6),
    10px 10px 20px rgba(166, 171, 189, 0.6);
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  width: 48px;
`;

const SocialMediaRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  margin: 14px;
`;

const CustomLink = styled.a`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CustomLinkSocialButton = styled(CustomLink)`
  margin: 0 12px;
`;

const CustomLinkDiscord = styled(CustomLink)`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 24px 24px;
`;

export const CenterBlock: React.FC = () => (
  <Container>
    <Title>Debug the world</Title>
    <Subtitle>
      Cardashift, the dApp store in service of social and environmental impact
    </Subtitle>

    <Link href={DISCORD_LINK} passHref>
      <CustomLinkDiscord target="_blank">
        <DiscordButton>
          <TextDiscordButton>Join the discord to the ico</TextDiscordButton>
          <Ellipse>
            <DiscordOrangeIcon />
          </Ellipse>
        </DiscordButton>
      </CustomLinkDiscord>
    </Link>
    <SocialMediaRow>
      <Link href={DISCORD_LINK} passHref>
        <CustomLinkSocialButton target="_blank">
          <SocialMediaButton>
            <DiscordIcon />
          </SocialMediaButton>
        </CustomLinkSocialButton>
      </Link>
      <Link href={TWITTER_LINK} passHref>
        <CustomLinkSocialButton target="_blank">
          <SocialMediaButton>
            <TwitterIcon />
          </SocialMediaButton>
        </CustomLinkSocialButton>
      </Link>
      <Link href={MEDIUM_LINK} passHref>
        <CustomLinkSocialButton target="_blank">
          <SocialMediaButton>
            <MediumIcon />
          </SocialMediaButton>
        </CustomLinkSocialButton>
      </Link>
      <Link href={LINKEDIN_LINK} passHref>
        <CustomLinkSocialButton target="_blank">
          <SocialMediaButton>
            <LinkedInIcon />
          </SocialMediaButton>
        </CustomLinkSocialButton>
      </Link>
    </SocialMediaRow>
  </Container>
);
