import { Component, OnInit, ViewChild } from '@angular/core';
import { NotesService } from '../core/services/notes.service';
import { map } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { CreateNodeComponent } from './create-node/create-node.component';



@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  constructor(private notes:NotesService,private tostar:ToastrService){}
  isPopupOpenCreate = false;
  isPopupOpenDelete = false;
  allNotes = [];
  noteToDeleteId: number;
  @ViewChild(CreateNodeComponent) childComp: CreateNodeComponent;
  openPopup() {
    this.isPopupOpenCreate = true;
  }
  closePopup() {
    this.isPopupOpenCreate = false;
  }
  onDelete(id:number){
    this.noteToDeleteId = id;

    this.isPopupOpenDelete = true;
  }
  closepopup1(){
    this.isPopupOpenDelete =false;
  }
  createNotes(){
    if (this.childComp.Notes.invalid) {
      this.tostar.warning("Enter Your Correct Data please Don't play For Disabled Input");
      return;
    }
    this.notes.CreateNotes(this.childComp.Notes.value).subscribe({
      next:()=>{
        this.tostar.success("This Note is Created");
        this.FetchNotes();
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
  ngOnInit() {
    setTimeout(() => {
      this.FetchNotes();
    });
  }
  FetchNotes(){
    this.notes.getNotes().pipe(map((res)=>{
       let Notes = [];
       for(let key in res){
        if(res.hasOwnProperty(key)){
          Notes.push({...res[key]})
        }
       }
       return Notes
    })).subscribe(res=>{
          this.allNotes = res ;
        })
}
onConfirmDelete(){
  this.notes.DeleteNotes(this.noteToDeleteId).subscribe({
    next:(res:any)=>{
     this.tostar.success("Note Deleted Successfully");
     this.allNotes = this.allNotes.filter(note => note.id !== this.noteToDeleteId);
      this.FetchNotes()
    },
    error:(err)=>{
      console.log(err);
      if(err.status === 404 ){
         this.tostar.error("Not Found")
      }
    }
  })
}
// updateNotes(){
//   if (this.childComp.Notes.invalid) {
//     this.tostar.warning("Enter Your Correct Data please Don't play For Disabled Input");
//     return;
//   }
//   this.notes.CreateNotes(this.childComp.Notes.value).subscribe({
//     next:()=>{
//       this.tostar.success("This Note is Created");
//       this.FetchNotes();
//     },
//     error: (err) => {
//       console.log(err);
//     }
//   })
// }
}
