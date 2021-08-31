export const listItem = (props, context) => {

    const selectedState = (props.selectedUser && props.selectedUser.uid === props.user.uid) ? {
        backgroundColor: `#62676A`,
        borderRadius: "8px",
    } : {};

    return {
        display: "flex",
        flexDirection: "row",
        justifyContent: "left",
        alignItems: "center",
        color: "white",
        cursor: "pointer",
        width: "100%",
        marginRight: "10px",
        padding: "8px 16px",
        ...selectedState,
        '&:hover': {
            backgroundColor: `#42464a`,
            borderRadius: "8px",
        }
    }
}

export const itemThumbnailStyle = () => {
    
    return {
        display: "inline-block",
        width: "36px",
        height: "36px",
        flexShrink: "0"
    }
}

export const itemDetailStyle = () => {
    
    return {
        width: "calc(100% - 45px)",
        flexGrow: 1,
        paddingLeft: "16px",
        "&[dir=rtl]": {
            paddingRight: "16px",
            paddingLeft: "0",
        }
    }
}

export const itemNameStyle = () => { 
    
    return {
        fontSize: "16px",
        fontWeight: "600",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        width: "100%",
        margin: "5px 0 0 0" 
    }
};

export const itemDescStyle = context => {
	return {
		marginTop: "10px",
		borderBottom: `2px solid white`,
	};
};

