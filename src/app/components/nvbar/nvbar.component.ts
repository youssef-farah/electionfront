import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nvbar',
  templateUrl: './nvbar.component.html',
  styleUrl: './nvbar.component.css'
})
export class NvbarComponent {

  constructor(private router:Router){}

  logout(){
    localStorage.removeItem("userId")
    localStorage.removeItem("stateElectionUser")
    this.router.navigate(["/login"])
  }

}
