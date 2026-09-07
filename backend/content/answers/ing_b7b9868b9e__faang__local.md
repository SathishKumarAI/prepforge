---
qid: ing_b7b9868b9e__faang__local
question: 'Explain: Now these are generally not used for — Database Design Tips |
  Choosing the Best Database in a System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 558
total_tokens: 804
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:50:29-05:00'
sources: []
---

**Clarify**  
The interviewer wants you to explain why machine‑learning (ML) techniques are *not* typically applied when giving database‑design advice or selecting a storage engine in a system‑design interview.  
Assumptions:  
- “Database design” refers to schema modeling, normalization, indexing, and CAP trade‑offs.  
- “Choosing the best database” means picking SQL vs NoSQL, columnar vs document, etc., based on workload.

**Approach**  
1. Identify what ML excels at (pattern discovery, prediction).  
2. Contrast that with the deterministic, rule‑based nature of database design.  
3. Highlight where data‑driven insights *could* help but are rarely used in interviews.  

**Depth**  
- **Deterministic constraints:** Schema evolution, ACID guarantees, transaction isolation, and query optimization rely on well‑defined rules (normal forms, index cardinality) rather than probabilistic models.  
- **Explainability & auditability:** Production systems need clear, auditable design decisions; ML outputs are often opaque black boxes unsuitable for compliance or rollback.  
- **Performance predictability:** Query planners use cost models based on statistics, not learned predictions, because they must guarantee worst‑case bounds.  
- **Data volume vs model training time:** Designing a DB schema is a one‑off task; the overhead of collecting enough labeled data to train a useful ML model outweighs its benefits.

**Edge Cases**  
- *Adaptive indexing* or *self‑tuning query optimizers* in some engines do use lightweight learning, but these are internal vendor features, not interview‑style design choices.  
- For highly dynamic workloads (e.g., recommendation systems), practitioners might profile access patterns and tweak schema heuristically—still a manual, rule‑based loop.

**Optimize & Communicate**  
Emphasize that while ML can surface hidden correlations in query logs or usage telemetry, the core decisions about relational vs document stores, sharding strategies, and normalization are governed by established theoretical principles. If you’d push for ML, frame it as an *auxiliary* tool (e.g., automated index recommendation) rather than a replacement for human‑driven design.

> **TL;DR**: Database design is rule‑based, needs transparency, and must guarantee performance bounds—qualities that clash with the probabilistic, opaque nature of ML. Hence, interviewers expect you to rely on established database theory, not machine learning, when choosing or designing a data store.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
