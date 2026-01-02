import { Component } from '@angular/core';
import { NavBar } from "../../component/nav-bar/nav-bar";
import { Footer } from "../../component/footer/footer";

@Component({
  selector: 'app-home',
  imports: [NavBar, Footer],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
