javascript: (() => {
    /* Script info vars */
    launcherVersion = "1.0";
    launcherChannel = "mainChannelVersion";

    userScript = "dGl0bGVQcm90ZWN0ID0gIkx5b2dVblZ1Y3lCM2FHVnVJR0VnWTJoaGJtZGxJR2x6SUdSbGRHVmpkR1ZrSUhSdklIUm9aU0IwYVhSc1pTQnZaaUIwYUdVZ2FIUnRiQ0J3WVdkbExDQmphR1ZqYTNNZ2FXWWdZU0IwYVhSc1pTQnBjeUJ6ZEc5eVpXUWdhVzRnYzJWemMybHZiaUJ6ZEc5eVlXZGxMaUJKWmlCcGRDQmpZVzRnWW1VZ1ptOTFibVFnYVc0Z2MyVnpjMmx2YmlCemRHOXlZV2RsTENCelpYUWdkR2hsSUhScGRHeGxJR0poWTJzZ2RHOGdjM1J2Y0NCMGFHVWdkMlZpYzJsMFpTQm1jbTl0SUcxdlpHbG1lV2x1WnlCcGRDNGdLaThOQ21Ob1lXNW5aVVJsZEdWamRDQTlJRzVsZHlCTmRYUmhkR2x2Yms5aWMyVnlkbVZ5S0daMWJtTjBhVzl1S0NrZ2V3MEtJQ0FnSUNBZ0lDQnBaaUFvZEhsd1pXOW1JSGRwYm1SdmR5NXpaWE56YVc5dVUzUnZjbUZuWlM1MFlXSk9ZVzFsSUNFOUlDSjFibVJsWm1sdVpXUWlLU0I3SUNBZ0lBMEtJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tHUnZZM1Z0Wlc1MExuUnBkR3hsSUNFOUlIZHBibVJ2ZHk1elpYTnphVzl1VTNSdmNtRm5aUzUwWVdKT1lXMWxLU0I3RFFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWkc5amRXMWxiblF1ZEdsMGJHVWdQU0IzYVc1a2IzY3VjMlZ6YzJsdmJsTjBiM0poWjJVdWRHRmlUbUZ0WlRzTkNpQWdJQ0FnSUNCOURRb2dJQ0FnZlEwS2ZTazdEUW9OQ2k4cUlGTjBZWEowSUhkaGRHTm9hVzVuSUdadmNpQmphR0Z1WjJWeklIUnZJSFJvWlNCMGFYUnNaU0FxTHcwS1kyaGhibWRsUkdWMFpXTjBMbTlpYzJWeWRtVW9aRzlqZFcxbGJuUXVjWFZsY25sVFpXeGxZM1J2Y2lnbmRHbDBiR1VuS1N3Z2UyRjBkSEpwWW5WMFpYTTZJSFJ5ZFdVc0lHTm9hV3hrVEdsemREb2dkSEoxWlN3Z2MzVmlkSEpsWlRvZ2RISjFaU3dnWTJoaGNtRmpkR1Z5UkdGMFlUb2dkSEoxWlgwcE93PT0iOw0KDQovKiBJbnNlcnQgdGhlIHRpdGxlIHByb3RlY3Qgc2NyaXB0IGlmIGl0IGRvZXMgbm90IGV4aXN0ICovDQppZiAoIWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZXByb3RlY3QnKSkgew0KICAgIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpOw0KICAgIHNjcmlwdC5zZXRBdHRyaWJ1dGUoJ2lkJywgInRpdGxlcHJvdGVjdCIpOw0KICAgIC8qIGRlY29kZSB0aGUgc2NyaXB0IGFuZCBzZXQgaW5uZXJIVE1MIHRvIGl0Ki8NCiAgICBzY3JpcHQuaW5uZXJIVE1MID0gYXRvYih0aXRsZVByb3RlY3QpOw0KICAgIC8qIEFwcGVuZCB0aGUgc2NyaXB0IHRvIHRoZSBib2R5IG9mIHRoZSBIVE1MIERvYyAqLw0KICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTsNCn0NCg0KLyogQ2hlY2sgaWYgdGhlIHRhYiBuYW1lIGlzIHNhdmVkLCBpZiBpdCBpcyBzYXZlZCwgb2ZmZXIgdGhlIHVzZXIgdG8gc2V0IGl0LCBpZiBub3QsIGhhdmUgdGhlIHVzZXIgZW50ZXIgYSBuZXcgKi8NCmlmICh0eXBlb2Ygd2luZG93LnNlc3Npb25TdG9yYWdlLnRhYk5hbWUgIT0gInVuZGVmaW5lZCIgKSB7DQogICAgc2Vzc2lvblRpdGxlID0gd2luZG93LnNlc3Npb25TdG9yYWdlLnRhYk5hbWU7DQogICAgaWYgKGNvbmZpcm0oYFdvdWxkIHlvdSBsaWtlIHRvIHNldCB0aGUgdGl0bGUgdG8gIiR7c2Vzc2lvblRpdGxlfSI/IFxuUHJlc3MgY2FuY2VsIHRvIHNldCBhIGN1c3RvbSB0YWIgbmFtZWApKSB7DQogICAgICAgIG5ld1RpdGxlID0gc2Vzc2lvblRpdGxlOw0KICAgIH0gZWxzZSB7DQogICAgICAgIG5ld1RpdGxlID0gcHJvbXB0KCJFbnRlciBUYWIgVGl0bGU6Iik7DQogICAgfQ0KDQp9IGVsc2Ugew0KICAgIG5ld1RpdGxlID0gcHJvbXB0KCJFbnRlciBUYWIgVGl0bGU6Iik7DQp9DQoNCi8qIFNhdmUgdGhlIHRpdGxlIHRvIHNlc3Npb24gc3RvcmFnZSAqLw0Kd2luZG93LnNlc3Npb25TdG9yYWdlLnRhYk5hbWUgPSBuZXdUaXRsZTsNCg0KLyogVXBkYXRlIHRoZSB0aXRsZSAqLw0KZG9jdW1lbnQudGl0bGUgPSBuZXdUaXRsZTs=";


    /* Run the script*/

    window.eval(atob(userScript));
})();