---
qid: vq_46e401db25__faang__local
question: How to drop table in HBase?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 386
total_tokens: 617
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:08:13-05:00'
sources: []
---

**Clarify**

You’re asking how to delete a table in HBase – i.e., remove its schema and all data from the cluster.  
Assumptions:  
- You have `hbase-shell` access or a Java client with admin privileges.  
- The table is not in use (no scanners/puts).  

**Approach**

1. **Disable the table** – HBase forbids dropping an enabled table.  
2. **Delete the table** – once disabled, you can drop it.  
3. **Verify removal** – list tables to confirm it’s gone.

**Depth**

```bash
# In hbase shell
disable 'my_table'      # 1
drop 'my_table'         # 2
list                    # 3
```

If using Java:

```java
Connection conn = ConnectionFactory.createConnection(conf);
Admin admin = conn.getAdmin();
admin.disableTable(TableName.valueOf("my_table"));
admin.deleteTable(TableName.valueOf("my_table"));
```

Complexity: O(1) API calls; underlying data files are removed lazily by HBase’s compaction.  
Trade‑off: disabling blocks writes/reads; dropping is irreversible.

**Edge Cases**

- Table still enabled → `drop` fails.  
- Namespace not found or table missing → error thrown.  
- Large tables may take time to delete due to region server clean‑up.  

**Optimize & Communicate**

For production, wrap the operation in a transaction‑safe script, log the action, and schedule during low‑traffic windows. If you need to preserve data, first snapshot (`snapshot 'my_table', 'snap'`) before dropping. This keeps your answer concise yet complete, showcasing structured thinking and depth expected by FAANG interviewers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
