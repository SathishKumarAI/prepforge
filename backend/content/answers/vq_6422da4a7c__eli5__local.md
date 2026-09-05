---
qid: vq_6422da4a7c__eli5__local
question: What are the types of tables in Hive?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 231
total_tokens: 388
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:13:41-05:00'
sources: []
---

In Hive you can create three kinds of tables that decide where the data lives and who owns it:

1. **Managed (Internal) Table** – Think of it as a house you own. When you drop the table, Hive deletes both the metadata *and* all the files in HDFS that hold its data.

2. **External Table** – Imagine renting a room. The data stays where you put it (any HDFS location you specify). Dropping the table only removes the Hive definition; the actual files stay untouched so you can reuse them elsewhere.

3. **Transient (or Temporary) Table** – Like a pop‑up shop that lives only for the current session. It exists in memory or on disk but disappears automatically when your query finishes or you close the session, without leaving any trace behind.

These choices let you control data lifecycle: keep it safe in HDFS, share it across tools, or use it just once for quick calculations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
