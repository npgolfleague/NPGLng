import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentThumbnailComponent } from './tournament-thumbnail.component';

describe('TournamentsThumbnailComponent', () => {
  let component: TournamentThumbnailComponent;
  let fixture: ComponentFixture<TournamentThumbnailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TournamentThumbnailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamentThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
