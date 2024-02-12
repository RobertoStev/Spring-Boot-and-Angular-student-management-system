import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private _url = "http://localhost:8080/api/students";

  constructor(private http: HttpClient) { }

  public getStudentList(): Observable<Student[]>{
    return this.http.get<Student[]>(`${this._url}`);
  }

  public createStudent(student: Student): Observable<Student>{
    return this.http.post<Student>(`${this._url}`,  student);
  }

  public getStudentById(id: number): Observable<Student>{
    return this.http.get<Student>(`${this._url}/${id}`);
  }

  public updateStudent(id: number, student: Student): Observable<Student>{
    return this.http.put<Student>(`${this._url}/${id}`, student);
  }

  public deleteStudent(id:number): Observable<void>{
    return this.http.delete<void>(`${this._url}/${id}`);
  }
}
