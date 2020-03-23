import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"]
})
export class ListComponent implements OnInit {
  public selectedProviders = [];
  public unselectedProviders = [
    {
      id: "1",
      name: "John",
      address: "123 Greenway Blvd",
      phone: "8991234321",
      isSelected: false
    },
    {
      id: "2",
      name: "Mary",
      address: "443 Windwhisper Road",
      phone: "2233211903",
      isSelected: false
    },
    {
      id: "3",
      name: "Jason",
      address: "9992 Pumpkin Hollow",
      phone: "4343219384",
      isSelected: false
    }
  ];

  constructor() {}
  onSelectClickMe(id: string) {
    let selected = this.unselectedProviders.filter(x => x.id === id)[0];

    this.selectedProviders.push(selected);
    selected.isSelected = true;
  }

  onUnSelectClickMe(id: string) {
    let selected = this.unselectedProviders.filter(x => x.id === id)[0];
    this.selectedProviders = this.selectedProviders.filter(x => x.id !== id);

    selected.isSelected = false;
  }
  ngOnInit() {}
}
