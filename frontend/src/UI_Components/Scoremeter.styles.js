import styled, { keyframes } from 'styled-components';

// Animation for smooth fill
export const fillAnimation = (width) => keyframes`
  from { width: 0; }
  to { width: ${width}%; }
`;

// Outer container
export const ScoreContainer = styled.div`
  width: 100%;
  max-width: 400px;
  background-color: #f0f0f0;
  border-radius: 12px;
  overflow: hidden;
  height: 24px;
  margin: 20px 0;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
`;

// Inner fill that changes color dynamically
export const ScoreFill = styled.div`
  height: 100%;
  width: ${({ score }) => score}%;
  background: ${({ score }) => {
    if (score >= 80) return '#4CAF50'; // Green
    if (score >= 60) return '#FFB300'; // Yellow
    return '#E53935'; // Red
  }};
  animation: ${({ score }) => fillAnimation(score)} 1.5s ease-in-out forwards;
  transition: width 0.3s ease-in-out;
`;

// Score label
export const ScoreLabel = styled.div`
  text-align: center;
  font-weight: bold;
  margin-top: 8px;
  color: ${({ score }) => {
    if (score >= 80) return '#2E7D32';
    if (score >= 60) return '#FF8F00';
    return '#C62828';
  }};
  font-size: 1.1rem;
`;