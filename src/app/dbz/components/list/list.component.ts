import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})

export class ListComponent {

  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10
  }]

  @Output()
  ondDelete: EventEmitter<string> = new EventEmitter();
  //onDeleteId = Index value : number

  onDeleteCharacter(id?: string): void {
    //TODO: Emitir el ID del personaje
    if (!id) return;
    this.ondDelete.emit(id);
    console.log({id});

  }
}
