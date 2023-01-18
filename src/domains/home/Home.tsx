import styled from '@emotion/styled'
import { ReactNode, useCallback, useEffect, useState } from 'react'
import { Button } from '../components/Button'
import { Show } from '../components/Show'
import { SubTitle, Text, Title } from '../components/Typograph'
import { useWindowSize } from '../components/UseWindowSize'
import logoBrandSmart from '../../assets/images/brand-smart-orange.png'
import logoBrandSmartBlue from '../../assets/images/smart-brand-blue.png'
import secondOpinionLogo from '../../assets/images/second-opinion-logo.png'
import praticeIntelligenceLogo from '../../assets/images/pratice-intelligence-logo.png'
import dentalSolutionImage from '../../assets/images/dental-solution.png'
import praticeIntelligenceBack from '../../assets/images/pratice-intelligence-back.png'
import secondOpinionBack from '../../assets/images/second-opinion-back.png'
import pcGeneralInfoImage from '../../assets/images/image-pc-general-info.png'
import leadingCapabilitiesImage from '../../assets/images/leading-capabilities-image.png'
import superiorDataImage from '../../assets/images/superior-data-image.png'
import proveExperienceImage from '../../assets/images/proven-experience-image.png'
import pearlLogoBlack from '../../assets/images/peral-logo-high.png'
import secondOpinionHigh from '../../assets/images/second-opinion-high-logo.png'
import practiceIntelligenceHigh from '../../assets/images/pratice-intelligence-high-logo.png'
import {
  DETECTION_ICON,
  GAN_BASE_ICON,
  IMAGE_FDA1,
  IMAGE_FDA2,
  IMAGE_PC_PRACTICE_INTELLIGENCE,
  IMAGE_PC_SECOND_OPINION,
  MENSURATION_ICON,
  SEGMENTATION_ICON,
  VIDEO_INTRO_MP4,
  VIDEO_INTRO_OGG,
  VIDEO_INTRO_WEBM,
} from './HomeConstants'
import { Form, FormikProvider, useFormik } from 'formik'
import { InputField, TextFieldInput } from '../components/InputText'
import { HomeStore, selectJustCountryName } from './HomeStore'

export const Home = () => {
  const { Layout } = Home

  const init = useCallback((dispatch: any) => {
    dispatch(HomeStore.thunks.getAllCountry())
  }, [])
  return (
    <HomeStore.Provider init={init}>
      <Layout>
        <Menu />
        <LandingIntro />
        <DentalSolutionPage />
        <MakeUniquePage />
        <PracticesDso />
        <OurTechnologyPage />
        <GeneralInfoPage />
        <ContainerForm />
        <GlobalDentalLeaderPage />
        <Footer />
      </Layout>
    </HomeStore.Provider>
  )
}
Home.Layout = styled.div`
  background: #ffffff;
  min-height: 100vh;
  background: var(--primary-color-background);
`
const Menu = () => {
  const { Layout, ContainerLogo, Logo, TextButton } = Menu
  const dispatch = HomeStore.useDispatch()
  const { changeStyleMenu } = HomeStore.useState()

  useEffect(() => {
    document.addEventListener('scroll', getScrollEvent)
    function getScrollEvent() {
      const scrollY = window.scrollY
      dispatch(HomeStore.actions.setChangeStyleMenu(scrollY > 6))
    }
    return () => {
      document.removeEventListener('scroll', getScrollEvent)
    }
  }, [])

  return (
    <Layout changeStyleMenu={changeStyleMenu}>
      <ContainerLogo>
        <Logo src={logoBrandSmart} alt="logo" />
      </ContainerLogo>
      <FillFlexPlace />
      <Item
        href="https://www.hellopearl.com/products/practice-intelligence"
        target="_blank"
        name="Practice Intelligence"
      />
      <Item href="https://www.hellopearl.com/products/second-opinion" target="_blank" name="Second Opinion" />
      <Button primary onClick={setScrollForm}>
        <TextButton>Request Demo</TextButton>
      </Button>
    </Layout>
  )
}
Menu.Layout = styled.div<{ changeStyleMenu: boolean }>(
  ({ changeStyleMenu }) => `
  height: ${changeStyleMenu ? '65px' : '100px'};
  background-image: radial-gradient(circle farthest-corner at 100% 50%,#216888,#11252f);
  align-items: center;
  display: flex;
  padding: 5px 20px;
  position: sticky;
  top: 0px;
  border-bottom: 2px solid #129fb4;
  gap: 10px;
  z-index: 999;
  transition: all 0.5s ease-in-out;
  opacity: ${changeStyleMenu ? '0.90' : '1'};
  ${changeStyleMenu && '& > button > span {font-size: 14px}}'}
  @media (max-width: 1120px) {
    padding: 5px 10px;
    gap: 8px;
    height: 100px;
  }
`
)
Menu.ContainerLogo = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`
Menu.Logo = styled.img`
  width: 280px;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 0;
  }
