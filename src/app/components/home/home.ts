import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService, CvData } from '../../services/data';
import { HeroComponent } from '../hero/hero';
import { SkillsComponent } from '../skills/skills';
import { ExperienceComponent } from '../experience/experience';
import { EducationComponent } from '../education/education';
import { ContactComponent } from '../contact/contact';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [
        CommonModule,
        HeroComponent,
        SkillsComponent,
        ExperienceComponent,
        EducationComponent,
        ContactComponent
    ],
    templateUrl: './home.html',
})
export class HomeComponent implements OnInit {
    cvData: CvData | null = null;

    constructor(private dataService: DataService) { }

    ngOnInit() {
        this.dataService.getData().subscribe(data => {
            this.cvData = data;
        });
    }
}
