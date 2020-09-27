import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FormControl } from '@angular/forms';

import { AppComponent } from './app.component';
import { TetiereComponent } from './tetiere/tetiere.component';
import { FooterComponent } from './footer/footer.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { ClientService } from './client.service';
import { RouterModule, Routes } from '@angular/router';
import { ClientListComponent } from './client-list/client-list.component';
import { PhonePipe } from './phone.pipe';
import { TestStringDirective } from './test-string.directive';

const appRoutes: Routes = [
  {path: 'clients', component: ClientListComponent},
  {path: 'formulaire', component: FormulaireComponent},
  {path: 'tetiere', component: TetiereComponent},
  {path: 'footer', component: FooterComponent},
  {path: '', component: FormulaireComponent}

];

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(appRoutes), ReactiveFormsModule ],
  declarations: [ AppComponent, TetiereComponent, FooterComponent, FormulaireComponent, ClientListComponent, PhonePipe, TestStringDirective],
  bootstrap:    [ AppComponent ],
  providers: [ClientService]
})
export class AppModule { }
