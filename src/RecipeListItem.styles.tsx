import { Card } from '@material-ui/core';
import styled from 'styled-components';

export const Row: any = styled(Card)`
  display: flex;
  line-height: 40px;
  margin: 10px 20px;
  box-shadow: 2px 2px 5px 0 rgba(150, 150, 150, 0.75);
`;

export const Padding = styled.div`
  padding-left: 20px;
`;

export const Title = styled(Padding)`
  min-width: ${100 + 102}px;
`;
