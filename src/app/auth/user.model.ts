export class User {
  constructor(
    public email: string,
    public id: string,
    private _token: string,
    private _tokenExpirationDate: Date
  ) {}

  public get token() {
    // Ensure you have a token && the expiration date is not in the past
    // TODO

    // Send the user's token
    return this._token;
  }
}
