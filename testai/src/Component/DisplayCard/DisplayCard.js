import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ReferenceLine,
    ResponsiveContainer,
} from 'recharts';


const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 600,
        paddingTop: '56.25%', // 16:9
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




const DisplayCard = (props) => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    const imgSrc = "/data/" + props.data.screenshot


    let row = {};
    const data = [];
    for (let i = 0; i < 3; i++) {
        row = {}
        row.launchTime = props.data.launch_times[i];
        row.memory = props.data.memory[i];
        row.cpu = props.data.cpu[i];
        data.push(row);
    }


    return (
        <Card className={classes.root}>
            <CardHeader

                title={props.data.step_name}
            />
            <CardMedia
                className={classes.media}
                image={imgSrc}
                title="Paella dish"
            />
            <CardContent>

            </CardContent>
            <CardActions disableSpacing>
                <Typography>Details</Typography>
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    {console.log(data)}
                    <div style={{height: '200px'}}>
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart
                            width={50}
                            height={100}
                            data={data}
                            margin={{
                                top: 20,
                                right: 50,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="launchTime" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="memory" stroke="#8884d8" />
                            <Line type="monotone" dataKey="cpu" stroke="#82ca9d" />
                        </LineChart>
                    </ResponsiveContainer>
                    </div>
                </CardContent>
            </Collapse>
        </Card>
    );
}

export default DisplayCard;