`
const Item = ({
  name,
  ...props
}: {
  name: string
} & React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>) => {
  const { Text } = Item
  return <Text {...props}>{name}</Text>
}
Item.Text = styled.a`
  font-weight: 500;
  color: #ffffff;
  cursor: pointer;
  opacity: 0.7;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    opacity: 1;
  }
  font-size: 16px;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`
Menu.TextButton = styled(Text)`
  font-size: 16px;
  @media (max-width: 768px) {
    font-size: 13px;
  }
`

const LandingIntro = () => {
  const {
    Layout,
    InfoContent,
    ContainerInfo,
    ContainerTexts,
    Title,
    SubTitle,
    ImageContent,
    Video,
    Button,
    TextButton,
    Footer,
    TextFooter,
    FooterLogos,
    Logo,
  } = LandingIntro

  const { width } = useWindowSize()
  const isMobile = width < 768

  return (
    <Layout>
      <Show condition={!isMobile}>
        <FillFlexPlace fill={0.2} />
      </Show>
      <InfoContent>
        <ContainerInfo>
          <Show condition={!isMobile}>
            <FillFlexPlace />
          </Show>
          <ContainerTexts>
            <Title>THE FUTURE OF DENTISTRY</Title>
            <SubTitle>POWERED BY AI</SubTitle>
            <Button primary onClick={setScrollForm}>
              <TextButton>Request a Demo</TextButton>
            </Button>
          </ContainerTexts>
          <Footer>
            <TextFooter>Provided by</TextFooter>
            <FooterLogos>
              <Logo src={secondOpinionLogo} />
              <Logo src={praticeIntelligenceLogo} />
            </FooterLogos>
          </Footer>
        </ContainerInfo>
      </InfoContent>
      <ImageContent>
        <Video autoPlay loop muted playsInline>
          <source src={VIDEO_INTRO_MP4} type="video/mp4" />
          <source src={VIDEO_INTRO_OGG} type="video/ogg" />
          <source src={VIDEO_INTRO_WEBM} type="video/webm" />
        </Video>
      </ImageContent>
    </Layout>
  )
}
LandingIntro.Layout = styled.div`
  background-image: linear-gradient(101deg, #0c3256, #2e5f6c);
  height: calc(100vh - 100px);
  padding: 10px 20px;
  display: flex;
  align-items: center;
  gap: 5px;
  @media (max-width: 1120px) {
    flex-direction: column-reverse;
    gap: 10px;
    height: calc(100vh - 100px);
  }
`
LandingIntro.InfoContent = styled.div`
  flex: 1;
  display: flex;
  gap: 10px;
  height: 100%;
`
LandingIntro.ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
LandingIntro.ContainerTexts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px;
  flex: 1;
  @media (max-width: 1120px) {
    align-items: center;
  }
`
LandingIntro.Title = styled(Text)`
  font-weight: 700;
  color: #ffffff;
  font-size: 60px !important;
  font-family: Aspira;
  @media (min-width: 450px) and (max-width: 1120px) {
    text-align: center;
    font-size: 50px !important;
  }
  @media (max-width: 450px) {
    text-align: center;
    font-size: 40px !important;
  }
`
LandingIntro.SubTitle = styled(SubTitle)`
  font-weight: 500;
  color: var(--primary-color-blue);
`
LandingIntro.ImageContent = styled.div`
  flex: 1.5;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
LandingIntro.Video = styled.video`
  pointer-events: auto;
  transform-origin: 50% 50%;
  border-radius: 15px;
  width: 100%;
  max-width: 850px;
  transform: skew(0deg, 4deg);
  @media (max-width: 1120px) {
    max-width: 450px;
    transform: skew(0deg, 0deg);
  }
  box-shadow: 8px 2px 10px 0px rgba(190, 226, 224, 0.247);
`
LandingIntro.Button = styled(Button)`
  font-size: 18px;
  width: 200px;
`
LandingIntro.TextButton = styled(Text)`
  font-size: 18px;
`
LandingIntro.Footer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  margin-top: 30px;
  flex: 1;
`
LandingIntro.TextFooter = styled(Text)`
  font-size: 17px;
  font-weight: 600;
  color: var(--primary-color-blue);
  @media (max-width: 768px) {
    text-align: center;
  }
`
LandingIntro.FooterLogos = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  @media (max-width: 440px) {
    flex-direction: column;
  }
`
LandingIntro.Logo = styled.img`
  width: 300px;
  @media (max-width: 640px) {
    width: 200px;
  }
`

const DentalSolutionPage = () => {
  const { Layout, Container, ContainerText, Title, Divider, Text, Image } = DentalSolutionPage

  return (
    <Layout>
      <Container>
        <ContainerText>
          <Title>Dental AI Solutions that put dentist and patients at ease.</Title>
          <Divider />
          <Text>
            Our products were built with the dental professional in mind and the patient at heart. Using the
            latest innovations in artificial intelligence and over 10 years of expertise in computer vision,
            Pearl aims to usher in a new wave of dental AI solutions to brighten the future of oral healthcare
            worldwide.
          </Text>
        </ContainerText>
        <Image src={dentalSolutionImage} />
      </Container>
    </Layout>
  )
}
DentalSolutionPage.Layout = styled.div`
  background: #ffffff;
  padding: 40px 0;
  display: flex;
`
DentalSolutionPage.Container = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  display: flex;
  gap: 40px;
  @media (max-width: 1120px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`
DentalSolutionPage.ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  padding: 0 20px;
`
DentalSolutionPage.Title = styled(Title)`
  font-weight: bold;
  line-height: 1.2;
  @media (max-width: 768px) {
    text-align: center;
  }
`
DentalSolutionPage.Divider = styled.div`
  width: 80px;
  height: 5px;
  background: var(--primary-color-blue);
  border-radius: 10px;
  background: #6a8fd7;
`
DentalSolutionPage.Text = styled(Text)`
  font-weight: 500;
  font-size: 15px;
  @media (max-width: 768px) {
    text-align: center;
  }
`
DentalSolutionPage.Image = styled.img`
  max-width: 100%;
  @media (max-width: 1120px) {
    max-width: 400px;
    width: 100%;
  }
`

const MakeUniquePage = () => {
  const { Layout, Container, Title, Divider, SubTitle } = MakeUniquePage

  return (
    <Layout>
      <Container>
        <Title>What make us unique</Title>
        <Divider />
        <SubTitle>
          Backed by unrivaled technological expertise and enterprise-level support, our solutions set the
          highest bar for dental AI.
        </SubTitle>
      </Container>
      <ContainerImagesMakeUniquePages />
    </Layout>
  )
}
MakeUniquePage.Layout = styled.div`
  background: linear-gradient(43.17deg, #182f45 0%, rgb(20, 191, 219) 96%);
  padding: 20px 0;
  position: relative;
  height: 400px;
`
MakeUniquePage.Container = styled.div`
  margin: 0 auto;
  display: flex;
  max-width: 1200px;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  padding: 10px;
`
MakeUniquePage.Title = styled(SubTitle)`
  color: var(--primary-color-light);
  text-align: center;
  font-weight: bold;
`
MakeUniquePage.Divider = styled.div`
  width: 80px;
  height: 5px;
  background-color: var(--primary-color-light);
  border-radius: 10px;
`
MakeUniquePage.SubTitle = styled(Text)`
  font-size: 19px !important;
  color: var(--primary-color-light);
  text-align: center;
`
const ContainerImagesMakeUniquePages = () => {
  const { Layout } = ContainerImagesMakeUniquePages
  return (
    <Layout>
      <CardMakeUniquePage
        image={praticeIntelligenceBack}
        title="Practice Intelligence"
        text="The first real-time dental AI plataform that automatically detects numerous conditions in dental x-rays to give dentists a second set of eyes for superior radiologic accuracy."
      />
      <CardMakeUniquePage
        image={secondOpinionBack}
        title="Second Opinion"
        text="Spin practice data into profit, practitioner performance and patient health with computer vision-enabled clinical performance insights from the global leader in dental AI. "
      />
    </Layout>
  )
}
ContainerImagesMakeUniquePages.Layout = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  left: 50%;
  top: 54%;
  transform: translateX(-50%);
  gap: 30px;
  @media (max-width: 1120px) {
    flex-direction: column;
  }
`
const CardMakeUniquePage = ({ image, title, text }: { image?: any; title: string; text?: string }) => {
  const { Layout, Card, MarginDetail, Image, ContainerText, Title, Text } = CardMakeUniquePage
  return (
    <Layout>
      <Card>
        <Image src={image} />
        <ContainerText>
          <Title>{title}</Title>
          <Text>{text}</Text>
        </ContainerText>
      </Card>
      <MarginDetail title={title} />
    </Layout>
  )
}
CardMakeUniquePage.Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
CardMakeUniquePage.Card = styled.div`
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  padding: 15px;
  max-width: 430px;
  height: 330px;
  align-items: center;
  justify-content: space-evenly;
  @media (max-width: 1120px) {
    height: 100%;
    padding: 30px;
    gap: 15px;
  }
`
CardMakeUniquePage.MarginDetail = styled.div<{ title: string }>`
  width: 280px;
  height: 7px;
  border-radius: 0 0 8px 8px;
  ${(props) => props.title === 'Practice Intelligence' && ' background: #094074;'}
  ${(props) => props.title === 'Second Opinion' && 'background: #e26230;'}
`
CardMakeUniquePage.Image = styled.img`
  max-width: 340px;
  @media (max-width: 1120px) {
    max-width: 100%;
  }
`
CardMakeUniquePage.ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`
CardMakeUniquePage.Title = styled(Title)`
  font-size: 20px !important;
  font-weight: bold;
`
CardMakeUniquePage.Text = styled(Text)`
  font-size: 15px;
  text-align: center;
`

const PracticesDso = () => {
  const { Layout, Container, ContainerIntro, Title, Divider, SubTitle } = PracticesDso

  return (
    <Layout>
      <Container>
        <ContainerIntro>
          <Title>Pratices & DSOs</Title>
          <Divider />
          <SubTitle>
            Our dental AI solutions for practices and groups help optimize health outcomes for patients and
            business outcomes for practices.
          </SubTitle>
        </ContainerIntro>
        <ContainerSecondOpinion />
        <ContainerPracticeIntelligence />
      </Container>
    </Layout>
  )
}
PracticesDso.Layout = styled.div`
  background: #ffffff;
  padding: 250px 20px 20px 15px;
  @media (min-width: 600px) and (max-width: 800px) {
    padding-top: 500px;
  }
  @media (min-width: 800px) and (max-width: 1120px) {
    padding-top: 550px;
  }
  @media (max-width: 600px) {
    padding-top: 500px;
  }
`
PracticesDso.Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`
PracticesDso.ContainerIntro = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  padding: 0px 15px;
`
PracticesDso.Title = styled(Title)`
  font-size: 40px !important;
  font-weight: bold;
  text-align: center;
`
PracticesDso.Divider = styled.div`
  width: 50px;
  height: 4px;
  background-color: #6a8fd7;
  border-radius: 10px;
`
PracticesDso.SubTitle = styled(Text)`
  font-size: 18px !important;
  text-align: center;
`
const ContainerSecondOpinion = () => {
  const { Layout, ContainerInfo, Title, Divider, Text, Button, ContainerImage, Image } =
    ContainerSecondOpinion
  return (
    <Layout>
      <ContainerInfo>
        <Title>Second Opinion®</Title>
        <Divider />
        <Text>
          Quality patient care in dentistry starts with accurate interpretation of x-rays. Thats why we
          developed Second Opinion-a computer vision platform that can instantly detects numerous potential
          conditions in dental radiographs. <br /> <br />
          Trained on x-rays annotated by a team of world renowned dentists and radiologists, our radiologic
          solution ensures that your dental care has the strongest foundation possible. Patient health and
          trust rise from that foundation-making Second Opinion the only other opinion youll ever need.
          <br />
          <strong>*Not available in certain countries.</strong>
        </Text>
        <Button primary>Learn more</Button>
      </ContainerInfo>
      <ContainerImage>
        <Image src={IMAGE_PC_SECOND_OPINION} />
      </ContainerImage>
    </Layout>
  )
}
ContainerSecondOpinion.Layout = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  gap: 16px;
  margin-top: 30px;
  justify-content: space-around;
  @media (max-width: 1120px) {
    flex-direction: column;
  }
`
ContainerSecondOpinion.ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  flex: 1;
`
ContainerSecondOpinion.Title = styled(Title)`
  font-size: 28px !important;
  font-weight: bold;
`
ContainerSecondOpinion.Divider = styled.div`
  width: 50px;
  height: 5px;
  background-color: #6a8fd7;
  border-radius: 10px;
`
ContainerSecondOpinion.Text = styled(Text)`
  display: flex;
  flex-direction: column;
  gap: 15px;
  line-height: 1.5;
  strong {
    font-size: 12px;
  }
`
ContainerSecondOpinion.Button = styled(Button)`
  width: 150px;
`
ContainerSecondOpinion.ContainerImage = styled.div`
  flex: 1;
`
ContainerSecondOpinion.Image = styled.img`
  max-width: 600px;
  width: 100%;
`
const ContainerPracticeIntelligence = () => {
  const { Layout, ContainerInfo, Title, Divider, Text, Button, ContainerImage, Image } =
    ContainerPracticeIntelligence
  return (
    <Layout>
      <ContainerImage>
        <Image src={IMAGE_PC_PRACTICE_INTELLIGENCE} />
      </ContainerImage>
      <ContainerInfo>
        <Title>Practice Intelligence®</Title>
        <Divider />
        <Text>
          Collecting evidence in patient radiographs detected by Second Opinion and treatment data from a
          practice management system, Practice Intelligence gives office staff x-ray vision into practice
          performance.
          <br />
          <br />
          Dentists, office managers, and clinical staff apply its findings to inform training, staffing, and
          procurement decisions, enabling practices to ensure consistent and optimal performance.
        </Text>
        <Button primary>Learn more</Button>
      </ContainerInfo>
    </Layout>
  )
}
ContainerPracticeIntelligence.Layout = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  gap: 16px;
  margin-top: 30px;
  justify-content: space-around;
  @media (max-width: 1120px) {
    flex-direction: column-reverse;
  }
`
ContainerPracticeIntelligence.ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  flex: 1;
`
ContainerPracticeIntelligence.Title = styled(Title)`
  font-size: 28px !important;
  font-weight: bold;
`
ContainerPracticeIntelligence.Divider = styled.div`
  width: 50px;
  height: 5px;
  background-color: #6a8fd7;
  border-radius: 10px;
`
ContainerPracticeIntelligence.Text = styled(Text)`
  display: flex;
  flex-direction: column;
  gap: 15px;
  line-height: 1.5;
  strong {
    font-size: 12px;
  }
`
ContainerPracticeIntelligence.Button = styled(Button)`
  width: 150px;
`
ContainerPracticeIntelligence.ContainerImage = styled.div``
ContainerPracticeIntelligence.Image = styled.img`
  max-width: 600px;
  width: 100%;
`
const OurTechnologyPage = () => {
  const { Layout, Container, Title, Divider, SubTitle } = OurTechnologyPage

  return (
    <Layout>
      <Container>
        <Title>Our Technology</Title>
        <Divider />
        <SubTitle>
          Machine learning and computer vision provide the foundation of every solution we offer.
        </SubTitle>
      </Container>
    </Layout>
  )
}
OurTechnologyPage.Layout = styled.div`
  background-image: linear-gradient(140deg, #094074, #0940743d);
  padding: 85px 20px;
`
OurTechnologyPage.Container = styled.div`
  margin: 0 auto;
  max-width: 1120px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`
OurTechnologyPage.Title = styled(Title)`
  font-weight: bold;
  color: #ffffff;
  text-align: center;
`
OurTechnologyPage.Divider = styled.div`
  width: 200px;
  height: 4px;
  background-color: #ffffff;
  border-radius: 10px;
  opacity: 0.5;
`
OurTechnologyPage.SubTitle = styled(SubTitle)`
  color: #ffffff;
  text-align: center;
  font-size: 30px !important;
  margin-top: 30px;
`
const GeneralInfoPage = () => {
  const { Layout, Container, ContainerImage, Image, ContainerInfos } = GeneralInfoPage
  return (
    <Layout>
      <Container>
        <ContainerImage>
          <Image src={pcGeneralInfoImage} />
        </ContainerImage>
        <ContainerInfos>
          <CardInfo
            image={GAN_BASE_ICON}
            title="GAN-Based Enhancement"
            text="Generative Adversarial Network pre-processors enhance images to ensure that radiologic analysis can be completed even when x-rays are degraded, over/underexposed or contain digital artifacts."
          />
          <CardInfo
            image={DETECTION_ICON}
            title="Detection"
            text="Image preprocessors and expertly trained radiologic machine vision models work in unison to detect pathologic, restorative and anatomical features found in dental x-rays."
          />
          <CardInfo
            image={SEGMENTATION_ICON}
            title="Segmentation"
            text="Computer vision segmentation models distinguish individual tooth parts and supporting structures to provide localizing insight on the nature and extent of detected conditions."
          />
          <CardInfo
            image={MENSURATION_ICON}
            title="Mensuration"
            text="Detection and segmentation capabilities work in unison to assess the size of anatomical structures and scope of decay."
          />
        </ContainerInfos>
        <FolderGeneralInfo />
        <WhatsMakeUsUnique />
        <ImportantInfos />
      </Container>
    </Layout>
  )
}
GeneralInfoPage.Layout = styled.div`
  background: #ffffff;
  padding: 40px 20px 20px 20px;
`
GeneralInfoPage.Container = styled.div`
  margin: 0 auto;
  max-width: 1120px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`
GeneralInfoPage.ContainerImage = styled.div``
GeneralInfoPage.Image = styled.img`
  max-width: 700px;
  width: 100%;
  @media (max-width: 768px) {
    max-width: 100%;
  }
`
GeneralInfoPage.ContainerInfos = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 35px;
`
const CardInfo = ({ image, title, text }: { image: any; title: string; text: string }) => {
  const { Layout, ContainerIcon, Icon, ContainerText, Title, Text } = CardInfo
  return (
    <Layout>
      <ContainerIcon>
        <Icon src={image} />
      </ContainerIcon>
      <ContainerText>
        <Title>{title}</Title>
        <Text>{text}</Text>
      </ContainerText>
    </Layout>
  )
}
CardInfo.Layout = styled.div`
  display: flex;
  gap: 15px;
  padding: 10px;
  flex: 1 1 400px;
`
CardInfo.ContainerIcon = styled.div``
CardInfo.Icon = styled.img`
  width: 40px;
  @media (max-width: 768px) {
    width: 30px;
  }
`
CardInfo.ContainerText = styled.div`
  display: flex;
  gap: 14px;
  flex-direction: column;
`
CardInfo.Title = styled(Title)`
  font-size: 30px !important;
  font-weight: bold;
`
CardInfo.Text = styled(Text)`
  font-size: 15px !important;
  line-height: 1.3;
`
const FolderGeneralInfo = () => {
  const { Layout, Container, ContainerTexts, Title, SubTitle, Button } = FolderGeneralInfo

  return (
    <Layout>
      <Container>
        <ContainerTexts>
          <Title>Curious how AI can benefit your practice?</Title>
          <SubTitle>See our tools in action with a free live demo.</SubTitle>
        </ContainerTexts>
        <Button secondary onClick={setScrollForm}>
          Request a demo
        </Button>
      </Container>
    </Layout>
  )
}
FolderGeneralInfo.Layout = styled.div`
  padding: 40px 20px;
  background-image: linear-gradient(150deg, #051728, #072037a2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* height: 320px; */
  width: 100%;
  border-radius: 30px;
  margin-top: 40px;
  @media (max-width: 768px) {
    /* height: 280px; */
  }
`
FolderGeneralInfo.Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`
FolderGeneralInfo.ContainerTexts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`
FolderGeneralInfo.Title = styled(Title)`
  color: #ffffff;
  font-size: 35px !important;
  font-weight: bold;
  text-align: center;
`
FolderGeneralInfo.SubTitle = styled(SubTitle)`
  color: var(--primary-color-blue);
  font-size: 25px !important;
  font-weight: bold;
  text-align: center;
`
FolderGeneralInfo.Button = styled(Button)`
  width: 200px;
  margin-top: 40px;
  font-family: Aspira bold;
`
const WhatsMakeUsUnique = () => {
  const { Layout, Title, Divider, Text } = WhatsMakeUsUnique
  return (
    <Layout>
      <Title>What makes us unique</Title>
      <Divider />
      <Text>
        Backed by unrivaled technological expertise and enterprise-level support, our solutions set the
        highest bar for dental AI.
      </Text>
    </Layout>
  )
}
WhatsMakeUsUnique.Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  margin-top: 80px;
`
WhatsMakeUsUnique.Title = styled(Title)`
  font-size: 36px !important;
  color: #051728;
  text-align: center;
`
WhatsMakeUsUnique.Divider = styled.div`
  width: 80px;
  height: 5px;
  background-color: #051728;
  border-radius: 10px;
`
WhatsMakeUsUnique.Text = styled(Text)`
  font-size: 18px !important;
  color: #051728;
  text-align: center;
  margin-top: 10px;
`
const ImportantInfos = () => {
  const { Layout } = ImportantInfos

  return (
    <Layout>
      <CardImportantInfo
        image={leadingCapabilitiesImage}
        title="Leading Capabilities"
        text="Our computer vision systems identify and evaluate the widest range of pathologic and restorative features detectable in radiographic and 3D dental imagery."
      />
      <CardImportantInfo
        image={superiorDataImage}
        title="Superior Data"
        text="AI is only as good as its training. Our machine learning models are trained on the world's largest collection of expertly annotated and curated radiographs."
      />
      <CardImportantInfo
        image={proveExperienceImage}
        title="Proven Experience"
        text="Addressing customer need is vital to the success of any AI solution. Our team has commercialized AI for clients, including many on the Fortune 100, for 10+ years."
      />
    </Layout>
  )
}
ImportantInfos.Layout = styled.div`
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  padding: 40px 10px;
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
  margin-top: 50px;
`
const CardImportantInfo = ({ image, title, text }: { image: any; title: string; text: string }) => {
  const { Layout, ContainerImage, Image, ContainerTexts, Title, Text } = CardImportantInfo
  return (
    <Layout>
      <ContainerImage>
        <Image src={image} />
      </ContainerImage>
      <ContainerTexts>
        <Title>{title}</Title>
        <Text>{text}</Text>
      </ContainerTexts>
    </Layout>
  )
}
CardImportantInfo.Layout = styled.div`
  flex: 1 1 220px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  justify-content: center;
`
CardImportantInfo.ContainerImage = styled.div``
CardImportantInfo.Image = styled.img`
  max-width: 120px;
  width: 100%;
`
CardImportantInfo.ContainerTexts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`
CardImportantInfo.Title = styled(Text)`
  font-size: 28px !important;
  color: #051728;
  text-align: center;
  font-family: Aspira bold;
`
CardImportantInfo.Text = styled(Text)`
  font-size: 16px !important;
  color: #051728;
  text-align: center;
  font-weight: 500;
`
const ContainerForm = () => {
  const {
    Layout,
    Container,
    ContainerTexts,
    Title,
    SubTitle,
    ContainerInputs,
    Button,
    TextButton,
    AgreeTerms,
    TextTerms,
  } = ContainerForm
  const justCountrys = HomeStore.useSelector(selectJustCountryName)
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    country: '',
    softView: '',
    softStore: '',
  }
  const onSubmit = (values: typeof initialValues) => {
    console.log(values)
  }
  const validate = (values: typeof initialValues) => {
    const validEmailRegex = /\S+@\S+\.\S+/

    const errors = {} as { [key: string]: string }
    if (!values.firstName) errors.firstName = 'Required'
    if (!values.lastName) errors.lastName = 'Required'
    if (!values.email) errors.email = 'Required'
    if (values.email && !validEmailRegex.test(values.email)) errors.email = 'Invalid email address'
    if (!values.phoneNumber) errors.phoneNumber = 'Required'
    if (!values.country) errors.country = 'Required'
    return errors
  }
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  })
  return (
    <Layout className="form-pearl">
      <FormikProvider value={formik}>
        <Form>
          <Container>
            <ContainerTexts>
              <Title>Request a Demo</Title>
              <SubTitle>
                Want see Second Opinion in action? Submit the form below and well get you set up with a free
                live demo.
              </SubTitle>
            </ContainerTexts>
            <ContainerInputs>
              <InputForm name="firstName" label="First name" required />
              <InputForm name="lastName" label="Last name" required />
              <InputForm name="email" label="Email" required />
              <InputForm name="phoneNumber" label="Phone number" required />
              <InputForm name="country" label="Country/Region" type="select" required>
                <option value="">Select a country</option>
                {justCountrys?.map((country, index) => (
                  <option key={index} value={country}>
                    {country}
                  </option>
                ))}
              </InputForm>
              <InputForm
                name="softView"
                label="What software do you use to view radiographs in your practice?"
              />
              <InputForm
                name="softStore"
                label="What software do you use to store patient information in your place?"
              />
            </ContainerInputs>
            <AgreeTerms>
              <TextTerms>
                Pearl needs the contact information you provide to us to contact you about our products and
                services. You may unsubscribe from these communications at any time. For more information on
                how to unsubscribe, as well as our privacy practices and commitment to protecting your
                privacy, please check out our <a href="https://google.com.br">Privacy Policy.</a>
              </TextTerms>
            </AgreeTerms>
            <Button primary type="submit">
              <TextButton>Submit</TextButton>
            </Button>
          </Container>
        </Form>
      </FormikProvider>
    </Layout>
  )
}
ContainerForm.Layout = styled.div`
  background-image: linear-gradient(120deg, #01021b77, #62829f16);
  padding: 60px 10px;
  position: relative;
  display: grid;
  place-items: center;
  z-index: 0;
`
ContainerForm.Container = styled.div`
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #2d5b8552;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.4);
  padding: 50px 40px;
  gap: 30px;
  border-radius: 18px;
`
ContainerForm.ContainerTexts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`
ContainerForm.Title = styled(Title)`
  color: #ffffff;
  font-weight: bold;
  font-size: 35px !important;
  text-align: center;
