---
qid: ing_846f2d57a3__fp__local
question: 'Explain: Data mesh — What Is a Data Architecture? | IBM'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 386
total_tokens: 559
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:46:53-05:00'
sources: []
---

### Why a *Data Mesh*?

In large enterprises the **fundamental problem** is that analytical workloads are scattered across silos: finance, marketing, operations each own their own databases and pipelines. When a new model needs data from multiple domains, engineers must build ad‑hoc ETL jobs, duplicate tables, and wait for approvals. This creates *data latency* and *single points of failure*.  

A data mesh reframes the problem as **“how do we treat data like a product that can be discovered, consumed, and improved by any team?”** It imposes four principles:

| Principle | Why it must hold |
|-----------|------------------|
| Domain‑owned data products | Treat each business domain as an autonomous unit; they own the schema, quality metrics, and lifecycle of their data. This aligns incentives with value creation. |
| Self‑serve infrastructure | Provide a shared platform (catalogs, lineage, security) that lets teams publish and consume data without engineering hand‑offs, reducing bottlenecks. |
| Federated governance | Instead of a central data lake policy, enforce rules through APIs and contracts at the domain level, enabling consistent compliance while preserving autonomy. |
| Product mindset | Data is versioned, SLA‑bound, and documented—just like any SaaS product—so consumers can rely on it without re‑engineering. |

### Non‑obvious insight

Most people overlook that **data mesh solves a *coordination* problem, not just an integration one**. By treating data as a product with clear ownership and service level agreements, the architecture turns inter‑team friction into a predictable API contract. This reduces both technical debt (fewer duplicated pipelines) and organizational latency (teams can ship models faster).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
