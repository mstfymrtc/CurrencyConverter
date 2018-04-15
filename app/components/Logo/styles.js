import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

const imageWidth = Dimensions.get('window').width / 2;
const $largeContainerSize= imageWidth;
const $largeImageSize= imageWidth / 2;
const $smallContainerSize= imageWidth / 2;
const $smallImageSize= imageWidth / 4;

export default EStyleSheet.create({

  
    container: {

        alignItems: 'center',

    },
    containerImage: {
        alignItems: 'center',
        justifyContent: 'center',
        width: $largeContainerSize,
        height: $largeContainerSize,
    },
    image: {

        width: $largeImageSize,
        height: $largeImageSize,
    },
    text: {

        fontWeight: '600',
        fontSize: 28,
        letterSpacing: -0.5,
        marginTop: 15,
        color: '$white',

    },


});