`
ContainerForm.SubTitle = styled(Text)`
  color: #ffffff;
  font-weight: bold;
  font-size: 18px !important;
  text-align: center;
`
ContainerForm.ContainerInputs = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 25px;
  width: 100%;
  z-index: 99999;
  & > div:nth-of-type(-n + 2) {
    flex: 1 1 500px;
  }
  & > div:nth-of-type(n + 3):nth-of-type(-n + 5) {
    flex: 1 1 350px;
  }
  & > div:nth-of-type(n + 6) {
    flex: 1 1 500px;
  }
`
const InputForm = styled(InputField)`
  font-weight: 700;
  color: #ffffff;
  input,
  select,
  textarea {
    border: none;
    background: #ffffff;
    box-shadow: 0px 0px 10px rgba(19, 44, 133, 0.7);
    font-size: 14px;
  }
`
ContainerForm.AgreeTerms = styled.div``
ContainerForm.TextTerms = styled(Text)`
  font-size: 13px !important;
  color: #ffffff;
  line-height: 1.6;
  a {
    font-size: 15px;
    color: #ffffff;
  }
`
ContainerForm.Button = styled(Button)`
  width: 170px;
  padding: 14px;
`
ContainerForm.TextButton = styled(Text)`
  font-size: 18px;
  font-weight: bold;
`
const GlobalDentalLeaderPage = () => {
  const { Layout, Container, ContainerTexts, Title, Divider, Text, ContainerCards } = GlobalDentalLeaderPage

  return (
    <Layout>
      <Container>
        <ContainerTexts>
          <Title>Whats makes us the global dental AI leader</Title>
          <Divider />
          <Text>
            Our AI authorized to assist dentists across six continents with the most robust clinical pathology
            detection capabilities dentistry.
          </Text>
        </ContainerTexts>
        <ContainerCards>
          <CardDentalLeader
            image={IMAGE_FDA1}
            title="More clinical detection capabilities..."
            text="We are the only dental AI company with FDA clearance for patient-facing detection of numerous common dental conditions affecting permanent teeth in bitewing and periapical x-rays of patients 12 and older."
          />
          <CardDentalLeader
            image={IMAGE_FDA2}
            title="...for more practices around the world."
            text="With medical regulatory clearances for clinical pathology detection in over 100 countries, we are the only dental AI company elevating patient care for practices across the globe."
          />
        </ContainerCards>
      </Container>
    </Layout>
  )
}
GlobalDentalLeaderPage.Layout = styled.div`
  padding: 40px 10px;
  background: var(--primary-color-light);
`
GlobalDentalLeaderPage.Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`
GlobalDentalLeaderPage.ContainerTexts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
`
GlobalDentalLeaderPage.Title = styled(Title)`
  font-size: 35px !important;
  text-align: center;
`
GlobalDentalLeaderPage.Divider = styled.div`
  height: 5px;
  width: 90px;
  background: #6a8fd7;
  border-radius: 10px;
`
GlobalDentalLeaderPage.Text = styled(Text)`
  font-size: 18px !important;
  text-align: center;
`
GlobalDentalLeaderPage.ContainerCards = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
  margin-top: 40px;
