import { TestBed } from '@angular/core/testing';

import { TournamentRouteActivatorService } from './tournament-route-activator.service';

describe('TournamentRouteActivatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TournamentRouteActivatorService = TestBed.get(TournamentRouteActivatorService);
    expect(service).toBeTruthy();
  });
});
