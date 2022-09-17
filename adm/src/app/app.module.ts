import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CadastroOfertasComponent } from './pages/cadastro-ofertas/cadastro-ofertas.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatGridListModule } from '@angular/material/grid-list';
import { NossasOfertasComponent } from './pages/nossas-ofertas/nossas-ofertas.component';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { MatOptionModule } from '@angular/material/core';

import { MaxValueValidatorDirective, MinValueValidatorDirective, UniqueValidatorDirective } from './pages/cadastro-ofertas/cadastro-ofertas.directive';

@NgModule({
  declarations: [
    AppComponent,
    CadastroOfertasComponent,
    NossasOfertasComponent,

    MinValueValidatorDirective,
    MaxValueValidatorDirective,
    UniqueValidatorDirective
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatGridListModule,
    MatButtonModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
