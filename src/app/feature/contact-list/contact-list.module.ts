import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ContactListRoutingModule } from './contact-list-routing.module';

import { FilterPipe } from '../pipes/filter.pipe';
// Material Modules
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';

// Components
import { ContactListComponent } from './contact-list.component';

@NgModule({
  declarations: [ContactListComponent, FilterPipe],
  imports: [
    SharedModule,
    ContactListRoutingModule,
    MatExpansionModule,
    MatTableModule,
  ],
  exports: [],
})
export class ContactListModule {}
