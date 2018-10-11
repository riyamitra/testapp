import { TestBed, inject } from '@angular/core/testing';

import { TreeviewcomponnetService } from './treeviewcomponnet.service';

describe('TreeviewcomponnetService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TreeviewcomponnetService]
    });
  });

  it('should be created', inject([TreeviewcomponnetService], (service: TreeviewcomponnetService) => {
    expect(service).toBeTruthy();
  }));
});
