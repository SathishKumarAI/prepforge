---
qid: ing_113b64c56c__aws__local
question: 'Explain: Q: Explain how HNSW works and when you would not use it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 510
total_tokens: 747
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:04:46-05:00'
sources: []
---

**Situation & Task**  
I was leading the migration of a recommendation engine from a custom ANN to a production‑grade similarity search in 2024. The team needed an algorithm that could handle millions of high‑dimensional vectors with sub‑millisecond latency.

**Action – HNSW Overview**  
HNSW (Hierarchical Navigable Small World) builds a multi‑layer graph where each layer contains a sparse set of “hub” nodes. Queries start at the topmost layer and greedily hop down, pruning the search space exponentially. I selected **Amazon Neptune** for graph storage, coupled with **AWS Lambda** to orchestrate query pipelines, because Neptune’s native graph API (Gremlin) maps directly onto HNSW traversal.

Key design choices:  
- *Layer size*: 32 hubs per node → ~0.3 ms latency on a 10‑M vector set.  
- *Rebuild window*: nightly batch to keep the index fresh without downtime.  
- *Cost*: $0.08/hr for a single Neptune instance, <5 % of the previous ANN compute cost.

**Result**  
Latency dropped from 15 ms to **0.3 ms** (×50). Precision@10 improved by 8 %. The system handled peak traffic (200k QPS) with 99.9 % availability, and we cut infra spend by $120k annually.

**When Not to Use HNSW**  
If the dataset is *very small* (<100K vectors) or *strictly static*, a brute‑force KD‑tree or exact ANN may be cheaper and simpler. Also, for *ultra‑high dimensionality* (>10K), the graph becomes dense; memory overhead grows linearly with dimension, making HNSW impractical.

**Leadership Principles Reflected**  
- **Ownership** – I drove the end‑to‑end migration and paid full attention to cost/latency trade‑offs.  
- **Dive Deep** – We profiled every layer hop, measured edge counts, and tuned Neptune parameters.  
- **Deliver Results** – Quantified latency & precision gains led to a clear ROI.

*Bar‑raiser cues*: depth of graph theory understanding, AWS service alignment, cost justification, and learning from prior brute‑force failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
