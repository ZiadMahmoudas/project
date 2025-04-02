import { Component, ElementRef, EventEmitter, Input, Output, Renderer2, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NotesService } from 'src/app/core/services/notes.service';
import { Notes } from 'src/app/models/notes';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent {
   constructor(
   ){}
   @Input() isPopupOpen1 = false;
   @Input() noteId: number;
   @Output()
     BTNDelted = new EventEmitter();
   @Output()
     EmitNote = new EventEmitter<number>();
   onClose() {
    this.BTNDelted.emit();
  }
  onConfirmDelete(){
        this.EmitNote.emit(this.noteId);
        this.onClose();
      }

}
