import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 18
    },
    image: {
        width: 200,
        height: 200,
    },
    name: {
        color: "white",
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 8
    },
    creator: {
        color: 'white',
        fontSize: 12
    },
    likes: {
        color: 'lightgray',
        fontSize: 12,
        marginHorizontal: 5
    },
    creatorContainer: {
        flexDirection: 'row'
    },
    button: {
        backgroundColor: '#1CD05D',
        height: 50,
        width: 170,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 12
    },
    buttonText: {
        color: 'white',
        fontSize: 17
    }
})

export default styles;