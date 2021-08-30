import { StyleSheet } from 'react-native';

export const colors = {
    primary: "#4646D4",
    secondary: "#29EB3C",
    yellowPrimary: "#D1D446",
    dark: "#242424",
    light: "#EFEFEF",
    softSpotlight: "#999999",
    hardDark: "#000000",
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
        ...pattern.darkTheme,
    },

    secondaryContainer: {
        ...pattern.centeredContainer,
        ...pattern.safeArea,
        ...pattern.darkTheme,
        flex: 1,
        width: '100%',
        padding: 0,
    },

    textInput: {
        borderWidth: 2,
        borderColor: colors.primary,
        color: colors.secondary,
        borderRadius: 5,
        width: "100%",
        height: 50,
        padding: 10,
        marginVertical: 5,
        fontFamily: "chakra-regular",
    },

    buttonPrimary: {
        ...pattern.centeredContainer,
        flex: 0,
        backgroundColor: colors.primary,
        borderRadius: 5,
        width: "100%",
        height: 50,
        padding: 10,
        marginVertical: 10,
        //shadow
        shadowColor: colors.primary,
        shadowOpacity: 0.9,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 1,
        },
    },

    buttonPrimaryText: {
        color: colors.light,
        fontSize: 16,
        fontFamily: "chakra-regular",
    },

    //yellowButton
    yellowButton: {
        ...pattern.centeredContainer,
        // backgroundColor: colors.primary,
        // width: "100%",
        flex: 0,
        borderRadius: 5,
        borderColor: colors.yellowPrimary,
        borderWidth: 2,
        height: 50,
        paddingVertical: 5,
        paddingHorizontal: 20,
        marginVertical: 10,
        //shadow
        shadowColor: colors.yellowPrimary,
        shadowOpacity: 0.9,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 1,
        },
    },

    yellowButtonText: {
        color: colors.light,
        fontSize: 16,
        fontFamily: "chakra-regular",
    },

    logo: {
        width: 120,
        height: 120,
        marginBottom: 100,
        borderRadius: 50,
    },

    betIcon: {
        width: 120,
        height: 120,
        marginVertical: 20,
        resizeMode: 'contain',
    },

    backIcon: {
        width: 32,
        height: 32,
        resizeMode: 'contain',
        tintColor: colors.secondary
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
        fontWeight: '500',
    },

    tipText: {
        color: colors.softSpotlight,
        fontSize: 12,
        fontWeight: '300',
        width: '100%',
    },

    titlePrimary: {
        color: colors.light,
        fontSize: 18,
        fontWeight: '500',
        width: '100%',
        textAlign: 'center',
        marginBottom: 10,
    },

    doubleMenuContainer: {
        flexDirection: 'row',
        flexWrap: 'nowrap',
        height: 50,
        alignItems: 'center',
        marginBottom: 10,
    },

    doubleMenuTitle: {
        color: colors.light,
        fontSize: 14,
        fontWeight: '600',
        textAlign: 'center',
        marginHorizontal: 10,
    },

    icon: {
        width: 30,
        height: 30,
        resizeMode: 'contain',
    },

    gamePhoto: {
        width: '100%',
        height: 140,
        resizeMode: 'cover',
        borderRadius: 10,
    },

    gamePhotoContainer: {
        marginVertical: 10,
        width: '100%',
        //shadow
        shadowColor: colors.hardDark,
        shadowOpacity: 0.9,
        shadowRadius: 8,
        shadowOffset: {
            height: 1,
            width: 1,
        },
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
            width: 1,
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
        padding: 10,
    },

    gradientButtonContainer: {
        flexDirection: 'row',
        flexWrap: 'nowrap',
        height: 50,
        alignItems: 'center',
        marginVertical: 10,
    },

    gradientButtonTitle: {
        color: colors.light,
        fontSize: 14,
        fontWeight: '600',
        textAlign: 'left',
        marginHorizontal: 10,
        flex: 1,
    },

    toggleButton: {
        marginVertical: 10,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        backgroundColor: colors.primary,
    },

    toggleButtonInactive: {
        marginVertical: 10,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        backgroundColor: colors.softSpotlight,
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
        flex: 1,
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
        fontFamily: "chakra-regular",
    },

    cardHeader: {
        marginVertical: 10,
        width: '100%',
        //shadow
        shadowColor: colors.hardDark,
        shadowOpacity: 0.9,
        shadowRadius: 8,
        shadowOffset: {
            height: 1,
            width: 1,
        },
    },

    cardTitle: {
        color: colors.light,
        fontSize: 24,
        fontWeight: '700',
        textAlign: 'center',
    },

    cardDescription: {
        color: colors.secondary,
        fontSize: 14,
        fontWeight: '600',
        textAlign: 'center',
    },

    //MoneyCard
    moneyCardContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 3,
        borderRadius: 10,
        borderColor: colors.primary,
        padding: 10,
        //shadow
        shadowColor: colors.primary,
        shadowOpacity: 0.5,
        shadowRadius: 4,
        shadowOffset: {
            height: 1,
            width: 1,
        },
    },

    moneyCardText: {
        fontSize: 14,
        color: colors.light,
        fontWeight: '500',
    },

    moneyInfoText: {
        color: colors.light,
        fontSize: 40,
        fontWeight: '300',
        textAlign: 'center',
        fontFamily: "chakra-bold",
    },
    moneyInfoDesc: {
        color: colors.light,
        fontSize: 26,
        fontWeight: '300',
        textAlign: 'center',
        fontFamily: "chakra-regular",
    },

    // BET IN PROGRESS
    betInProgress: {
        marginVertical: 10,
        borderRadius: 5,
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },

    betInProgressContainer: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        width: 280,
        backgroundColor: colors.hardDark,
        borderRadius: 10,
        padding: 10,
        marginHorizontal: 5
    },

    betInProgressTitle: {
        color: colors.softSpotlight,
        fontSize: 10,
        textAlign: 'left',
        fontFamily: "chakra-bold",
        //shadow
        shadowColor: colors.secondary,
        shadowOpacity: 0.5,
        shadowRadius: 4,
        shadowOffset: {
            height: 1,
            width: 1,
        },
    },

    buttonBIP: {
        ...pattern.centeredContainer,
        flex: 0,
        backgroundColor: colors.primary,
        borderRadius: 5,
        padding: 8,
        marginVertical: 3,
        //shadow
        shadowColor: colors.primary,
        shadowOpacity: 0.9,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 1,
        },
    },

    buttonBIPText: {
        color: colors.light,
        fontSize: 10,
        fontFamily: "chakra-bold",
    },

    buttonBIPUser: {
        color: colors.light,
        fontSize: 12,
        fontFamily: "chakra-bold",
    },

    buttonBIPMoney: {
        color: colors.light,
        fontSize: 10,
        fontFamily: "chakra-regular",
    },

    buttonBIPMoneyMain: {
        color: colors.light,
        fontSize: 10,
        fontFamily: "chakra-bold",
    },
});

export default styles;