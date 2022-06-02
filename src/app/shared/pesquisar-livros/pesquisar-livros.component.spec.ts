import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PesquisarLivrosComponent } from './pesquisar-livros.component';

describe('PesquisarLivrosComponent', () => {
  let component: PesquisarLivrosComponent;
  let fixture: ComponentFixture<PesquisarLivrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PesquisarLivrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PesquisarLivrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
