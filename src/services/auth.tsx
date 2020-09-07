interface Response{
  token: string;
  user: {
    name: string;
    email: string;
  }
}

export function signIn(): Promise<Response> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: 'aksansfs5d1f65s1g6d6f1h5df1hdf1h6dfgdfgd5f61g',
        user: {
          name: "Felipe",
          email: "felipe.e.w@hotmail.com"
        }
      });
    }, 2000);
  });
}