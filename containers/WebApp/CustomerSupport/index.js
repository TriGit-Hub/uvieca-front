import Box from '../../../common/components/Box';
import Heading from '../../../common/components/Heading';
import Container from '../../../common/components/UI/Container';
import { CUSTOMER_SUPPORT_DATA } from '../../../common/data/WebApp';
import Image from 'next/image';
import Link from 'next/link';
import React, {useState} from 'react';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import TabPanel from '@mui/lab/TabPanel';
// import { TabPanel } from '@mui/lab';

import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import { Icon } from 'react-icons-kit';
import { androidArrowForward } from 'react-icons-kit/ionicons/androidArrowForward';
import { androidDone } from 'react-icons-kit/ionicons/androidDone';
import CustomerSupportArea, { Row } from './customerSupport.style';
import AddressForm from './AddressForm';
import Checkout from './Checkout'
import PaymentForm from './PaymentForm'
import Review from './Review'
import { flex } from 'styled-system';
import foco from '../../../common/assets/image/webApp/foquito.jpg';
const CustomerSupport = () => {
  const { image, shapeImage, title, options, button } = CUSTOMER_SUPPORT_DATA;
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <CustomerSupportArea>
      <Container>
        <Box className="blockTitle">
          <Heading as="h2" content={title} />
          
        </Box>
     
        <Checkout/>
       
          
        {/* <TabContext value={value}>
  <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
    <TabList onChange={handleChange} aria-label="lab API tabs example">
      <Tab label="Item One" value="1" />
      <Tab label="Item Two" value="2" />
      <Tab label="Item Three" value="3" />
    </TabList>
  </Box>
  <TabPanel value="1"><AddressForm/></TabPanel>
  <TabPanel value="2"><PaymentForm/></TabPanel>
  <TabPanel value="3"><Checkout/><Review/></TabPanel>
</TabContext> */}
        {/* <Row>
          <Box className="image">
            <Image src={image} alt="customer support image" />
            <div className='shapeImage'>
              <Image
                src={shapeImage}
                alt="customer support"
              />
            </div>
          </Box>
          <Box className="content">
            <Box className="contentInner">
              <ul className="options">
                {options?.map(({ label }, index) => (
                  <li className="optionsItem" key={`option-key-${index}`}>
                    <Icon icon={androidDone} size={24} />
                    {label}
                  </li>
                ))}
              </ul>
              <Link href={button?.link}>
                <a className="button">
                  <span>
                    {button?.label}
                    <Icon icon={androidArrowForward} size={19} />
                  </span>
                </a>
              </Link>
            </Box>
          </Box>
        </Row> */}
      </Container>
    </CustomerSupportArea>
  );
};

export default CustomerSupport;
