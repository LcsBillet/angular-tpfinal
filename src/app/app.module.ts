import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FindPeopleComponent } from './FindPeople/find-people.component';
import { BarreHeaderComponent } from './BarreHeader/barre-header.component';
import { ErrorComponent } from './Error/error.component';
import { DataService } from './Services/data.service';

import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { PaginationComponent } from './pagination/pagination.component';
import { TempConverterPipe } from './temperature.pipe';

const appRoutes: Routes = [
  { path: 'recherche', component: FindPeopleComponent },
  { path: 'details/:id', component: DetailsComponent },
  { path: '**', redirectTo: "/recherche"}
];

@NgModule({
  declarations: [
    AppComponent,
    FindPeopleComponent,
    ErrorComponent,
    BarreHeaderComponent,
    DetailsComponent,
    PaginationComponent,
    TempConverterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
