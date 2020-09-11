import sc from 'styled-components/native';

export const Header = sc.View`
    height: 320px;
    width: 100%;
`;

export const ImagePoster = sc.ImageBackground`
    width: 100%;
    height: 100%;
    backgroundColor: rgba(255, 255, 255, .3);
    borderBottomLeftRadius: 10px;
    borderBottomRightRadius: 10px;
`;

export const Icons = sc.SafeAreaView`
    flexDirection: row;
    margin: 30px;
    height: 100px;
    justifyContent: space-between;
`;
