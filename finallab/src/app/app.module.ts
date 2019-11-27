import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import 'hammerjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from'@angular/forms';
import { MatButtonModule, MatAutocompleteModule, MatInputModule, MatCheckbox, MatCheckboxModule, MatRadioButton, MatRadioModule, MatDatepickerModule, MatNativeDateModule, MatFormField, MatFormFieldModule, MatSelectModule, MatSliderModule, MatSlideToggleModule } from '@angular/material';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { FormfieldComponent } from './components/formfield/formfield.component';
import { InputComponent } from './components/input/input.component';
import { RadiobuttonComponent } from './components/radiobutton/radiobutton.component';
import { SelectComponent } from './components/select/select.component';
import { SliderComponent } from './components/slider/slider.component';
import { SlidetoggleComponent } from './components/slidetoggle/slidetoggle.component';
import { PrimeroComponent } from './primero/primero.component';
import { SegundoComponent } from './segundo/segundo.component';
import { TerceroComponent } from './tercero/tercero.component';
import { CuartoComponent } from './cuarto/cuarto.component';
import { SolicitudComponent } from './solicitud/solicitud.component';
import { LoginComponent} from './login/login.component';
import { ButtonComponent } from './components/button/button.component';
import { FormfieldloginComponent } from './login/formfieldlogin/formfieldlogin.component';
import { ButtonloginComponent } from './login/buttonlogin/buttonlogin.component';
import { AuxiliarComponent } from './Users/auxiliar/auxiliar.component';
import { AlumnoComponent } from './Users/alumno/alumno.component';
import { DocenteComponent } from './Users/docente/docente.component';
import { ServiceService } from './Service/service.service';

const MaterialComponents =[
  MatButtonModule,
  MatDatepickerModule, 
  MatNativeDateModule
];

@NgModule({
  declarations: [
    AppComponent,
    AutocompleteComponent,
    CheckboxComponent,
    DatepickerComponent,
    FormfieldComponent,
    InputComponent,
    RadiobuttonComponent,
    SelectComponent,
    SliderComponent,
    SlidetoggleComponent,
    PrimeroComponent,
    SegundoComponent,
    TerceroComponent,
    CuartoComponent,
    SolicitudComponent,
    LoginComponent,
    ButtonComponent,
    FormfieldloginComponent,
    ButtonloginComponent,
    AuxiliarComponent,
    AlumnoComponent,
    DocenteComponent
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatInputModule,
    MatCheckboxModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule, 
    MatSliderModule,
    MatSlideToggleModule,
    MatNativeDateModule,
    MaterialComponents,


  ],

  exports : [MaterialComponents],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
