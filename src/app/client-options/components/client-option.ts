import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ClientOptionsService } from '../services/client-options.service';
import { Predicate } from '../types/types';

@Component({
  template: '',
})
export abstract class ClientOption implements OnInit {
  abstract get predicate(): Observable<Predicate>;

  constructor(private clientOptionsService: ClientOptionsService) {}

  ngOnInit(): void {
    this.clientOptionsService.addPredicate(this.predicate);
  }
}
