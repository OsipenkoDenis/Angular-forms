import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
        name: new FormControl("", Validators.required),
        alterEgo: new FormControl(""),
        heroPower: new FormControl("Really Smart", Validators.required)
      })
  }

  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];
  model = new Hero(18, '', this.powers[0], '');

  submitted = false;

  onSubmit() { 
    this.submitted = true; }

  newHero() {
    this.model = new Hero(42, '', '');
  }
}
