import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { boardService } from './board/board.service';
import { pieceService } from './board/piece/piece.service';
import { BoardComponent } from './board/board.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [boardService, pieceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
