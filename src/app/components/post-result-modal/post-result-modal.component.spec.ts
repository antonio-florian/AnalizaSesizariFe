import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostResultModalComponent } from './post-result-modal.component';

describe('PostResultModalComponent', () => {
  let component: PostResultModalComponent;
  let fixture: ComponentFixture<PostResultModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostResultModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostResultModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
