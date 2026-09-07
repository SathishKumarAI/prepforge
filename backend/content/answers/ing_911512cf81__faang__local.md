---
qid: ing_911512cf81__faang__local
question: 'Explain: Characteristic #5: It’s a single source of truth'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 580
total_tokens: 817
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:21:47-05:00'
sources: []
---

**Clarify**  
You’re asking about the *fifth characteristic* of a **single source of truth (SSOT)** in ML pipelines: that all downstream models and analytics use exactly one canonical dataset.  
Assumptions I’d confirm: we’re talking about structured tabular data, not streaming; there’s an established data‑engineering layer; stakeholders need reproducible results.

**Approach**  
1. Define what “single source” means in practice (canonical table + schema).  
2. Explain why it matters for ML (reproducibility, auditability, feature drift control).  
3. Show how to enforce it with lineage & versioning tools.

**Depth**  

| Why SSOT matters | Example |
|------------------|---------|
| **Reproducibility** | A model trained on `customers_v1` will produce the same predictions when re‑run because the data never changes behind the scenes. |
| **Feature drift control** | All feature stores read from the same snapshot, so drift detection is consistent across models. |
| **Audit & compliance** | Regulators can trace every prediction back to a single dataset version. |

*Implementation:*  
- Store raw data in a *landing zone*.  
- Use an immutable, time‑stamped table (e.g., BigQuery partitioned by ingestion timestamp or Snowflake’s `SYSTEM_TIME`).  
- Every feature extraction job reads from this canonical table via read‑only views; no transformations are applied in place.  
- Version the table with a semantic tag (`v1.0`, `v1.1`), and use data lineage tools (dbt, Airflow DAGs) to record provenance.

**Edge cases**  
- **Schema evolution:** Add nullable columns or new partitions rather than altering existing ones.  
- **Data quality issues:** If the canonical source contains bad rows, downstream models inherit them; need a validation layer before promotion.  
- **Real‑time analytics:** SSOT is harder when latency matters; may require a hybrid approach with “near‑real‑time” replicas.

**Optimize & Communicate**  
- *Performance:* Use columnar storage and compression to keep read costs low; cache hot partitions in memory.  
- *Scalability:* Partition by date or key so only relevant slices are scanned for each model run.  
- *Narrative:* “By centralizing our data into a single, immutable source, we eliminate the hidden drift that plagued our last fraud‑detection rollout. Every model now points to the same lineage, giving us audit trails and consistent feature values.”  

**Key takeaway:** The SSOT characteristic forces all ML workloads to consume exactly one canonical dataset, ensuring reproducibility, compliance, and easier maintenance across a large engineering organization.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
