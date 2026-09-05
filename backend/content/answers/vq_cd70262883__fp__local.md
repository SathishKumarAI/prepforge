---
qid: vq_cd70262883__fp__local
question: How to view table columns details in RDBMS from SQOOP..?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 670
total_tokens: 845
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:56:48-05:00'
sources: []
---

**Why Sqoop needs to know a table’s columns**

Sqoop is a data‑movement tool that translates a relational row into a Hadoop record.  
To do this correctly it must understand **what each column contains**: its name, type,
length, nullability and whether it should be mapped to Java or Hive types.
Without that metadata the import would either drop fields, generate incorrect
schemas or mis‑interpret binary data.

**How Sqoop obtains the metadata**

Sqoop opens a JDBC connection to the source RDBMS and asks the driver for
`DatabaseMetaData`.  
From this object it can list tables, views, columns, primary keys, etc.  
The command line offers two ways to *expose* that information:

| Command | What it does |
|---------|--------------|
| `sqoop list-tables --connect <url> …` | Prints every table the user can see. |
| `sqoop eval --connect <url> “SELECT * FROM t LIMIT 0”` | Executes a lightweight query that returns **zero rows** but forces JDBC to expose the full column metadata in the ResultSet. |

The `eval` trick is the only built‑in way to get a column list without importing
data; it prints each column’s name, SQL type and Java class.

**Non‑obvious insight**

Many users think “list columns” is a separate command, but Sqoop never exposes such an option because the JDBC API already gives that information. The `eval` trick leverages that fact: by issuing a `LIMIT 0` query you get a **ResultSetMetaData** object that contains every detail you need—exactly what Sqoop would use during an import.

So, to view column details in an RDBMS from Sqoop:

```bash
sqoop eval \
  --connect jdbc:mysql://host/db \
  --username user \
  --password pass \
  "SELECT * FROM mytable LIMIT 0"
```

The output will list each column’s name, SQL type, and corresponding Java class,
providing a quick, reliable snapshot of the table schema.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
