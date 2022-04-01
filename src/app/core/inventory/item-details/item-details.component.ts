import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item, UnitType } from '../../model/inventory-data.model';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
})
export class ItemDetailsComponent implements OnInit {
  @Input() item!: Item;
  @Output() onDeleteClicked = new EventEmitter<void>();
  @Output() onSaveClicked = new EventEmitter<void>();
  editMode: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  isNonNumberUnitType(): boolean {
    if (this.item) {
      return this.item.quantityInfo.type != UnitType.NUMBER;
    }
    return false;
  }

  getDimensions(): String {
    if (this.item) {
      const dimensions = this.item.quantityInfo.dimensions;
      if (dimensions) {
        return JSON.stringify(dimensions);
      }
    }
    return '';
  }

  onSave() {
    this.onSaveClicked.emit();
  }

  onDelete() {
    this.onDeleteClicked.emit();
  }
}
