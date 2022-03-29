import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnDestroy } from '@angular/core';
import { fromEvent, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-scroll-to-top',
  templateUrl: './scroll-to-top.component.html',
  styleUrls: ['./scroll-to-top.component.scss'],
})
export class ScrollToTopComponent implements OnDestroy {
  destroy$ = new Subject<void>();
  windowScrolled = false;

  constructor(@Inject(DOCUMENT) private document: Document) {
    fromEvent(window, 'scroll', { capture: true })
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        var clientOptions = document.getElementById('client-options');

        this.windowScrolled =
          !!this.document.documentElement.scrollTop &&
          this.document.documentElement.scrollTop >
            clientOptions.offsetHeight / 2;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
