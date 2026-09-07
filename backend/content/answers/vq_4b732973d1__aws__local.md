---
qid: vq_4b732973d1__aws__local
question: How do you handle schema evolution in ADF?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 460
total_tokens: 690
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:50:29-05:00'
sources: []
---

**Situation / Task**  
When I joined the data platform team at my previous employer, our analytics lake was growing fast—over 200 GB/day of new telemetry from IoT devices. Each device had a slightly different payload and the schema drifted weekly. In Azure Data Factory (ADF) we were forced to rebuild pipelines every time a field changed, costing ~4 hours per sprint and leading to stale dashboards.

**Action**  
1. **Adopt a schema‑first approach** – I introduced an *Azure Purview* catalog that stored a canonical Avro schema for each dataset.  
2. **Use ADF’s “Schema Drift” feature** – configured the Copy Activity to read the source schema, map it to the target table via the catalog, and auto‑generate the sink columns when new fields appear.  
3. **Leverage Delta Lake on Azure Synapse** – the sink is a Delta table that supports *schema evolution* natively (ALTER TABLE ADD COLUMN).  
4. **Automate validation** – built an ADF pipeline that runs nightly against sample data, compares the inferred schema with the catalog, and alerts via Logic Apps if drift exceeds 10 % of fields.

**Result**  
- Reduced manual pipeline edits from ~4 hrs per sprint to <30 min.  
- Cut data latency for new fields from 48 h to <6 h (95 % reduction).  
- Saved the team ~$18k annually in engineering effort and improved dashboard accuracy by 12 pp.

**Learning & Ownership**  
I took full ownership of the catalog, iterated on the validation logic after a false‑positive incident, and documented best practices. This deep dive into ADF’s schema handling taught me that *Customer Obsession* (delivering up‑to‑date analytics) and *Dive Deep* (understanding every layer from Purview to Delta Lake) are essential for scalable data engineering.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
