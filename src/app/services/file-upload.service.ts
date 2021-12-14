import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

   uploadUrl = `${environment.api_upload}`
   delteFileUrl =  `${environment.api_delete_file}`

  constructor(private http: HttpClient) { }

  uploadImage(file : File, carId) : Observable<any> {
    let formData : any = new FormData();
    formData.append("files", file);
    formData.append("CarId", carId);

    return this.http.post(this.uploadUrl, formData, {
      reportProgress : true,
      observe : 'events'

    });
  }

  deleteFile(fileName : string): Observable<any>{
    let formData : any = new FormData();
    formData.append("fileName", fileName);

    return this.http.post(this.delteFileUrl,formData);
  }
}
