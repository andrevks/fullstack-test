import { createConnection, getConnectionOptions } from "typeorm";

interface IOptions {
  host: string;
}

// export default async () => {
//   const options = await getConnectionOptions();
//   const newOptions = options as IOptions;
//   newOptions.host = "database";

//   return await createConnection({
//     ...options,
//   });
// };

getConnectionOptions().then((options) => {
  const newOptions = options as IOptions;
  newOptions.host = "database"; //Essa opção deverá ser EXATAMENTE o nome dado ao service do banco de dados

  createConnection({
    ...options,
  });
});

// const createProductConnection = (): Promise<Connection> =>
//   getConnectionOptions().then(async (options) => {
//     const newOptions = options as IOptions;
//     newOptions.host = "database"; //Essa opção deverá ser EXATAMENTE o nome dado ao service do banco de dados

//     return await createConnection({
//       ...options,
//     });
//   });

// export default createProductConnection;
