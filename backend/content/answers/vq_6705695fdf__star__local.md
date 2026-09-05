---
qid: vq_6705695fdf__star__local
question: Is it possible to Enable or Disable a Database trigger ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 351
total_tokens: 588
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:02:06-05:00'
sources: []
---

**Situation:**  
In a recent migration from Oracle to PostgreSQL for our e‑commerce platform, we discovered that the legacy database had several triggers enforcing audit logging and referential integrity. When we started testing the new schema, one trigger – `TRG_ORDER_STATUS_UPDATE` – was firing on every order update, causing a 30 % slowdown during peak traffic.

**Task:**  
I needed to determine whether I could temporarily disable that trigger while preserving its logic for future use, and then re‑enable it without losing any audit data or violating constraints.

**Action:**  
First, I queried `pg_catalog.pg_trigger` to confirm the trigger’s properties. In PostgreSQL you can alter a trigger with `ALTER TABLE ... DISABLE TRIGGER`. I executed:
```sql
ALTER TABLE orders DISABLE TRIGGER trg_order_status_update;
```
This set the trigger’s status to inactive but left its definition intact in the catalog. While disabled, I ran our load test and saw latency drop from 120 ms to 80 ms per update. After the test, I re‑enabled it with:
```sql
ALTER TABLE orders ENABLE TRIGGER trg_order_status_update;
```
I also added a conditional check inside the trigger function to skip execution when a session variable `session.disable_audit` is set, giving us runtime control for future maintenance windows.

**Result:**  
The ability to toggle triggers saved us roughly 50 % of the processing time during critical periods. I learned that PostgreSQL’s `DISABLE/ENABLE TRIGGER` commands are lightweight and preserve all trigger metadata, making them ideal for temporary performance tuning without dropping or recreating triggers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
