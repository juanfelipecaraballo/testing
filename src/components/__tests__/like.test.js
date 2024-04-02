import { render, screen, fireEvent } from "@testing-library/react"
import Like from "../like"

describe("like", function(){
    it("Se espera que el texto inicial sea Likes: 0" ,function(){
        render(<Like/>);
        expect(screen.getByText("Likes: 0")).toBeInTheDocument();
    })

    it("Se espera que el número de likes incremente en uno al hacer click", function (){
        render(<Like/>);
        fireEvent.click(screen.getByTestId("like-increment"));
        expect(screen.getByText("Likes: 1")).toBeInTheDocument();
    })

    it("Se espera que el número de likes disminuya en uno al hacer click", function (){
        render(<Like/>);
        fireEvent.click(screen.getByTestId("like-decrement"));
        expect(screen.getByText("Likes: -1")).toBeInTheDocument();
    })

})