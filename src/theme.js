const theme = {
    fontLight: 'OpenSans-Light',
    fontRegular: 'OpenSans-Regular',
    fontSemiBold: 'OpenSans-SemiBold',
    fontBold: 'OpenSans-Bold',
    primary: '#f8f9fa',
    white: '#ffffff',
    border: 'rgba(46, 91, 255, 0.08)',
    darkBackground: '#2d2d2d',
    lightBackground: '#F8FCFF',
    black: '#222222',
    darkBlack: '#000000',
    darkText: '#28292B',
    facebook: '#232A64',
    darkFacebook: '#1a2052',
    blue: '#2E5BFF',
    darkBlue: '#1a44da',
    green: '#00D37B',
    lightGreen: '#00D37B',
    darkGreen: '#00b569',
    red: '#EB001B',
    text: '#2E384D',
    grey: '#c3c9dc',
    darkGrey: '#8798AD',
    lightGrey: '#ACC7DA',
    lightGreyBorder: '#ebeff2',
    lightestGrey: '#F2F5FF',
    greyBackground: '#F4F6FC',
    silver: '#e0e3eb',
    error: '#ee2222',
    urgent: '#FF5C00',
    yellow: '#ffc700',
    defaultGradient: ['#00d37b', '#00d3ba'],

    hover: (color) => {
        switch (color) {
        case theme.primary:
            return theme.darkGreen;
        case theme.facebook:
            return theme.darkFacebook;
        case theme.black:
            return theme.darkBlack;
        default:
            return theme.darkBlue;
        }
    },
};

export default theme;