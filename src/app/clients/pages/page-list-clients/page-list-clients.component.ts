import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/core/models/client';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-page-list-clients',
  templateUrl: './page-list-clients.component.html',
  styleUrls: ['./page-list-clients.component.scss'],
})
export class PageListClientsComponent implements OnInit {
  public title = 'List Client';
  public headers: string[];
  public collection!: Client[];
  constructor(private clientsService: ClientsService, private router: Router) {
    this.headers = ['Name', 'Total CA HT', 'Tva', 'Total TTC', 'State'];
    this.clientsService.collection.subscribe((data) => {
      this.collection = data;
    });
  }
  ngOnInit(): void {}
  public goToEdit(id: number): void {
    this.router.navigate(['clients', 'edit', id]);
  }
  public deleteItem(id: number): void {
    this.clientsService.delete(id).subscribe();
  }
}
