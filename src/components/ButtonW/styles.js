import sc from 'styled-components/native';

export const Content = sc.TouchableHighlight`
    backgroundColor: rgba(255, 255, 255, .3);
    height: 33px;
    width: 115px;
    borderRadius: 15px;
    alignItems: center;
    justifyContent: center;
    marginTop: 15px;
`;

export const Label = sc.Text`
    fontSize: 11px;
    color: #ffffff;
    fontFamily: 'OpenSans-Bold'
`;
