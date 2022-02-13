import { Component, OnInit } from '@angular/core';
import { FormGroup} from '@angular/forms';
import {FormlyFieldConfig} from '@ngx-formly/core';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {
  form = new FormGroup({});
  model = { name: '',
            alterEgo: '',
            heroPower: '', };
  fields: FormlyFieldConfig[] = [
    { 
      key: 'name',
      type: 'input',
      templateOptions: {
        label: 'Name',
        placeholder: '',
        required: true,
      }
    },
    {
      key: 'alterEgo',
      type: 'input',
      templateOptions: {
        label: 'Alter Ego',
        placeholder: '',
        required: false,
      }
    },
    {
      key: 'heroPower',
      type: 'select',
      templateOptions: {
        label: 'Hero Power',
        placeholder: '',
        description: 'Select the Hero Power',
        required: true,
        options: [
          { value: 'Really Smart', label: 'Really Smart'  },
          { value: 'Super Flexible', label: 'Super Flexible'  },
          { value: 'Super Hot', label: 'Super Hot'  },
          { value: 'Weather Changer', label: 'Weather Changer'  },
          
        ],
      },
    },
  ];
  ngOnInit() {
  }
   submitted = false;

  onSubmit() { 
    this.submitted = true; }
  }
