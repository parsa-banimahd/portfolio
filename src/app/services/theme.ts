import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {

  private darkMode = signal<boolean>(true);

  toggleTheme() {
    this.darkMode.update(v => !v);
    this.applyTheme();
  }

  isDark() {
    return this.darkMode();
  }

  applyTheme() {
    const body = document.body;

    if (this.darkMode()) {
      body.classList.add('dark-theme');
      body.classList.remove('light-theme');
    } else {
      body.classList.add('light-theme');
      body.classList.remove('dark-theme');
    }
  }

}
