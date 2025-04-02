import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Notes } from 'src/app/models/notes';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private http:HttpClient) { }

  CreateNotes(data:Notes){
    const url = "http://localhost:8000/notes"
   return this.http.post(url,data)
  }
  getNotes(){
    const url = "http://localhost:8000/notes"
    return this.http.get(url)
  }
  DeleteNotes(id:number | undefined){
    const url = `http://localhost:8000/notes/:${id}`
    return this.http.delete(url)
  }
  updateNotes(id:number | undefined,data:Notes){
    const url = `http://localhost:8000/notes/:${id}`
    return this.http.put(url,data)
  }
}
