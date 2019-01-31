import { TestBed } from '@angular/core/testing';

import { ProfileJiraService } from './profile-jira.service';

describe('ProfileJiraService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProfileJiraService = TestBed.get(ProfileJiraService);
    expect(service).toBeTruthy();
  });
});
