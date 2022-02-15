import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppwriteService } from './appwrite-service.service';

@NgModule({
  imports: [CommonModule],
  providers: [AppwriteService],
})
export class DataAccessAppwriteModule {}
