import {AfterViewInit, ChangeDetectionStrategy, Component, OnInit, signal, ViewChild} from '@angular/core';
import {MatButton} from '@angular/material/button';
import {AsyncPipe, NgOptimizedImage} from '@angular/common';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {
  MatCell, MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef,
  MatTable,
  MatTableDataSource
} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-posts',
  templateUrl: 'PostsComponent.html',
  styleUrl: 'PostsComponent.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MatButton,
    NgOptimizedImage,
    AsyncPipe,
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    MatPaginator,
    MatHeaderRow,
    MatRow,
    MatHeaderCellDef,
    MatCellDef,
    MatRowDef,
    MatHeaderRowDef,
  ]
})
export class PostsComponent implements OnInit, AfterViewInit {


  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;


  protected readonly title = signal('jest');

  public posts$!: Observable<any>;

  constructor(private router: Router,
              private httpService: HttpClient) {
  }

  ngOnInit(): void {
        this.fetchAllPosts();
    }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  goToPostsList() {
    this.router.navigateByUrl('/post-list').then();
  }

  private fetchAllPosts() {
    this.posts$ = this.httpService.get('https://jsonplaceholder.typicode.com/posts')
      .pipe(
        map((response: any) => response.slice(0, 5))
      );
  }
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
  {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
  {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
  {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
  {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
  {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
  {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
  {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
  {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
  {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
];
