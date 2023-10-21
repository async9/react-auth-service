import styled from 'styled-components';
import bgImage from '../../../public/bg.webp';

export const Overlay = styled.div`
  position: relative;
  background: url(${bgImage}) center / cover no-repeat;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.6;
    background-color: #111;
  }
`;

export const Content = styled.div`
  position: relative;
  z-index: 2;
`;
