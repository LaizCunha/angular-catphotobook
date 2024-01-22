import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-catphotobook',
  templateUrl: './catphotobook.component.html',
  styleUrls: ['./catphotobook.component.css']
})


export class CatphotobookComponent implements OnInit {

  public catName: string = 'Cheetos';

  @Input()
  public dirCatName: string = this.catName.toLowerCase();

  public indexPhoto: number = 1;

  public catBook: string = '';

  constructor() { }

  public backPhoto() {
    this.indexPhoto--;
    return this.catBook = `assets/imgs/cat-book/${this.dirCatName}/${this.indexPhoto}.jpg`;

  }

  public goPhoto() {
    this.indexPhoto++;
    return this.catBook = `assets/imgs/cat-book/${this.dirCatName}/${this.indexPhoto}.jpg`;
  }

  ngOnInit(): void {
    this.catBook =  `assets/imgs/cat-book/${this.dirCatName}/${this.indexPhoto}.jpg`;
    this.catName = this.dirCatName.toUpperCase();
  }



}




