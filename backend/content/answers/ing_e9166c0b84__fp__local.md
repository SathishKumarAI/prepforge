---
qid: ing_e9166c0b84__fp__local
question: 'Explain: Modernizing Artifact Storage at Uber — Uber Engineering \u2014
  Where the Digital World Meets the Physical One'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 183
output_tokens: 555
total_tokens: 738
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:14:31-05:00'
sources: []
---

**Why Uber had to re‑think artifact storage**

At Uber, a model is never just a file on disk; it is a *conveyor belt* that must feed production services, audit logs, compliance checks and research notebooks in real time. The legacy system (S3 + ad‑hoc Git tags) treated artifacts as immutable blobs: you could pull one version, but nothing enforced consistency between the model code, its training data, hyper‑parameters or the exact environment it ran on. As teams grew, this “snapshot” approach broke two fundamental principles:

1. **Causal traceability** – every inference must be reproducible by knowing *exactly* what code, data and runtime were used.
2. **Data‑centric optimization** – model performance is a function of the *joint distribution* of data, algorithm and hardware; treating them independently prevents global improvement.

Uber’s new system treats an artifact as a **stateful graph node**:  
- **Vertices** = code modules, datasets, hyper‑parameters, Docker images.  
- **Edges** = provenance links (e.g., “model X was trained on dataset Y with config Z”).  

This graph is stored in a *graph database* (Neo4j) and surfaced through an API that enforces *immutable versioning* of each node while allowing *branch‑and‑merge* semantics akin to Git. The storage layer itself uses **content‑addressable** object stores plus metadata sharding, ensuring O(1) lookup for any artifact version.

**Deeper principle**

The design is an instance of *information‑theoretic compression with provenance*. By representing the entire training pipeline as a directed acyclic graph (DAG), Uber compresses the space of possible experiment states into a finite set of nodes. Each node’s hash encodes its content; any change propagates deterministically through the DAG, guaranteeing that two different experiments are distinguishable by their root hashes. This satisfies *lossless reproducibility* while keeping storage linear in the number of unique components.

**Non‑obvious insight**

Most teams focus on storing larger models efficiently. Uber’s key insight was that **the bottleneck is not model size but the combinatorial explosion of *context* (data, config, environment)**. By normalizing context into reusable nodes, they turned what would be exponential storage into a linear structure—essentially turning a “model lake” into a “model graph.” This allows Uber to query, for example, “Which training runs used this exact dataset version?” in constant time, enabling rapid rollback and compliance auditing without scanning terabytes of logs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
