import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-catphotobook',
  templateUrl: './catphotobook.component.html',
  styleUrls: ['./catphotobook.component.css']
})


export class CatphotobookComponent implements OnInit {

  @Input()
  public catName: string = 'cheetos';

  public indexPhoto: number = 1;

  public catBook: string = '';

  constructor() { }

  public backPhoto() {
    this.indexPhoto--;
    return this.catBook = `assets/imgs/cat-book/${this.catName}/${this.indexPhoto}.jpg`;

  }

  public goPhoto() {
    this.indexPhoto++;
    return this.catBook = `assets/imgs/cat-book/${this.catName}/${this.indexPhoto}.jpg`;
  }

  ngOnInit(): void {
    this.catBook =  `assets/imgs/cat-book/${this.catName}/${this.indexPhoto}.jpg`;
  }



}




