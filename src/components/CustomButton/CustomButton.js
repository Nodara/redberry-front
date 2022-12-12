import { Button, Typography } from "@mui/material";

const CustomButton = ({
    to,
    sx,
    title,
    onClick,
    toBeWrapped,
    type

}) => {
    return (
        <Button
            type={type}
            variant="text"
            size="small"
            sx={sx}
            component={toBeWrapped}
            to={to}
            onClick={onClick}
        >
            <Typography>
                {title}
            </Typography>
        </Button>
    )
};
export default CustomButton;
