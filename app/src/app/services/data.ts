import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

export interface CvData {
  basics: {
    name: string;
    email: string;
    phone: string;
    location: {
      city: string;
      country: string;
    };
    languages: string[];
  };
  skills: {
    tech: string[];
    tools: string[];
    languages: string[];
    integration: string[];
    other: string[];
  };
  experience: Array<{
    role: string;
    company: string;
    location: string;
    period: string;
    responsibilities: string[];
    achievements: string;
  }>;
  education: Array<{
    institution: string;
    degree: string;
    year: string;
  }>;
  certifications: Array<{
    name: string;
    institution: string;
    year: string;
    id: string;
  }>;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  data$: Observable<CvData> | null = null;
  private dataUrl = 'cv-data.json';

  constructor(private http: HttpClient) { }

  getData(): Observable<CvData> {
    if (!this.data$) {
      this.data$ = this.http.get<CvData>(this.dataUrl).pipe(
        shareReplay(1)
      );
    }
    return this.data$;
  }
}
