export class User {
  constructor(
    public email: string,
    public id: string,
    private _token: string,
    private _tokenExpirationDate: Date
  ) {}

  public get token() {
    // Ensure you have a token && the expiration date is not in the past
    if (!this._tokenExpirationDate || new Date() > this._tokenExpirationDate)
      return null;

    // Send the user's token
    return this._token;
  }
}
