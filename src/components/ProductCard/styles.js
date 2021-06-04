import { makeStyles } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors';

export const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        width: 345,
        marginBottom: 33,
        padding: 44,
        textAlign: 'center',
        justifyContent: 'center'
    },

    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },

    card_actions: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around'
    },

    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },

    expandOpen: {
        transform: 'rotate(180deg)',
    },

    avatar: {
        backgroundColor: red[500],
    },
}));