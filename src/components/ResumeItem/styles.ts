import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
`;

export const Title = styled.div`
  text-align: center;
  font-weight: bold;
  color:#C2E0FD;
  margin-bottom: 5px;
`;

export const Info = styled.div<{ color?: string }>`
  text-align: center;
  font-weight: bold;
  color: ${(props) => props.color ?? "#C2E0FD"};
`;
