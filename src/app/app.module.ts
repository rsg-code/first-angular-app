import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { App } from './app';
import { User } from './user/user';
import { HeaderComponent } from './header/header';
import { SharedModule } from './shared/shared.module';
import { TaskModule } from './tasks/tasks.module';

@NgModule({
  declarations: [App, HeaderComponent, User],
  bootstrap: [App],
  imports: [BrowserModule, FormsModule, SharedModule, TaskModule],
})
export class AppModule {}
