import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ClientOptionsComponent } from './client-options/client-options.component';
import { GenderFilterComponent } from './components/gender-filter/gender-filter.component';
import { NameOrEmailFilterComponent } from './components/name-or-email-filter/name-or-email-filter.component';
import { SortToggleComponent } from './components/sort-toggle/sort-toggle.component';

@NgModule({
  declarations: [
    ClientOptionsComponent,
    GenderFilterComponent,
    SortToggleComponent,
    NameOrEmailFilterComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonToggleModule,
  ],
  exports: [ClientOptionsComponent],
})
export class ClientOptionsModule {}
