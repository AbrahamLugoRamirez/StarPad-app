import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MajorPadsComponent } from './major-pads/major-pads.component';
import { MinorPadsComponent } from './minor-pads/minor-pads.component';
import { ExploreContainerComponent } from './explore-container/explore-container.component';

@NgModule({
  declarations: [AppComponent, MajorPadsComponent, MinorPadsComponent, ExploreContainerComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})


export class AppModule {}
