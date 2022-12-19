import { Component } from '@angular/core';
// import { Response } from '@angular/http';
import { DataStorageService } from '../shared/data-storage.service';
import { Response } from 'selenium-webdriver/http';
    
// , EventEmitter, Output
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  // styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private dataStorageService: DataStorageService) {}
  //  @Output() featureSelected = new EventEmitter<string>();
  // constructor() { }
   
  //  onSelect(feature: string) {
  //    this.featureSelected.emit(feature);
  //  }

  // ngOnInit() {
  // }
  onSaveData() {
  this.dataStorageService.storeRecipes()
  .subscribe(
    (response: Response) => {
    console.log(response);
    }
  );
  }

  onFetchData() {
    this.dataStorageService.getRecipes();
  }
}
