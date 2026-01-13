import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DataService, CvData } from './services/data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class AppComponent implements OnInit {
  cvData: CvData | null = null;
  currentYear = new Date().getFullYear();
  title = '<AA.>';

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getData().subscribe(data => {
      this.cvData = data;
    });
  }
}
