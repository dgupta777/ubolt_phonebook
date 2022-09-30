import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ContactFormRoutingModule } from './contact-form-routing.module';

// Componets
import { ContactFormComponent } from './contact-form.component';

@NgModule({
  declarations: [ContactFormComponent],
  imports: [SharedModule, ContactFormRoutingModule],
  exports: [],
})
export class ContactFormModule {}
