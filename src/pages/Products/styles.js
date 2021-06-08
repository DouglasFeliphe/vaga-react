import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({

    section: {
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        }

    },
    productItem: {
        margin: 22
    }

}));

