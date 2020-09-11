import sc from 'styled-components/native';

export const Wrapper = sc.View`
    background: #5CA0D3;
    flex: 1;
    alignItems: center;
    justifyContent: center;
`;

export const Backgrond = sc.ScrollView`
    background: #2C3848;
    height: 70%;
    width: 100%;
    borderTopLeftRadius: 20px;
    borderTopRightRadius: 20px;
`;

export const Header = sc.View`
    height: 30%;
    width: 100%;
    alignItems: center;
    justifyContent: center;
`;

export const TextHeader = sc.Text`
    fontSize: 26px;
    color: #ffffff;
    fontFamily: 'OpenSans-Bold'
`;
