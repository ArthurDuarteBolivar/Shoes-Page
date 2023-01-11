import { Component } from '@angular/core';
import {Location} from '@angular/common'

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent {
  numberOfSize: number = 3.5
  constructor(private location: Location) { }

  ComeBack(): void{
    this.location.back();
  }
  expansion(value: number){
    this.numberOfSize = value
  }
}
