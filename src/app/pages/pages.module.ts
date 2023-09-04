import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PostComponent } from './post/post.component';
import { AboutComponent } from './about/about.component';
import { BigCardComponent } from './home/big-card/big-card.component';
import { HttpClientModule } from '@angular/common/http';
import { CardsComponent } from './home/cards/cards.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HomeComponent,
    NotFoundComponent,
    PostComponent,
    AboutComponent,
    BigCardComponent,
    CardsComponent,
  ],
  imports: [CommonModule, HttpClientModule, RouterModule],
})
export class PagesModule {}
