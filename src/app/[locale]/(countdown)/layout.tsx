import { FC, PropsWithChildren } from 'react';
import Image from 'next/image';

import BG_IMG from './layout.jpg';
import './layout.scss';

import { IMAGES, Row } from '@core/uikit';
import { Link } from '@core/navigation';
import { RoutePath } from '@common/constants';

type CountdownLayoutProps = PropsWithChildren;

const CountdownLayout: FC<CountdownLayoutProps> = ({ children }) => {
  return (
    <body>
      <div className="preview-img overflow-hidden ">
        <div className="swiper-container preview-thumb">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div
                className="slide-bg"
                style={{ backgroundImage: `url(${BG_IMG.src})` }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div className="coming-content min-vh-100 py-4 px-3 py-sm-5">
        <div className="bg-overlay bg-primary"></div>
        <div className="container">
          <Row className="justify-content-center">
            <Row.Col lg={8}>
              <div className="text-center py-4 py-sm-5">
                <div className="mb-5">
                  <Link pathname={RoutePath.Index}>
                    <Image
                      width={30}
                      height={30}
                      src={IMAGES.LOGO.src}
                      alt={process.env.PRODUCT_NAME}
                      className="me-1"
                    />
                    <span className="logo-txt text-white font-size-22">
                      {process.env.PRODUCT_NAME}
                    </span>
                  </Link>
                </div>
                {children}
              </div>
            </Row.Col>
          </Row>
        </div>
      </div>
    </body>
  );
};

export default CountdownLayout;
