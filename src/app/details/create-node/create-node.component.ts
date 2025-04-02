import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { NotesService } from 'src/app/core/services/notes.service';

import { Notes } from 'src/app/models/notes';

@Component({
  selector: 'app-create-node',
  templateUrl: './create-node.component.html',
  styleUrls: ['./create-node.component.scss']
})
export class CreateNodeComponent {
   constructor(
    private FB:FormBuilder,
   private tostar:ToastrService
  ){}
   Notes:FormGroup = this.FB.group({
    title:["",[Validators.required]],
    content:["",[Validators.required]],
    category:["",[Validators.required]],
    priority:["",[Validators.required]],
    tags:["",[Validators.required]],
   })
   get title() {
    return this.Notes.controls["title"];
  }
  get content() {
    return this.Notes.controls["content"];
  }
  get category() {
    return this.Notes.controls["category"];
  }
  get priority() {
    return this.Notes.controls["priority"];
  }
  get tags() {
    return this.Notes.controls["tags"];
  }

  @Input() isPopupOpen = false;
  @Output() closePopup = new EventEmitter();
  @Output()
  EmitNote: EventEmitter<Notes> = new EventEmitter<Notes>();
  onClose() {
    this.closePopup.emit();
  }

  onSumbit(){
    this.onClose();
    this.EmitNote.emit(this.Notes.value)
  }
  }

