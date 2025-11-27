import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { User } from './user';

describe('ListComponent tests', () => {
  let component: User;
  let fixture: ComponentFixture<User>;

  const userId = 1;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [User],
      providers: [
        provideRouter(
          [{ path: `list`, component: User }],
          withComponentInputBinding()
        ),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(User);
    component = fixture.componentInstance;
  });

  it('should when router query parameter is set', async () => {
    const harness = await RouterTestingHarness.create();
    const instance = await harness.navigateByUrl(`/user?id=${userId}`, User);

    expect(instance).toBeTruthy();
    expect(instance).toBeInstanceOf(User);
    harness.detectChanges();
  });
});
