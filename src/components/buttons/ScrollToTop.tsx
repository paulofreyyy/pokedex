import { Fab, Tooltip, Zoom } from "@mui/material"
import { useEffect, useState } from "react"
import { IoIosArrowUp } from "react-icons/io"

export const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    };

    const handleScroll = () => {
        window.scrollY > 300 ? setIsVisible(true) : setIsVisible(false);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);

    return (
        <Zoom in={isVisible}>
            <Tooltip
                title='Voltar ao início'
                arrow
                slots={{ transition: Zoom }}
                placement="left"
            >
                <Fab
                    onClick={scrollToTop}
                    sx={{
                        position: "fixed",
                        bottom: 16,
                        right: 16,
                        zIndex: 1000,
                        backgroundColor: "#E3350D",
                        color: "#FFF",
                        ":hover": {
                            bgcolor: "#fa7050",
                        },
                    }}
                >
                    <IoIosArrowUp size={25} />
                </Fab>
            </Tooltip>
        </Zoom>
    )
}