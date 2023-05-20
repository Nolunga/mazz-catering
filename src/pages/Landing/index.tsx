import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Input,
  Modal,
  ModalContent,
  ModalOverlay,
  Text,
  Textarea,
  useToast
} from '@chakra-ui/react'
import CountUp from 'react-countup'
import { LogoComponent } from '../../components'
import images from '../../theme/images'

import axios from 'axios'
import BearCarousel, { BearSlideItem, TBearSlideItemDataList } from 'bear-react-carousel'
import { useState } from 'react'

const LandingPage = () => {
  const toast = useToast()

  const onScrollToItem = (itemId: string) => {
    const item = document.querySelector(itemId)
    item?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const MENU_OPTIONS = [
    {
      name: 'Home',
      url: '#home'
    },
    {
      name: 'About',
      url: '#about'
    },
    {
      name: 'Services',
      url: '#services'
    },
    {
      name: 'Gallery',
      url: '#gallery'
    },
    {
      name: 'Contact',
      url: '#contact'
    }
  ]

  const STATS = [
    {
      title: 'Years of Experience',
      value: 20
    },
    {
      title: 'Happy Customers',
      value: 1024
    },
    {
      title: 'Catering Capacity',
      value: 800
    },
    {
      title: 'Team',
      value: 43
    }
  ]

  const sliderImages = [
    { id: 1, image: images.Image10 },
    { id: 2, image: images.Chaffin },
    { id: 3, image: images.Image5 }
  ]

  const bearSlideItemData: TBearSlideItemDataList = sliderImages.map((row) => {
    return {
      key: row.id,
      children: <BearSlideItem imageUrl={row.image}></BearSlideItem>
    }
  })

  const SERVICES = [
    {
      title: 'Catering',
      image: images.Image2,
      description: 'We offer catering services for your corporate and private events.'
    },
    {
      title: 'Hiring',
      image: images.Image1,
      description:
        'Cutlery, Crockery, Table Clothes, and everything you might need complete your hosting needs.'
    },
    {
      title: 'Delivering',
      image: images.Image4,
      description: 'We deliver to your corporate and private events.'
    },
    {
      title: 'Baking',
      image: images.Image12,
      description: 'We bake for your corporate and private events.'
    }
  ]

  const [showService, setShowService] = useState(false)
  const [service, setService] = useState<typeof SERVICES[number]>()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [date, setDate] = useState('')
  const [message, setMessage] = useState('')

  const onSendMessage = async () => {
    try {
      await axios.post('https://mtszgvslrwq25aecqk3vjtdrsa0naaqg.lambda-url.eu-north-1.on.aws/', {
        name,
        email,
        phoneNumber,
        date,
        message
      })
      toast({
        title: 'Success',
        description: 'Meessage sent successfully',
        status: 'success'
      })
      setName('')
      setEmail('')
      setPhoneNumber('')
      setDate('')
      setMessage('')
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Error Sending Message',
        status: 'error'
      })
    }
  }
  return (
    <Flex width="100%" flexDirection="column" color="white" backgroundColor="#29251f">
      <Flex
        id="home"
        minHeight="100vh"
        backgroundColor="#29251f"
        width="100%"
        flexDirection="row"
        flexWrap="wrap-reverse"
      >
        <Flex
          width={['100%', '40%']}
          flexDirection="column"
          justifyContent="space-around"
          paddingLeft={[0, 10]}
        >
          <Flex marginBottom="50px">
            <LogoComponent />
          </Flex>
          <Text fontSize="45px" textAlign="center" fontWeight="bold">
            Delicious. Authentic. Professional.
          </Text>
          <Text textAlign="center">
            Experience the heart of flavor with our practical and hearty dishes.
          </Text>
          <Flex justifyContent="space-around">
            <Flex
              onClick={() => onScrollToItem('#about')}
              borderRadius={5}
              padding={3}
              cursor="pointer"
              backgroundColor="#dfae68"
            >
              <Text>Read More</Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex width={['100%', '60%']} flexDirection="column">
          <Flex position="relative" flexDirection="column" height="100%">
            <Flex width="90%">
              <Flex
                width="100%"
                marginTop="50px"
                marginBottom="50px"
                justifyContent="space-around"
                zIndex={1}
              >
                {MENU_OPTIONS.map((menu, i) => (
                  <Flex key={i} onClick={() => onScrollToItem(menu.url)} cursor="pointer">
                    <Text color="white">{menu.name}</Text>
                  </Flex>
                ))}
              </Flex>
            </Flex>
            <Flex position="absolute" height="100%" width="100%" backgroundColor="#dfae68">
              <Image src={images.Chaffin} objectFit="fill" height="90%" width={['100%', '90%']} />
              <Box
                position="relative"
                w="100%"
                h="200px"
                bgGradient="linear(black.100 0%, orange.100 25%, black.100 50%)"
              />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Flex minHeight={100} backgroundColor="#1d1710" width="100%"></Flex>
      <Flex
        id="about"
        backgroundColor="#29251f"
        width="100%"
        flexDirection="row"
        paddingLeft="20px"
        paddingRight="20px"
        alignItems="center"
        flexWrap="wrap"
      >
        <Flex
          alignItems="center"
          maxHeight="600px"
          width={['100%', '50%']}
          justifyContent="center"
          backgroundColor="#dfae68"
        >
          <Image src={images.Mazz} height="600px" width="100%" objectFit="contain" />
        </Flex>
        <Flex width={['100%', '50%']} flexDirection="column">
          <Heading textAlign="center" fontSize="45px" padding={20}>
            About Us
          </Heading>
          <Flex
            backgroundColor="#342c24"
            width="100%"
            height={['', '300px']}
            flexDirection="column"
            padding={5}
            justifyContent="center"
          >
            <Text textAlign="center">
              Ma ZZ Catering, based in Boskburg Gauteng, is a full-service catering company with
              100% black female ownership. Our catering services include food delivery and hiring
              services, and we cater to both corporate and private functions. Founded in 2000 by
              Zanele Ngcakane, a skilled chef with a love for soul food and a curious palate, our
              focus is on providing exceptional service and great value for money. Our food is known
              for its unique and hearty flavors, reflecting the passion and experience of our team.
              Let us take care of all your catering needs with our delicious food, reliable
              delivery, and professional hiring services.
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        backgroundImage={images.FingerFoodsImg}
        minHeight="250px"
        justifyContent="space-around"
        alignItems="center"
        flexWrap="wrap"
      >
        {STATS.map(({ title, value }, i) => {
          const delay = i + 1
          return (
            <Flex key={i} flexDirection="column" alignItems="center" width={['100%', '25%']}>
              <Text fontSize="45px">
                <CountUp delay={delay} end={value} enableScrollSpy />+
              </Text>
              <Text fontSize="25px">{title}</Text>
            </Flex>
          )
        })}
      </Flex>
      <Flex
        id="services"
        backgroundColor="#29251f"
        width="100%"
        flexDirection="column"
        padding="20px"
      >
        <Heading textAlign="center" fontSize={['40px', '45px']} padding={20}>
          Services
        </Heading>
        <Flex flexDirection="row" justifyContent="space-around" flexWrap="wrap">
          {SERVICES.map((item, i) => (
            <Flex
              key={i}
              position="relative"
              height="200px"
              width={['90%', '200px']}
              borderRadius={5}
              alignSelf="center"
              margin="10px"
              marginBottom={['50px', '10px']}
              cursor="pointer"
              onClick={() => {
                setService(item)
                setShowService(true)
              }}
            >
              <Image
                src={item.image}
                position="absolute"
                backgroundColor="red"
                boxSize="100%"
                left={-10}
                bottom={10}
              />
              <Flex
                backgroundColor="#dfae68"
                boxSize="100%"
                justifyContent="center"
                alignItems="flex-end"
              >
                <Text fontWeight="bold" marginBottom="10px">
                  {item.title}
                </Text>
              </Flex>
            </Flex>
          ))}
        </Flex>
      </Flex>

      <Heading textAlign="center" fontSize="45px" padding={20}>
        Gallery
      </Heading>
      <Flex
        id="gallery"
        backgroundColor="#29251f"
        width="100%"
        flexDirection="column"
        padding="30px"
      >
        <BearCarousel
          data={bearSlideItemData}
          isEnableAutoPlay={true}
          isEnableNavButton
          aspectRatio={{ widthRatio: 16, heightRatio: 9 }}
        />
      </Flex>
      <Flex id="contact" width="100%" padding="20px" backgroundColor="#29251f" flexWrap="wrap">
        <Flex marginTop="100px" width={['100%', '50%']} flexDirection="column">
          <Heading textAlign="center" fontSize="45px" marginBottom={5}>
            Get in touch
          </Heading>
          <Flex flexDirection="column" alignContent="space-evenly" width="100%" height="100%">
            <Text textAlign="center">8 Outeniqua street, Rondebult, Germiston, 1423</Text>
            <Text textAlign="center">(+27) 083 699 1417</Text>
            <Text textAlign="center">faithzanelengcakane@gmail.com</Text>
          </Flex>
        </Flex>
        <Flex marginTop="100px" position="relative" width={['100%', '50%']} flexDirection="column">
          <Flex height="100%" width="100%" backgroundColor="#dfae68">
            <Flex
              marginTop="-10%"
              height="90%"
              width={['100%', '90%']}
              flexDirection="column"
              marginBottom={5}
            >
              <Image src={images.Image11} height="320px" width="100%" objectFit="cover" />
              <Flex backgroundColor="#342c24" flexDirection="column" width="100%" padding={5}>
                <Flex justifyContent="space-between">
                  <Input
                    value={name}
                    onChange={({ target }) => setName(target.value)}
                    placeholder="Name"
                    width="45%"
                  />
                  <Input
                    value={email}
                    onChange={({ target }) => setEmail(target.value)}
                    placeholder="Email"
                    width="45%"
                  />
                </Flex>
                <Flex marginTop={5} marginBottom={5} justifyContent="space-between">
                  <Input
                    value={phoneNumber}
                    onChange={({ target }) => setPhoneNumber(target.value)}
                    type="tel"
                    width="45%"
                    placeholder="Phone Number"
                  />
                  <Input
                    value={date}
                    onChange={({ target }) => setDate(target.value)}
                    type="date"
                    width="45%"
                    placeContent="Event Date"
                  />
                </Flex>
                <Textarea
                  value={message}
                  onChange={({ target }) => setMessage(target.value)}
                  placeholder="Message"
                />
                <Button onClick={onSendMessage} marginTop={5} backgroundColor="#dfae68">
                  Send
                </Button>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        flexWrap="wrap"
        minHeight="100px"
        flexDirection="row"
        alignItems="center"
        backgroundColor="#1d1710"
        justifyContent="space-around"
      >
        <LogoComponent />
        <Flex flexDirection="column" minHeight="100px" alignItems="center" width="100%">
          <Image
            onClick={() => window.open('https://www.instagram.com/mazzcatering/')}
            src={images.Instagram}
            cursor="pointer"
            height={50}
            width={50}
            objectFit="cover"
          ></Image>

          <Text margin={5}> © Copyright {new Date().getFullYear()}. All rights reserved</Text>
        </Flex>
      </Flex>
      <Modal isOpen={showService} onClose={() => setShowService(false)} isCentered>
        <ModalOverlay bg="none" backdropFilter="blur(10px) hue-rotate(0deg)" />
        <ModalContent padding={5}>
          <Image
            src={service?.image}
            boxSize={200}
            alignSelf="center"
            borderRadius="10px"
            marginTop="-100px"
          />
          <Text textAlign="center" fontSize="30px" marginTop="10px">
            {service?.title}
          </Text>
          <Text marginTop={10} marginBottom={10} textAlign="center">
            {service?.description}
          </Text>
          <Button backgroundColor="#dfae68" onClick={() => setShowService(false)}>
            Close
          </Button>
        </ModalContent>
      </Modal>
    </Flex>
  )
}

export default LandingPage
