import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import Image from '../elements/Image';
import Modal from '../elements/Modal';
import main from '../elements/main';
// import {Route, Link, Router} from 'react-router-dom'

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {

  const [openModal, setOpenModal] = useState(false);

  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );



  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <center><div class= "logo-web-3"></div></center>
            <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
              <center><div class="logo-web"><Image
            src={require('./../../assets/images/btglogo2.png')}
            alt="Open"
            width={128}
            height={128} /></div></center>
              <h1 class= 'title-web-3'><span class='one'>w</span><span class='two'>e</span><span class='three'>b</span><span class='four'>3</span><span class='five'>.</span><span class='six'>0</span></h1>
            </h1>
            <div className="container-xs">
              <p className="m-0 mb-32 reveal-from-bottom subtitle" data-reveal-delay="100">
                s e g u r o s & p r e v i d ê n c i a
                </p>
              <div className="reveal-from-bottom" data-reveal-delay="300">
                <ButtonGroup>
                  <button className = "openModalBtn" onClick={() => {setOpenModal(true);}} >Começar</button>
                    {openModal && <Modal closeModal={setOpenModal}/>}
                </ButtonGroup>
                {/* <Router exact path='/main' component={main}></Router> */}
              </div>
              <h1>Consulta de apólices.</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;