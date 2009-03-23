SqlQueries = {};
SqlQueries.requiredVersion = 1;
// DROP
SqlQueries.dropQueries = {};
SqlQueries.dropQueries.dropSchema = "DROP TABLE IF EXISTS __webdb_schema"
SqlQueries.dropQueries.dropTableList = "DROP TABLE IF EXISTS __webdb_tablelist";
SqlQueries.dropQueries.dropTableFields = "DROP TABLE IF EXISTS __webdb_tablefields";

// CREATE
SqlQueries.createQueries = {};
SqlQueries.createQueries.createSchemaVersion = "CREATE TABLE __webdb_schema(version INTEGER, date TEXT)";
SqlQueries.createQueries.createTableList = "CREATE TABLE __webdb_tablelist(id INTEGER PRIMARY KEY, tablename TEXT, tablesql TEXT)";
SqlQueries.createQueries.createTableFields = "CREATE TABLE __webdb_tablefields(table_id INTEGER, fieldname TEXT, fieldtype TEXT)";

// INSERT
SqlQueries.insertQueries = {};
SqlQueries.insertQueries.insertSchemaVersion = "INSERT INTO __webdb_schema(version) VALUES(?)";
SqlQueries.insertQueries.insertTableList = "INSERT INTO __webdb_tablelist(tablename, tablesql) VALUES(?, ?)";
SqlQueries.insertQueries.insertTableFields = "INSERT INTO __webdb_tablefields(table_id, fieldname, fieldtype) VALUES(?, ?, ?)"

// DELETE
SqlQueries.deleteQueries = {};
SqlQueries.deleteQueries.deleteSchemaVersionAll = "DELETE FROM __webdb_schema";
SqlQueries.deleteQueries.deleteSchemaVersionWhere = "DELETE FROM __webdb_schema WHERE version = '?'";
SqlQueries.deleteQueries.deleteTableListAll = "DELETE FROM __webdb_tablelist";
SqlQueries.deleteQueries.deleteTableFieldsAll = "DELETE FROM __webdb_tablefields";
// UPDATE
// SELECT
SqlQueries.selectQueries = {};
SqlQueries.selectQueries.selectSchemaVersion = "SELECT version from __webdb_schema";
SqlQueries.selectQueries.selectTableList = "SELECT tablename FROM __webdb_tablelist";
SqlQueries.selectQueries.selectTableFields = "SELECT fieldname FROM __webdb_tablefields WHERE table_id in (SELECT id FROM __webdb_tablelist WHERE tablename = ?)";


//
// public static final String createSchema = "CREATE TABLE IF NOT EXISTS q_webdb_schema(version INTEGER, date TEXT)";
// public static final String selectSchema = "SELECT version FROM q_webdb_schema";
// public static final String insertSchema = "INSERT INTO q_webdb_schema(version) VALUES(?)";
// public static final String deleteSchema = "DELETE FROM q_webdb_schema";
// public static final String dropSchema = "DROP TABLE q_webdb_schema";
// 
// // Table tablelist
// public static final String createTableList = "CREATE TABLE IF NOT EXISTS q_webdb_tablelist"
// 		+ "(id INTEGER PRIMARY KEY, tablename TEXT, tablesql TEXT)";
// public static final String dropTableList = "DROP TABLE q_webdb_tablelist";
// public static final String selectTableList = "SELECT tablename FROM q_webdb_tablelist";
// public static final String insertTableList = "INSERT INTO q_webdb_tablelist(tablename) VALUES(?)";
// public static final String deleteFromTableList = "DELETE FROM q_webdb_tablelist WHERE tablename = ?";
// 
// // Table tablefields
// public static final String createTableFields = "CREATE TABLE IF NOT EXISTS q_webdb_tablefields"
// 		+ "(table_id INTEGER, fieldname TEXT, fieldtype TEXT)";
// public static final String insertTableFields = "INSERT INTO q_webdb_tablefields(table_id, fieldname, fieldtype) VALUES(?, ?, ?)";
// public static final String dropTableFields = "DROP TABLE q_webdb_tablefields";
// public static final String selectTableFields = "SELECT fieldname FROM q_webdb_tablefields WHERE table_id in (SELECT id FROM q_webdb_tablelist WHERE tablename = ?)";
// public static final String deleteFromTableFields = "DELETE FROM q_webdb_tablefields WHERE table_id in (SELECT id FROM q_webdb_tablelist WHERE tablename = ?)";