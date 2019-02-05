import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input()
  ShowSideBar:boolean;

  @Output()
  ShowSideBarchange:EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }

  AfficheSideBar(){
        this.ShowSideBar= !this.ShowSideBar;
        this.ShowSideBarchange.emit(this.ShowSideBar);
  }

}
