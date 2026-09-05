---
qid: ing_0f730f291c__fp__local
question: 'Explain: Relational DB — Types of Databases'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 455
total_tokens: 625
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:38:20-05:00'
sources: []
---

## Relational‑DB Types for ML – From First Principles

The **core problem** a database solves for machine learning is *efficiently storing and retrieving structured data that satisfies a set of functional dependencies*. A relational schema encodes these dependencies as tables, columns, primary keys, and foreign keys.  

1. **Normalized (OLTP) databases**  
   • Aim to eliminate redundancy by enforcing 3NF or BCNF.  
   • Each row is atomic; joins are expensive but write‑heavy workloads stay consistent.  
   • *Why it must work*: In a learning pipeline, training data often comes from transactional logs where each event is an isolated record—storing them in a normalized form guarantees integrity and prevents the “dirty‑read” problem that would corrupt feature extraction.

2. **Denormalized (OLAP) databases**  
   • Trade redundancy for read speed by pre‑joining tables into wide fact tables.  
   • Joins are minimal; aggregations become trivial.  
   • *Why it must work*: Feature engineering and model inference demand rapid scans of many rows; a denormalized schema reduces latency to sub‑millisecond, which is critical when models serve in real time.

3. **Hybrid (Materialised‑View) schemas**  
   • Store base tables normalized but maintain materialised views that mirror the OLAP layout.  
   • Views are refreshed incrementally, keeping consistency with minimal overhead.  
   • *Why it must work*: It reconciles the need for accurate transactional updates with low‑latency analytics—essential when training data changes continuously.

### Non‑obvious insight
A **materialised view is not just a cached copy**; it acts as a *semantic bridge* between the relational algebra of OLTP and the vector‑space operations of ML. By aligning the view’s schema with the feature matrix layout, you eliminate an entire class of impedance mismatches—data type casts, missing values, and dimensionality mismatches—thereby turning database maintenance into a direct optimisation problem for model accuracy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
