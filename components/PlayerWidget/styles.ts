import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
        position: "absolute",
        bottom: 45,
        width: '100%',
        backgroundColor: 'black',
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        width: 65,
        height: 65
    },
    artist: {
        color: 'lightgray',
    },
    title: {
        fontSize: 15,
        color: 'white',
        marginHorizontal: 8
    },
    right: {
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center',
        flex: 2,
    }
});

export default styles;