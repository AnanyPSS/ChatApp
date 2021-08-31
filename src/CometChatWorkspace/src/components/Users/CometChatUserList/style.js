export const contactWrapperStyle = (props, theme) => {

    const borderStyle = (props._parent === "") ? {
        backgroundColor: `#62676A`,
        borderRadius: "8px",
    } : {};


    return {
        display: "flex",
        flexDirection: "column",
        height: "100%",
        boxSizing: "border-box",
        ...borderStyle,
        "*": {
            boxSizing: "border-box",
            "::-webkit-scrollbar": {
                width: "8px",
                height: "4px",
            },
            "::-webkit-scrollbar-track": {
                background: "#373838"
            },
            "::-webkit-scrollbar-thumb": {
                background: "#42464a",
                "&:hover": {
                    background: "#62676A"
                }
            }
        }
    }
}

export const contactHeaderStyle = theme => {

	return {
		padding: "16px",
		position: "relative",
		display: "flex",
		alignItems: "center",
		borderBottom: `1px solid ${theme.borderColor.primary}`,
		height: "80px",
        color: "white",
	};
};

export const contactHeaderCloseStyle = (img, theme) => {

	const mq = [...theme.breakPoints];

	return {
		cursor: "pointer",
		display: "none",
		mask: `url(${img}) left center no-repeat`,
		backgroundColor: `${theme.secondaryTextColor}`,
		height: "24px",
		width: "33%",
		[`@media ${mq[1]}, ${mq[2]}`]: {
			display: "block!important",
		},
	};
};

export const contactHeaderTitleStyle = (props) => {

    const alignment = (props.hasOwnProperty("enableCloseMenu") && props.enableCloseMenu.length > 0) ? {
        width: "33%",
        textAlign: "center",
    } : {};

    return {
        margin: "0",
        fontWeight: "700",
        display: "inline-block",
        width: "100%",
        textAlign: "center",
        fontSize: "40px",
        ...alignment,
        "&[dir=rtl]": {
            textAlign: "right",
        }
    }
}

export const contactSearchStyle = () => {
    
    return {
        margin: "16px",
        position: "relative",
        borderRadius: "8px",
        color: "white",
		boxShadow: "rgba(20, 20, 20, 0.04) 0 0 0 1px inset",
        backgroundColor: "#62676A",
        height: "35px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }
}

export const contactSearchButtonStyle = (img, theme) => {

	return {
		width: "30px",
		height: "100%",
		padding: "8px 0 8px 8px",
		cursor: "default",
		mask: `url(${img}) 10px center no-repeat`,
		backgroundColor: `#ffffff !important`,
	};
};

export const contactSearchInputStyle = () => {

    return {
        width: "calc(100% - 30px)",
        padding: "8px",
        fontSize: "15px",
        outline: "none",
        border: "none",
        height: "100%",
        backgroundColor: "transparent",
        color: "white",
    }
}

export const contactMsgStyle = () => {

    return {
        overflow: "hidden",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: "50%",
    }
}

export const contactMsgTxtStyle = theme => {

	return {
		margin: "0",
		minHeight: "36px",
		color: `${theme.color.secondary}`,
		fontSize: "20px!important",
		fontWeight: "600",
		lineHeight: "300px",
		wordWrap: "break-word",
		padding: "0 16px",
	};
};

export const contactListStyle = () => {
    
    return {
        height: "calc(100% - 125px)",
        overflowY: "auto",
        margin: "20px",
        marginTop: "10px",
        padding: "0"
    }
}

export const contactAlphabetStyle = () => {
    
    return {
        padding: "15px 0 15px 15",
        margin: "5px 0",
        marginLeft: "10px",
        width: "100%",
        fontSize: "25px",
        fontWeight: "bold",
        color: "wheat",
    }
}