import buttonStyles from "@/styles/button.module.css";
import { MouseEventHandler } from "react";
export type NavBarButtonParams = { text: string, selected: boolean, onClick: MouseEventHandler<HTMLButtonElement> }



function NavBarButton({ text, selected, onClick }: NavBarButtonParams) {
    return (
        <button
            className={selected ? buttonStyles.filledButton : buttonStyles.outlinedOnHoverButton}
            onClick={onClick}>
            {text}
        </button>
    );
}

export default NavBarButton;
