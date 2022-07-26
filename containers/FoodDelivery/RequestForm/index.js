import React from 'react';
import Link from 'next/link';
import { Icon } from 'react-icons-kit';
import { arrowRight } from 'react-icons-kit/feather/arrowRight';
import Container from '../../../common/components/UI/Container';
import Heading from '../../../common/components/Heading';
import NextImage from '../../../common/components/NextImage';
import Box from '../../../common/components/Box';
import RequestFormWrapper from './requestForm.style';
const AvailableRestaurants = () => {

    return (
        <RequestFormWrapper id="requestForm">
            <Container>
                <Heading as="h2" content="Solicitud de servicio"/>

                <div className={"inputContainer"}>
                    <input type="text" placeholder="Nombre..." />
                    <input type="text" placeholder="Razon social" />
                    <input type="text" placeholder="Nit..." />
                    <input type="text" placeholder="Nrc..." />
                    <input type="text" placeholder="Correo..." />
                    <input type="text" placeholder="Telefono..." />
                </div>

                <Box className="text-center">
                    <Link href="#">
                        <a className="MoreButton">
                            Enviar solicitud <Icon size={14} icon={arrowRight} />
                        </a>
                    </Link>
                </Box>
            </Container>
        </RequestFormWrapper>
    );
};

export default AvailableRestaurants;
