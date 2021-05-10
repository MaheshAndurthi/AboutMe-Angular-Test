import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../dataServices/data.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { RepositoryService } from '../repositories/repository.service';
import { FormsModule } from '@angular/forms';





@NgModule({
    imports: [CommonModule,HttpClientModule, HttpClientInMemoryWebApiModule.forRoot(DataService, { dataEncapsulation: false }), FormsModule,
      ],
    declarations: [],
    providers: [DataService, RepositoryService],
})
export class AboutMeModule { }
