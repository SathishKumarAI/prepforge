---
qid: ing_b5e2797220__faang__local
question: 'Explain: Roles & titles they hire — Glean'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 629
total_tokens: 861
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:46:14-05:00'
sources: []
---

**Clarify**  
We’re asked to describe the *roles* and *titles* a company (e.g., Meta/Google) hires when building an AI system called **Glean**—a knowledge‑base search engine that ingests documents, trains embeddings, and serves queries. I’ll assume Glean is a product‑centric AI platform requiring data engineering, ML research, backend ops, and UX.

---

### Approach
1. Map the end‑to‑end workflow: ingestion → preprocessing → representation learning → indexing → query processing → analytics.
2. For each stage list core responsibilities and candidate titles.
3. Highlight cross‑functional overlaps (e.g., Data Scientist vs. ML Engineer).
4. Note any specialized roles unique to large FAANG teams.

---

### Depth

| Stage | Core Responsibility | Typical FAANG Title |
|-------|---------------------|---------------------|
| **Data Ingestion & Engineering** | Build pipelines for PDFs, emails, docs; schema‑agnostic parsers. | *Data Engineer*, *Senior Software Engineer – Data Pipelines* |
| **Feature & Embedding Development** | Design and train transformer models (e.g., BERT) to produce sentence embeddings; fine‑tune on domain corpora. | *Machine Learning Researcher*, *ML Engineer – NLP* |
| **Indexing & Retrieval** | Build approximate nearest neighbor indices, vector databases, and metadata search layers. | *Software Engineer – Search Systems*, *Senior Backend Engineer* |
| **Serving & API Layer** | Expose low‑latency inference services; auto‑scaling, A/B testing. | *Platform Engineer*, *Site Reliability Engineer (SRE)* |
| **Product & UX** | Define query intent, surface docs, measure user satisfaction. | *Product Manager – Knowledge Search*, *UX Designer* |
| **Data Governance & Security** | Ensure compliance, privacy‑preserving embeddings, audit logs. | *Security Engineer – ML*, *Compliance Analyst* |
| **Operations & Monitoring** | Continuous integration of new data, model drift detection. | *ML Ops Engineer*, *Observability Lead* |

---

### Edge Cases
- **Unstructured data spikes**: need dynamic scaling and fallback heuristics.
- **Model bias or hallucination**: require interpretability roles (e.g., ML Ethicist).
- **Cross‑org data access restrictions**: legal liaison needed.

---

### Optimize & Communicate
- **Modularization**: separate ingestion, modeling, and serving to allow independent scaling.  
- **Polyglot persistence**: use graph DB for metadata, vector store for embeddings.  
- **Narrative**: “We first ingest raw documents → transform them into contextual embeddings via a fine‑tuned transformer → index vectors in an ANN structure → serve queries through a low‑latency API while continuously monitoring drift.”  

This structure showcases clear role mapping, technical depth, and practical trade‑offs—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
