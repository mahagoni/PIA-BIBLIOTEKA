import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prijava',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  ngOnInit(): void {
  }

  korisnicko_ime: string = "";
  lozinka: string = "";
  poruka: string = "";

  prijavaNaSistem(){
          this.poruka = 'Korisnik je pokusao da se prijavi kao admin';
  }
}
