import {PostsComponent} from './PostsComponent';
import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import {HttpClient} from '@angular/common/http';
import {of} from 'rxjs';

class Posts {
  id!: number;
  title!: string;
}

describe('PostsComponent', () => {


  let component: PostsComponent;
  let fixture: ComponentFixture<PostsComponent>;
  let compiledComponent: HTMLElement;

  let mockHttpClient: {
    get: jest.Mock;
  };

  mockHttpClient = {
    get: jest.fn().mockReturnValue(of([]))
  }

  beforeEach((async () => {
    await TestBed.configureTestingModule({
      declarations: [], imports: [PostsComponent], providers: [{provide: HttpClient, useValue: mockHttpClient},]
    }).compileComponents();

    fixture = TestBed.createComponent(PostsComponent);
    component = fixture.componentInstance;
    compiledComponent = fixture.nativeElement;
  }))

  afterEach(() => {
    jest.clearAllMocks();
    fixture.destroy();
  });


  it('should be created', () => {
    expect(component).toBeTruthy();
  })

  it('should display posts when the call for fetching posts is successful', fakeAsync(() => {

    let posts: Posts[] = [{
      id: 1, title: 'Michael',
    }];

    mockHttpClient.get.mockReturnValue(of(posts));

    fixture.detectChanges();

    tick();

    fixture.detectChanges();

    const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

    expect(mockHttpClient.get).toHaveBeenCalledWith(apiUrl);

    let actualPosts: Posts[] = [];
    component.posts$.subscribe(posts => {
      actualPosts = posts;
    })

    expect(actualPosts).toHaveLength(1);


  }))
})
