import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule, FormlyFieldConfig } from '@ngx-formly/core'
import { FormlyMaterialModule } from '@ngx-formly/material';

import { AppComponent } from './app.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';

export function validateRequired(err: any, field: FormlyFieldConfig): string {
	return `This field is required.`
}

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    FormlyModule.forRoot({
			validationMessages: [
				{ name: 'required', message: validateRequired },
			],
		}),
    FormlyMaterialModule,
  ],
  declarations: [
    AppComponent,
    HeroFormComponent
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

function validationMessages(validationMessages: any, arg1: { name: string; message: (err: any, field: FormlyFieldConfig) => string; }[]): any[] | import("@angular/core").Type<any> | import("@angular/core").ModuleWithProviders<{}> {
  throw new Error('Function not implemented.');
}
