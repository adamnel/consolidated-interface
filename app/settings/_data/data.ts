export const SCRIPTS: any[] = [
  {
    system: "Vantage-Dev",
    name: "Crimes analysis",
    description: "Times, locations, and description",
    sql: "SELECT REGEXP_REPLACE(location, '^.+[/\\]', '') as Name",
    status: "Running"
  },
  {
    system: "system",
    name: "Script",
    description: "Script description",
    sql: "SELECT Location, ObjectLength FROM READ_NOS (",
    status: "Running"
  },
  {
    system: "system",
    name: "Script",
    description: "Script description",
    sql: "SELECT Payload FROM READ_NOS (",
    status: "Running"
  },
  {
    system: "system",
    name: "Script",
    description: "Script description",
    sql: "CREATE AUTHORIZATION Auth_S3_Def",
    status: "Running"
  },
  {
    system: "system",
    name: "Script",
    description: "Script description",
    sql: "CREATE MULTISET FOREIGN TABLE NOS_TEST.demo_csv_foreign_table ,FALLBACK ,",
    status: "Running"
  },
  {
    system: "system",
    name: "Script",
    description: "Script description",
    sql: "SELECT location(CHAR(100)), ObjectLength FROM READ_NOS (",
    status: "Running"
  },
  {
    system: "system",
    name: "Script",
    description: "Script description",
    sql: "SELECT Location, ObjectLength FROM READ_NOS (",
    status: "Running"
  },
  {
    system: "system",
    name: "Script",
    description: "Script description",
    sql: "SELECT Payload FROM READ_NOS (",
    status: "Running"
  },
  {
    system: "system",
    name: "Script",
    description: "Script description",
    sql: "CREATE AUTHORIZATION Auth_S3_Def",
    status: "Running"
  },
  {
    system: "system",
    name: "Script",
    description: "Script description",
    sql: "CREATE MULTISET FOREIGN TABLE NOS_TEST.demo_csv_foreign_table ,FALLBACK ,",
    status: "Running"
  },
  {
    system: "system",
    name: "Script",
    description: "Script description",
    sql: "SELECT location(CHAR(100)), ObjectLength FROM READ_NOS (",
    status: "Running"
  },
  {
    system: "system",
    name: "Script",
    description: "Script description",
    sql: "SELECT Location, ObjectLength FROM READ_NOS (",
    status: "Running"
  },
  {
    system: "system",
    name: "Script",
    description: "Script description",
    sql: "SELECT Payload FROM READ_NOS (",
    status: "Running"
  },
  {
    system: "system",
    name: "Script",
    description: "Script description",
    sql: "CREATE AUTHORIZATION Auth_S3_Def",
    status: "Running"
  },
  {
    system: "system",
    name: "Script",
    description: "Script description",
    sql: "CREATE MULTISET FOREIGN TABLE NOS_TEST.demo_csv_foreign_table ,FALLBACK ,",
    status: "Running"
  },
  {
    system: "system",
    name: "Script",
    description: "Script description",
    sql: "SELECT location(CHAR(100)), ObjectLength FROM READ_NOS (",
    status: "Running"
  }
];
