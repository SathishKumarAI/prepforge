---
qid: ing_e9166c0b84__faang__local
question: 'Explain: Modernizing Artifact Storage at Uber — Uber Engineering \u2014
  Where the Digital World Meets the Physical One'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 475
total_tokens: 721
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:41:36-05:00'
sources: []
---

**Clarify**  
The question asks how Uber modernized its ML artifact storage to support scalable model training and deployment. I’ll assume we’re talking about moving from legacy file‑system or S3‑backed stores to a unified, versioned, metadata‑rich repository that can handle millions of artifacts (models, datasets, configs) across teams.

**Approach**  
1. Identify pain points: manual uploads, lack of provenance, duplicated storage, slow retrieval.  
2. Design a new pipeline: ingest → canonical format → metadata catalog → immutable storage.  
3. Leverage existing infra: Uber’s internal “Model Store” built on top of GCS/S3 with a metadata service (e.g., MLflow tracking server).  
4. Introduce versioning, access controls, and caching to reduce I/O.

**Depth**  
- **Ingestion**: Wrap training jobs in a container that pushes artifacts to the store via a REST API; enforce schema validation.  
- **Metadata**: Store JSON/YAML descriptors (model type, hyper‑params, dataset hash) in a relational DB or NoSQL catalog; enable search by tags.  
- **Storage**: Use object storage with deduplication (content‑addressable keys), ensuring immutability and auditability.  
- **Access**: Role‑based IAM + token rotation; integrate with Uber’s internal auth system.  
Complexity: Ingestion is O(1) per artifact; catalog queries are O(log n). Trade‑offs include added latency vs. long‑term savings in reproducibility.

**Edge Cases**  
- Large binary artifacts (>10 GB): chunking + parallel uploads.  
- Corrupted uploads: checksum validation.  
- Legacy data migration: backward compatibility layer that reads old paths and populates new catalog entries.

**Optimize & Communicate**  
Future work: add a predictive cache to pre‑fetch frequently used models, use content‑addressable storage for deduplication across teams, and expose an SDK so ML engineers can pull artifacts declaratively. I’d explain this evolution by mapping pain points → architectural changes → measurable benefits (e.g., 30 % faster model checkout, 40 % storage savings).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
