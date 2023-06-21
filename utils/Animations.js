// import npm pkg for styled components to use for transition and non hover effects
import styled, { keyframes } from 'styled-components';
import { bounceInLeft, rollIn, lightSpeedOut, fadeOut, bounceInDown, flipInX, wobble, zoomInRight, rotateInUpRight, fadeIn, bounce, fadeInUp, bounceInRight } from 'react-animations';

// ----- Bounce in Left Animation ------ //
const bounceAnimation = keyframes`${bounceInLeft}`;
export const BouncyDiv = styled.div`
animation: 1.5s ${bounceAnimation}
`;

// ----- Bounce in Right Img ------ //
const bounceInRightImg = keyframes`${bounceInRight}`;
export const BounceInRightImg = styled.img`
animation: 1.5s ${bounceInRightImg}
`;

// ----- Bounce in Right H5 ------ //
const bounceInRightH5 = keyframes`${bounceInRight}`;
export const BounceInRightH5 = styled.h5`
animation: 3s ${bounceInRightH5}
`;

// ----- Bounce in Right P ------ //
const bounceInRightP = keyframes`${bounceInRight}`;
export const BounceInRightP = styled.p`
animation: 3s ${bounceInRightP}
`;

// ----- Bounce in Right Label ------ //
const bounceInRightLabel = keyframes`${bounceInRight}`;
export const BounceInRightLabel = styled.label`
animation: 3s ${bounceInRightLabel}
`;

// ----- RollIn Animation  Div------ //
const rollInAnimation = keyframes`${rollIn}`;
export const RollInDiv = styled.div`
animation: 2.5s ${rollInAnimation}
`;

// ----- RollIn Animation Section------ //
const rollInAnimation2 = keyframes`${rollIn}`;
export const RollInSection = styled.section`
animation: 1.5s ${rollInAnimation2}
`;

// ----- light speed Animation ------ //
const lightSpeedAnimation = keyframes`${lightSpeedOut}`;
export const LightSpeedDiv = styled.div`
animation: 2.5s ${lightSpeedAnimation}
`;

// ----- fadeOut Animation ------ //
const fadeOutAnimation = keyframes`${fadeOut}`;
export const FadeOutDiv = styled.div`
animation: 2.5s ${fadeOutAnimation}
`;

// ----- bounce in down Animation ------ //
const bounceInDownAnimation = keyframes`${bounceInDown}`;
export const BounceInDownHeader = styled.header`
animation: 1s ${bounceInDownAnimation}
`;

// bounce in down h1
export const BounceInDownH1 = styled.h1`
animation: 1.1s ${bounceInDownAnimation}
`;

// ----- flip in X Animation ------ //
const flipInXAnimation = keyframes`${flipInX}`;
export const FlipInXSection = styled.section`
animation: 1.5s ${flipInXAnimation}
`;

// ----- flip in X Animation ------ //
const flipInXImg = keyframes`${flipInX}`;
export const FlipInXImg = styled.img`
animation: 2s ${flipInXImg}
`;

// ----- wobble Animation ------ //
const wobbleAnimation = keyframes`${wobble}`;
export const WobbleDiv = styled.div`
animation: 1.5s ${wobbleAnimation}
`;

// ----- zoomInRight Animation ------ //
const zoomInRightAnimation = keyframes`${zoomInRight}`;
export const ZoomInRightDiv = styled.div`
animation: 1.5s ${zoomInRightAnimation}
`;

// ----- rotateInUpRight Animation ------ //
const rotateInUpRightAnimation = keyframes`${rotateInUpRight}`;
export const RotateInUpRightSection = styled.section`
animation: 1.5s ${rotateInUpRightAnimation}
`;

// fadeIn Animation
const fadeInAnimation = keyframes`${fadeIn}`;
export const FadeInDiv = styled.div`
animation: 1.9s ${fadeInAnimation}
`;

// fadeIn Section
const fadeInSection = keyframes`${fadeIn}`;
export const FadeInSection = styled.section`
animation: 1.9s ${fadeInSection}
`;

// fadeIn Ul
const fadeInUl = keyframes`${fadeIn}`;
export const FadeInUl = styled.ul`
animation: 3s ${fadeInUl}
`;

// longer fadeIn Animation
const longerFadeInAnimation = keyframes`${fadeIn}`;
export const LongFadeInDiv = styled.div`
animation: 3s ${longerFadeInAnimation}
`;

// Simple Bounce Main
const BounceMainAnimation = keyframes`${bounce}`;
export const BounceMain = styled.div`
animation: 1.5s ${BounceMainAnimation}
`;

// Fade In Up Section
const fadeInUpAnimation = keyframes`${fadeInUp}`;
export const FadeInUpSection = styled.div`
animation: 1.5s ${fadeInUpAnimation}
`;

// Fade In Up H5
export const FadeInUpH5 = styled.h5`
animation: 3s ${fadeInUpAnimation}
`;