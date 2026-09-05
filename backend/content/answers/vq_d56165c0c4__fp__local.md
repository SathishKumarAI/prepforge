---
qid: vq_d56165c0c4__fp__local
question: What file is read by ODBC to load drivers ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 519
total_tokens: 690
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:58:19-05:00'
sources: []
---

In the ODBC architecture the **driver manager** is the component that translates a logical data‑source name (DSN) into a concrete driver library to load at run time.  
The driver manager must know *where* each driver lives and what entry points it exposes, yet it should not be hard‑wired to a particular installation layout. Therefore the ODBC standard prescribes an **external configuration file** that lists all available drivers:  

| OS | Default location of the file |
|----|------------------------------|
| Linux/Unix | `/etc/odbcinst.ini` (or `$ODBCSYSINI/odbcinst.ini`) |
| Windows | The same information is stored in the registry under `HKLM\SOFTWARE\ODBC\ODBCINST.INI` and, for backward compatibility, can also be read from an `odbcinst.ini` file in `%WINDIR%`. |

The driver manager parses this file on startup. Each section defines a driver:

```ini
[MySQL ODBC 8.0 ANSI Driver]
Driver = /usr/lib/x86_64-linux-gnu/odbc/libmyodbc.so
Setup   = /usr/lib/x86_64-linux-gnu/odbc/libodbcmyS.so
```

The file’s format is a simple key‑value pair, which keeps the manager lightweight and portable. The separation between *definition* (ini) and *implementation* (shared library) mirrors the principle of **dependency injection** in software engineering: the manager does not need to know the internals of each driver, only its contract.

### Non‑obvious insight
The order in which ODBC reads these files matters. If an application sets `ODBCSYSINI` or `ODBCINSTINI`, the manager will first look there before falling back to `/etc`. This allows per‑user or per‑application overrides without touching system configuration, a subtle but powerful feature that many developers overlook when troubleshooting driver resolution issues.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
