import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.scss'
})
export class SkillsComponent {
  @Input() data: any;

  getCategories(): string[] {
    return this.data ? Object.keys(this.data) : [];
  }

  formatCategory(cat: string): string {
    return cat.charAt(0).toUpperCase() + cat.slice(1);
  }
}
