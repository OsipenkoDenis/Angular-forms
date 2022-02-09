import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Hero } from '../hero'; 

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {
  form: FormGroup | any;
  
  ngOnInit() {
      this.form = new FormGroup({
        name: new FormControl(""),
        alterEgo: new FormControl(""),
        heroPower: new FormControl("Really Smart")
      })
  }

  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];
  model = new Hero(18, '', this.powers[0], '');

  submitted = false;

  onSubmit() { 
    console.log(this.form);
    this.submitted = true; }

  newHero() {
    this.model = new Hero(42, '', '');
  }
}