`
const CardDentalLeader = ({ image, title, text }: { image: any; title: string; text: string }) => {
  const { Layout, ContainerImage, Image, ContainerTexts, Title, Text } = CardDentalLeader
  return (
    <Layout>
      <ContainerImage>
        <Image src={image} />
      </ContainerImage>
      <ContainerTexts>
        <Title>{title}</Title>
        <Text>{text}</Text>
      </ContainerTexts>
    </Layout>
  )
}
CardDentalLeader.Layout = styled.div`
  flex: 1 1 400px;
  display: flex;
  height: 400px;
  flex-direction: column;
  gap: 30px;
  padding: 20px 15px;
  align-items: center;
  justify-content: space-evenly;
  box-shadow: 0px 0px 10px 4px rgba(0, 0, 0, 0.2);
  transition: border 0.5s ease-in-out;
  border-radius: 17px;
  background: #ffffff;
`
CardDentalLeader.ContainerImage = styled.div``
CardDentalLeader.Image = styled.img`
  max-width: 200px;
  width: 100%;
`
CardDentalLeader.ContainerTexts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`
CardDentalLeader.Title = styled(Text)`
  font-size: 25px !important;
  color: #051728;
  text-align: center;
  font-family: Aspira bold;
`
CardDentalLeader.Text = styled(Text)`
  font-size: 16px !important;
  color: #051728;
  text-align: center;
  font-weight: 500;
  line-height: 1.2;
`
const Footer = () => {
  const { Layout, Container, Smart, ContainerLogo, Logo, Text, ContainerLogosServices, LogoService } = Footer
  return (
    <Layout>
      <Container>
        <Smart>
          <ContainerLogo>
            <Logo src={logoBrandSmartBlue} />
          </ContainerLogo>
          <Text>
            With medical regulatory clearences for clinical pathology detection in over 100 countries, Pearl
            is the only dental AI company elevating patient care for practices across the globe.
          </Text>
          <ContainerLogosServices>
            <LogoService src={secondOpinionHigh} />
            <LogoService src={practiceIntelligenceHigh} />
            <LogoService src={pearlLogoBlack} />
          </ContainerLogosServices>
        </Smart>
        <ContactUs />
      </Container>
    </Layout>
  )
}
Footer.Layout = styled.div`
  padding: 10px;
  background: #ffffff;
`
Footer.Container = styled.div`
  display: flex;
  gap: 10px;
  max-width: 1200px;
  margin: 0 auto;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`
