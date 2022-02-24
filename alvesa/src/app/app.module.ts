import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlvesaTitleComponent } from 'src/components/alvesa-title/alvesa-title.component';
import { AlvesaContentComponent } from 'src/components/alvesa-content/alvesa-content.component';
import { AlvesaFooterComponent } from 'src/components/alvesa-footer/alvesa-footer.component';
import { AlvesaContentIconComponent } from 'src/components/alvesa-content-icon/alvesa-content-icon.component';

@NgModule({
  declarations: [
    AppComponent,
    AlvesaTitleComponent,
    AlvesaContentComponent,
    AlvesaFooterComponent,
    AlvesaContentIconComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
