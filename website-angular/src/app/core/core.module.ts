import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero';
import { ServicesComponent } from './components/services/services';
import { Products } from './components/products/products';
import { Staff } from './components/staff/staff';
import { CoreRoutingModule } from './core-routing-module';
import { Appointments } from './components/appointments/appointments';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    ServicesComponent,
    Products,
    Staff,
    Appointments,
  ],
  imports: [CoreRoutingModule,CommonModule, RouterModule, FormsModule, ],
  exports: [HeaderComponent, FooterComponent],
})
export class CoreModule {}
