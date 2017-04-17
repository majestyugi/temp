import { NgModule }      from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { ImageModule } from './image/image.module';
@NgModule({
  imports: [ 
    BrowserModule, 
    HttpModule,
    ImageModule
  ],
  declarations: [ 
    AppComponent 
  ],
  bootstrap: [ 
    AppComponent 
  ]
})
export class AppModule { }
