---
qid: vq_2dce6140af__faang__local
question: Is it possible to use same metastore by multiple users, in case of embedded
  hive?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 459
total_tokens: 700
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:04:13-05:00'
sources: []
---

**Clarify**  
You’re asking whether an *embedded Hive* (e.g., HiveServer2 running inside a single JVM) can share its metastore across multiple users or clients.  
Assumptions to confirm:  

1. All users connect to the same HiveServer2 instance.  
2. The Hive configuration points to a shared metastore URI (JDBC, Derby, MySQL, etc.).  
3. No user‑specific isolation layer is required beyond standard Hive ACLs.

**Approach**  
Explain that Hive’s metastore is a separate component; it can be backed by any JDBC data source. When HiveServer2 is embedded, the same JVM can serve many connections as long as the metastore URI is common. The key is to configure `hive.metastore.local=false` and provide a shared JDBC URL.

**Depth**  
- **Embedded mode** keeps only the MetastoreServer in memory; it still talks over Thrift to clients.  
- Multiple users can query/alter tables because they all hit the same metastore database.  
- ACLs (via Hive’s `hive.security.authorization.enabled` and Ranger/Sentry) enforce per‑user permissions on that shared store.  
- Concurrency is handled by the underlying JDBC DB; e.g., MySQL or PostgreSQL supports multi‑writer access, while Derby in embedded mode does not.

**Edge Cases**  
- Using an *embedded* Derby metastore (`hive.metastore.local=true`) makes it single‑user: only one JVM can open the file.  
- If the shared DB is down, all users fail.  
- Improper ACL configuration could expose tables to unintended users.

**Optimize & Communicate**  
Recommend using a networked metastore (MySQL/PostgreSQL) with proper isolation policies. Mention that performance scales with the DB’s connection pool; tune `hive.metastore.client.socket.timeout` and `hive.metastore.connection.driver`. Conclude by affirming: *Yes, multiple users can share an embedded Hive metastore as long as it points to a common, network‑accessible JDBC store and proper security controls are in place.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
