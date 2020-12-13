import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { MenuService } from '../service/menu.service';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
	private searchTerms = new Subject<string>();
	// var to take search matches from BE
	menu: any;

	constructor(
		private menuService: MenuService,
		private router: Router) { }
	ngOnInit(): void {
		this.menu = this.searchTerms.pipe(
			// attendre 300ms de pause entre chaque requête
			debounceTime(300),
			// ignorer la recherche en cours si c'est la même que la précédente
			distinctUntilChanged(),
			// on retourne la liste des résultats correpsondant aux termes de la recherche
			switchMap((term: string) => this.menuService.searchMenu(term))
		);
	}



	// Ajoute un terme de recherche dans le flux de l'Observable 'searchTerms'
	search(term: string): void {
		this.searchTerms.next(term);
	}
	gotoDetail(menu: any): void {
		let link = ['display-menu/', menu._id];
		this.router.navigate(link);
	}
}
