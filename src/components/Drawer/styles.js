import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaSearch, FaFonticons, FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { colors, metrics } from '../../styles';

export const AreaDrawer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  background-color: ${colors.pickerOne};
`;
export const AreaHeader = styled.div`
  display: flex;
  flex: 1;
  justify-content: row;
  max-height: 68px;
  overflow: hidden;
`;
export const AreaPhoto = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: ${({ open }) => (open ? 200 : 70)}px;
  overflow: hidden;
`;
export const Photo = styled.img`
  width: 60px;
  height: 80%;
  border: solid;
  border-width: 3px;
  border-radius: 32px;
  box-shadow: 0 0 20px ${() => colors.boxShadownTransparend};
`;
export const AreaInfo = styled.div`
  display: flex;
  flex: 2;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Title = styled.div`
  text-overflow: ellipsis;
  padding-left: 5px;
  width: 100%;
`;
export const Text = styled.div`
  width: 100%;
  padding-left: 5px;
`;
export const AreaSearch = styled.div`
  display: flex;
  flex: 1;
  max-height: 40px;
`;
export const AreaInputSearch = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  padding-bottom: 3px;
`;
export const InputSearch = styled.input`
  background-color: ${colors.white};
  border: none;
  width: 95%;
  height: 90%;
  padding-left: ${({ open }) => (open ? 5 : 0)}px;
  border-radius: 8px;
  color: ${colors.pickerEigth};
  transition-duration: 0.7s;
  box-shadow: 0 0 1px ${() => colors.darknesTransparent};
  &:focus {
    transition-duration: 0.7s;
    box-shadow: 0 0 10px ${() => colors.darknesTransparent};
  }
`;
export const AreaInputIconSearch = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 70px;
`;
export const AreaBody = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: ${colors.pickerOne};
  overflow: hidden;
`;

export const AreaSubOption = styled.div`
  flex: 1;
  height: 24px;
  background-color: #126792;
`;
export const AreaUnderline = styled.div`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-left: 5px;
  padding-right: 5px;
  margin-top: 3px;
  height: 1px;
`;
export const Underline = styled.div`
  margin-top: 3px;
  background-color: ${colors.boxShadownTransparend};
  height: 80%;
`;
export const AreaOptionsList = styled.div`
  display: block;
`;
export const AreaOptions = styled.div`
  display: flex;
  max-height: 50px;
  &:hover {
    transition-duration: 0.7s;
    background-color: ${colors.boxShadownTransparend};
  }
`;
export const AreaOption = styled(Link)`
  display: flex;
  flex: 1;
  text-decoration: none;
  color: ${colors.black};
  max-height: 50px;
  &:hover {
    cursor: pointer;
  }
`;
export const AreaIconOptions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 70px;
`;
export const AreaTitle = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  max-height: 50px;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-left: 5px;
`;
export const TitleOption = styled.div`
  display: flex;
  flex: 1;
  max-height: 50px;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${colors.pickerEigth};
`;
export const AreaIconDownUp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;

  &:hover {
    cursor: pointer;
  }
`;
export const IconSeach = styled(FaSearch)`
  color: ${colors.pickerEigth};
`;
export const IconFont = styled(FaFonticons)``;
export const IconDown = styled(FaAngleDown)`
  color: ${colors.pickerEigth};
`;
export const IconUp = styled(FaAngleUp)`
  color: ${colors.pickerEigth};
`;
