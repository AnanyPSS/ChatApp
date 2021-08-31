export const listItem = (props) => {

    const selectedState = (props.selectedConversation && props.selectedConversation.conversationId === props.conversation.conversationId) ? {
        backgroundColor: `#62676A`,
        borderRadius: "8px",
    } : {};

    return {
        display: "flex",
        flexDirection: "row",
        justifyContent: "left",
        alignItems: "center",
        cursor: "pointer",
        width: "100%",
        padding: "8px 16px",
        position: "relative",
        ...selectedState,
        '&:hover': {
            backgroundColor: "#42464a",
            borderRadius: "8px",
        },
    }
}

export const itemThumbnailStyle = () => {

    return {
        display: "inline-block",
        width: "45px",
        height: "45px",
        flexShrink: "0",
    }
}

export const itemDetailStyle = () => {

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

export const itemRowStyle = () => {

    return {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline",
    }
}

export const itemNameStyle = () => {

    return {
        fontSize: "16px",
        color: "white",
        fontWeight: "600",
        display: "block",
        width: "calc(100% - 70px)",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
    }
}

export const itemLastMsgStyle = (props) => {

    return {
        marginTop: "8px",
        fontSize: "13px",
        width: "calc(100% - 50px)",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        lineHeight: "20px",
        color: "wheat",
    }
}

export const itemLastMsgTimeStyle = (props) => {

    return {
        fontSize: "11px",
        width: "70px",
        textAlign: "right",
        color: "wheat",
        marginTop: "10px",
    }
}