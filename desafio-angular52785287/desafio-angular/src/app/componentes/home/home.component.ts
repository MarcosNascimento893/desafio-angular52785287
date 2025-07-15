import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


  @ViewChild('sidebar') sidebar!: ElementRef<HTMLDivElement>;
  @ViewChild('sidebarOverlay') overlay!: ElementRef<HTMLDivElement>;

  toggleSidebar(): void {
    const sidebarEl = this.sidebar.nativeElement;
    const overlayEl = this.overlay.nativeElement;

    const isActive = sidebarEl.classList.toggle('active');
    overlayEl.style.display = isActive ? 'block' : 'none';

    document.body.classList.toggle('offcanvas-open', isActive);
  }

  closeSidebar(): void {
    this.sidebar.nativeElement.classList.remove('active');
    this.overlay.nativeElement.style.display = 'none';
    document.body.classList.remove('offcanvas-open');
  }
}
