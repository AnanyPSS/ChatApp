export const detailStyle = (context) => {

    return {
        height: "100%",
        position: "relative",
        boxSizing: "border-box",
        fontFamily: `${context.theme.fontFamily}`,
        "*": {
            boxSizing: "border-box",
            fontFamily: `${context.theme.fontFamily}`,
        }
    }
}

export const headerStyle = (context) => {

    return {
        padding: "16px",
        position: "relative",
        borderBottom: `1px solid ${context.theme.borderColor.primary}`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80px",
    }
}

export const headerCloseStyle = (img, context) => {

    const mq = [...context.theme.breakPoints];

    return {
        cursor: "pointer",
        display: "none",
        mask: `url(${img}) center center no-repeat`,
        backgroundColor: `${context.theme.primaryColor}`,
        width: "24px",
        height: "24px",
        [`@media ${mq[1]}, ${mq[2]}, ${mq[3]}, , ${mq[4]}`]: {
            display: "block"
        },
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

export const detailPaneStyle = () => {

    return {
        margin: "0",
        padding: "16px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "flex-start",
        height: "calc(100% - 70px)",
        backgroundColor: "#62676A",
        color: "white",
    }
}

export const sectionStyle = () => {

    return {
        width: "100%",
    }
}

export const sectionHeaderStyle = (context) => {

    return {
        margin: "0",
        marginBottom: "20px",
        width: "100%",
        fontSize: "14px",
        lineHeight: "20px",
        color: "wheat",
        textTransform: "uppercase",
    }
}

export const sectionContentStyle = () => {

    return {
        width: "100%",
        margin: "6px 0",
        '&:not(:last-of-type)': {
            marginBottom: "16px",
        }
    }
}

export const contentItemStyle = () => {

    return {
        position: "relative",
        display: "flex",
        clear: "both",
        width: "100%",
        padding:" 6px 0",
        '&:first-of-type': {
            paddingTop: "0",
        },
        '&:last-of-type': {
            paddingBottom: "0",
        }
    }
}

export const itemLinkStyle = (context, deleteLink) => {

    const deleteCss = (deleteLink) ? {
        color: `${context.theme.color.red}`,
    } : {};

    return {
        fontSize: "15px",
        lineHeight: "20px",
        display: "inline-block",
        cursor: "pointer",
        color: `${context.theme.color.blue}`,
        fontWeight: "600",
        ...deleteCss
    }
}
