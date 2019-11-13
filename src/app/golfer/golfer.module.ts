import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { golferRoutes } from './golfer.routes';



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(golferRoutes)
  ],
  declarations: [
    ProfileComponent
  ],
  providers: [

  ]

})
export class GolferModule { }
