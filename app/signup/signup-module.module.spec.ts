import { SignupModuleModule } from './signup-module.module';

describe('SignupModuleModule', () => {
  let signupModuleModule: SignupModuleModule;

  beforeEach(() => {
    signupModuleModule = new SignupModuleModule();
  });

  it('should create an instance', () => {
    expect(signupModuleModule).toBeTruthy();
  });
});
