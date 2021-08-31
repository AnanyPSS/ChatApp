export const userInfoScreenStyle = (props) =>{

    return {
        display: "flex",
        flexDirection: "column!important",
        height: "calc(100% - 50px)",
        fontFamily: `${props.theme.fontFamily}`,
        "*": {
            boxSizing: "border-box",
            fontFamily: `${props.theme.fontFamily}`,
        }
    }
}

export const headerStyle = (props) => {

    return {
        padding: "16px",
        position: "relative",
        borderBottom: `1px solid ${props.theme.borderColor.primary}`,
        height: "80px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    }
}

export const headerTitleStyle = () => {

    return {
        margin: "0",
        fontWeight: "700",
        fontSize: "40px",
        color: "white",
    }
}

export const detailStyle = () => {

    return {
        padding: "16px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    }
}

export const thumbnailStyle = () => {

    return {
        display: "inline-block",
        width: "46px",
        height: "46px",
        flexShrink: "0",
        marginLeft: "20px",
        marginTop: "25px",
    }
}

export const userDetailStyle = () => {
    
    return {
        width: "calc(100% - 45px)",
        flexGrow: "1",
        paddingLeft: "16px",
        "&[dir=rtl]": {
            paddingRight: "16px",
            paddingLeft: "0",
        }
    }
}

export const userNameStyle = () => {

    return {
        margin: "20px 0  5px",
        fontSize: "25px",
        fontWeight: "600",
        display: "block",
        maxWidth: "100%",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        color: "white",
    }
}

export const userStatusStyle = (props) => {

    return {
        fontSize: "13px",
        margin: "0",
        color: `${props.theme.color.red}`,
    }
}

export const optionsStyle = () => {

    return {
        height: "calc(100% - 145px)",
        overflowY: "auto",
        padding: "0 16px",
        margin: "25px 0 0 20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "left",
        alignItems: "flex-start",
        color: "white",
    }
}

export const optionTitleStyle = (props) => {

    return {
        margin: "5px 0",
        width: "100%",
        fontSize: "12px",
        color: "wheat",
        textTransform: "uppercase",
    }
}

export const optionListStyle = () => {

    return {
        padding: "10px 0",
        width: "100%",
        fontSize: "15px"
    }
}

export const optionStyle = (img) => {

    return {
        width: "100%",
        padding: "16px 16px 16px 36px",
        fontWeight: 600,
        background: `url(${img}) left center no-repeat`,
    }
}

export const optionNameStyle = () => {

    return {
        width: "100%",
    }
}