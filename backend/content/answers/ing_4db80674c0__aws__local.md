---
qid: ing_4db80674c0__aws__local
question: 'Explain: Index Templates — Indextemplates'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 408
total_tokens: 636
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:21:13-05:00'
sources: []
---

**Question:** *Explain Index Templates – Indextemplates.*

**Answer (Amazon‑style)**  

During my last role at a global retailer, we migrated the search layer from on‑prem Elasticsearch to **Amazon OpenSearch Service** to support 10M daily queries. The team needed consistent index mapping and lifecycle policies across all catalogs. I designed an *Index Template* solution that automated this.

- **S**ituation: Each product family had its own index; manual mapping updates caused stale schemas and increased query latency by ~12 %.  
- **T**ask: Create a single source of truth for mappings, analyzers, and rollover settings to eliminate human error.  
- **A**ction: Built a CloudFormation stack that deployed an *OpenSearch Index Template* using the `index.template` API. The template defined field types (e.g., `product_name`, `price`), custom analyzers, and an ILM policy for daily rollovers. I also scripted a Lambda (Python) to update the template when new fields were added, triggering a painless script to re‑index in background.  
- **R**esult: Index consistency rose from 70 % to 99 %, query latency dropped by 18 % (from 350 ms to 285 ms), and ops cost decreased by $2k/month due to reduced manual reindexing.  

**Leadership Principles:** *Ownership* – I took full responsibility for the end‑to‑end lifecycle; *Dive Deep* – I inspected mapping files, ILM logs, and query plans to fine‑tune performance.

**Bar‑raiser cues:** Demonstrated ownership of a cross‑team problem, quantified impact with real metrics, and showed continuous learning by automating template updates post‑deployment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
