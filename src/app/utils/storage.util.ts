export class StorageUtil {
  public static setToken(token): void {
    localStorage.setItem('token', token);
  }

  public static getToken(): string {
    return localStorage.getItem('token');
  }

  public static cleanToken(): void {
    localStorage.removeItem('token');
  }

  public static setEmail(email: string): void {
    localStorage.setItem('email', email);
  }

  public static getEmail(): string {
    return localStorage.getItem('email');
  }

}
