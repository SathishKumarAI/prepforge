---
qid: ing_7d49c1a91a__fp__local
question: 'Explain: Design the data platform for a company-wide AI assistant.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 421
total_tokens: 593
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:32:00-05:00'
sources: []
---

**Why a unified data platform is essential**

A company‑wide AI assistant must *understand* every user request by grounding it in the same reality that all employees share.  
The fundamental problem is **information consistency**: each department stores data in its own schema, format, and security domain, so the assistant sees fragmented truths. To solve this, we need a platform that:

1. **Normalises semantics** – maps disparate schemas to a shared ontology (e.g., `Employee → Person`, `Order → Transaction`).  
2. **Preserves provenance** – records source, timestamp, and trust score for every fact so the assistant can weigh conflicting data.  
3. **Scales lineage** – tracks transformations from raw logs to aggregated metrics, enabling reproducible AI models.

**Core design principles**

- **Schema‑as‑Code**: Define each domain model in a declarative language (e.g., GraphQL or Avro) and generate adapters automatically.  
- **Federated Query Engine**: Use a distributed query layer (Presto/Trino) that can push predicates to source systems, keeping data where it lives while presenting a single view.  
- **Metadata‑Driven ML Pipeline**: Store feature definitions, versioned datasets, and evaluation metrics in the same catalog so models are reproducible and auditable.

**Non‑obvious insight**

Most architectures treat security as an afterthought; in fact, *privacy can be the engine of efficiency*. By annotating every data element with a privacy level and automatically routing queries through a differential‑privacy layer, the assistant gains **data‑minimalism**: it only accesses the minimal subset needed to answer a question, reducing storage, compute, and compliance overhead simultaneously.

In short, a principled platform turns chaotic departmental silos into a single, trustworthy knowledge graph that fuels an AI assistant with consistent, auditable, and privacy‑aware data.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
