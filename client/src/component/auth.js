class Auth {
  constructor() {
    this.authenticated = false;
  }

  login(cb) {
    this.authenticated = true;
    cb();
  }

  logout(cb) {
    this.authenticated = false;
    cb();
  }

  isAuthenticated() {
    
    // setTimeout(() => {
    //   this.authenticated = false;
    // }, 3600000);
    return this.authenticated;
  }
}

export default new Auth();
