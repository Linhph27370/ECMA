import { render } from "../lib"
import HomePage from "./pages/home"


// Khai bao DOM
var app = document.querySelector("#app")

// app.innerHTML = ProductPage()
render(HomePage(), app)