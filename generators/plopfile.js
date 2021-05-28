module.exports = function (plop) {
  let migrationCode = "";

  if (migrationCode != "") {
    migrationCode = "";
  }

  for (i = 0; i <= 12; i++) {
    migrationCode = migrationCode + Math.floor(Math.random() * 10).toString();
  }

  // component generator
  plop.setGenerator("controller", {
    description: "application controller CRUD easily",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Insert controller name, please!",
      },
    ],
    actions: [
      {
        type: "add",
        path: "../app/Controllers/Http/{{pascalCase name}}Controller.ts",
        templateFile: "templates/CrudController.ts.hbs",
      },
      {
        type: "add",
        path: "../app/Models/{{pascalCase name}}.ts",
        templateFile: "templates/CrudModel.ts.hbs",
      },
      {
        type: "append",
        path: "../start/routes.ts",
        templateFile: "templates/CrudRoutes.ts.hbs",
      },
      {
        type: "add",
        path: `../database/migrations/${migrationCode}_create_{{lowerCase name}}s.ts`,
        templateFile: "templates/CrudMigration.ts.hbs",
      },
    ],
  });
};
