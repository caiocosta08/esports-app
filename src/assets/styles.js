import { StyleSheet } from 'react-native';

export const colors = {
    primary: "#4646D4",
    secondary: "#29EB3C",
    dark: "#242424",
    light: "#EFEFEF",
    softSpotlight: "#999999",
}

const pattern = StyleSheet.create({
    safeArea: {
        padding: 10
    },
    darkTheme: {
        backgroundColor: colors.dark
    },
    lightTheme: {
        backgroundColor: colors.light
    },
    centeredContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

const styles = StyleSheet.create({

    container: {
        ...pattern.centeredContainer,
        ...pattern.safeArea,
        ...pattern.darkTheme
    },

    secondaryContainer: {
        ...pattern.centeredContainer,
        ...pattern.safeArea,
        ...pattern.darkTheme,
        flex: 1,
        width: '100%',
        padding: 0
    },

    textInput: {
        borderWidth: 2,
        borderColor: colors.primary,
        color: colors.secondary,
        borderRadius: 5,
        width: "100%",
        height: 50,
        padding: 10,
        marginVertical: 5
    },

    buttonPrimary: {
        ...pattern.centeredContainer,
        flex: 0,
        backgroundColor: colors.primary,
        borderRadius: 5,
        width: "100%",
        height: 50,
        padding: 10,
        marginVertical: 10
    },

    buttonPrimaryText: {
        color: colors.light,
    },

    logo: {
        width: 120,
        height: 120,
        marginBottom: 100,
        borderRadius: 50
    },

    betIcon: {
        width: 120,
        height: 120,
        marginVertical: 20,
        resizeMode: 'contain'
    },

    buttonSecondary: {
        ...pattern.centeredContainer,
        alignItems: 'flex-end',
        flex: 0,
        width: "100%",
        marginVertical: 1,
    },

    buttonSecondaryText: {
        color: colors.secondary,
        fontSize: 12,
        fontWeight: '500'
    },

    tipText: {
        color: colors.softSpotlight,
        fontSize: 12,
        fontWeight: '300',
        width: '100%'
    },

    titlePrimary: {
        color: colors.light,
        fontSize: 18,
        fontWeight: '500',
        width: '100%',
        textAlign: 'center',
        marginBottom: 10
    },

    doubleMenuContainer: {
        flexDirection: 'row',
        flexWrap: 'nowrap',
        height: 50,
        alignItems: 'center',
        marginBottom: 10
    },

    doubleMenuTitle: {
        color: colors.light,
        fontSize: 14,
        fontWeight: '600',
        textAlign: 'center',
        marginHorizontal: 10
    },

    icon: {
        width: 30,
        height: 30,
        resizeMode: 'contain'
    },

    gamePhoto: {
        width: '100%',
        height: 140,
        resizeMode: 'cover',
        borderRadius: 10,
    },

    gamePhotoContainer: {
        marginVertical: 10,
        width: '100%'
    },

    circleImage: {
        width: 70,
        height: 70,
        resizeMode: 'cover',
        borderRadius: 50,
        borderWidth: 2,
        borderColor: colors.secondary,
    },

    circleImageContainer: {
        marginHorizontal: 8,
        //shadow
        shadowColor: colors.secondary,
        shadowOpacity: 0.9,
        shadowRadius: 8,
        shadowOffset: {
            height: 1,
            width: 1
        },
    },

    gradientButton: {
        marginVertical: 10,
        borderRadius: 5,
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 50,
        padding: 10
    },

    gradientButtonContainer: {
        flexDirection: 'row',
        flexWrap: 'nowrap',
        height: 50,
        alignItems: 'center',
        marginVertical: 10
    },

    gradientButtonTitle: {
        color: colors.light,
        fontSize: 14,
        fontWeight: '600',
        textAlign: 'left',
        marginHorizontal: 10,
        flex: 1
    },

    toggleButton: {
        marginVertical: 10,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        backgroundColor: colors.primary
    },

    toggleButtonInactive: {
        marginVertical: 10,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        backgroundColor: colors.softSpotlight
    },

    toggleButtonTitle: {
        color: colors.light,
        fontSize: 12,
        fontWeight: '500',
        textAlign: 'center',
    },

    userListItem: {
        marginVertical: 10,
        borderRadius: 5,
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 1,
    },

    userListItemContainer: {
        flex: 1,
        height: 50,
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginVertical: 10,
        width: '100%',
    },

    userListItemTitle: {
        color: colors.light,
        fontSize: 14,
        fontWeight: '600',
        textAlign: 'left',
        marginHorizontal: 10,
        flex: 1
    },

    // Section Title
    sectionTitle: {
        marginVertical: 10,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },

    sectionTitleContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
        width: '100%',
    },

    sectionTitleTitle: {
        color: colors.light,
        fontSize: 20,
        fontWeight: '300',
        textAlign: 'center',
    },
});

export default styles;