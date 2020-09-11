import sc from 'styled-components/native';

export const Wrapper = sc.View`
    background: #2C3848;
    width: 100%;
    height: 100%;
    alignItems: flex-start;
`;

export const Description = sc.Text`
    color: rgba(255,255,255,0.7);
    textAlign: left;
    fontSize: 13px;
    margin: 30px;
    fontFamily: 'OpenSans-Regular';
`;

export const Title = sc.Text`
    fontSize: 24px;
    color: #ffffff;
    fontFamily: 'OpenSans-Bold';
    marginRight: 30px;
`;

export const Image4K = sc.Image`
    width: 19px;
    height: 15px;
    marginTop: 15px;
    marginBottom: 25px;
`;

export const Credits = sc.Text`
    fontSize: 13px;
    color: #ffffff;
    fontFamily: 'OpenSans-SemiBold'
`;

export const CreditsR = sc.Text`
    fontSize: 13px;
    color: rgba(255,255,255,0.7);
    fontFamily: 'OpenSans-Regular';
`;