Footer.Smart = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  flex: 1;
`
Footer.ContainerLogo = styled.div`
  display: flex;
  @media (max-width: 1120px) {
    justify-content: center;
  }
`
Footer.Logo = styled.img`
  width: 300px;
`
Footer.Text = styled(Text)`
  font-size: 17px !important;
  color: #092459;
  font-weight: 600;
  line-height: 1.5;
  @media (max-width: 1120px) {
    text-align: center;
  }
`
Footer.ContainerLogosServices = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
`
Footer.LogoService = styled.img`
  width: 280px;
`
const ContactUs = () => {
  const {
    Layout,
    Container,
    Company,
    ContainerProducts,
    TextProducts,
    Title,
    Contact,
    ContainerInputs,
    Button,
    TextButton,
    Input,
  } = ContactUs
  return (
    <Layout>
      <Container>
        <Company>
          <Title>Company</Title>
          <ContainerProducts>
            <TextProducts>Products</TextProducts>
            <TextProducts>Second Opinion</TextProducts>
            <TextProducts>Practice Intelligence</TextProducts>
          </ContainerProducts>
        </Company>
        <Contact>
          <Title>Contact Us</Title>
          <ContainerInputs>
            <Input placeholder="Enter your email" onChange={() => null} />
            <Button primary>
              <TextButton>Send email</TextButton>
            </Button>
          </ContainerInputs>
        </Contact>
      </Container>
    </Layout>
  )
}
ContactUs.Layout = styled.div`
  background: #094074;
  padding: 20px;
  flex: 1;
`
ContactUs.Container = styled.div`
  display: flex;
  gap: 10px;
  height: 100%;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 40px;
  }
`
ContactUs.Company = styled.div`
  display: flex;
  gap: 30px;
  flex-direction: column;
  flex: 0.6;
  padding-left: 30px;
  @media (max-width: 1120px) {
    padding-left: 0;
    gap: 15px;
  }
`
ContactUs.Title = styled(Text)`
  font-size: 18px !important;
  font-weight: bold;
  color: var(--primary-color-blue);
  @media (max-width: 1120px) {
    text-align: center;
  }
`
ContactUs.ContainerProducts = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
`
ContactUs.TextProducts = styled.div`
  font-size: 16px !important;
  font-weight: 600;
  color: #ffffff;
  @media (max-width: 1120px) {
    text-align: center;
  }
`
ContactUs.Contact = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
`
ContactUs.ContainerInputs = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 1120px) {
    align-items: center;
  }
`
ContactUs.Input = styled(TextFieldInput)`
  color: #ffffff;
  font-weight: bold;
  @media (max-width: 1120px) {
    max-width: 300px;
    width: 100%;
  }
`
ContactUs.TextButton = styled(Text)`
  font-weight: bold;
  font-size: 14px;
`
ContactUs.Button = styled(Button)`
  width: 130px;
  padding: 8px;
`

const FillFlexPlace = ({ fill = 1 }: { fill?: number }) => {
  return <div style={{ flex: fill }} />
}

const setScrollForm = () => {
  const formElement = document.querySelector('.form-pearl')
  const postionElementTop = formElement?.getBoundingClientRect().top
  const positionScroll = window.scrollY
  const top = postionElementTop ? positionScroll + (postionElementTop - 50) : 0
  window.scrollTo({
    top,
    behavior: 'smooth',
  })
}
