## installation

```bash
# clone the repository
$ git clone https://github.com/danielusi/contacts-api.git
# install the packages: express, express-async-error, pg
$ yarn add express
$ yarn add express-async-error
$ yarn add pg
```

```node
// with docker already installed use the commands:
sudo docker run --name pg -e POSTGRES_USER=root -e POSTGRES_PASSWORD=root -p 5432:5432 -d postgres --criar container no PostgreSQL
sudo docker exec -it pg bash
```

```bash
$ psql -U root
# run the CRUDS that are in src database/ schema.sql
$  \c mycontacts
```

You can use Insomnia or Postman to test the project, creating delete, update, create and list requests for both categories and contacts.
