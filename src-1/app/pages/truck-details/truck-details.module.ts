import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TruckDetailsComponent } from './truck-details.component';

import { TruckPageRoutingModule } from './truck-details-routing.module';
import { getFullApi } from '../../services/getFullApi.service';
import { MainPipe } from 'src/app/pipes/telephone/telephone.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        IonicModule,
        TruckPageRoutingModule,
        MainPipe
    ],
    declarations: [TruckDetailsComponent],
    providers: [getFullApi],

})
export class TruckDetailsPageModule { }
