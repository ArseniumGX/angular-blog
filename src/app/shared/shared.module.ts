import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgIconsModule } from '@ng-icons/core';
import {
  bootstrapLinkedin,
  bootstrapGithub,
  bootstrapFacebook,
  bootstrapTwitter,
} from '@ng-icons/bootstrap-icons';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, ButtonComponent],
  imports: [
    CommonModule,
    RouterModule,
    NgIconsModule.withIcons({
      bootstrapLinkedin,
      bootstrapGithub,
      bootstrapFacebook,
      bootstrapTwitter,
    }),
  ],
  exports: [HeaderComponent, FooterComponent, ButtonComponent],
})
export class SharedModule {}
