---
qid: ing_3dbb8c001c__fp__local
question: 'Explain: FDE scenario: an enterprise customer wants a document-Q&A assistant
  over 2M internal documents, pilot in four weeks, and their security team forbids
  data leaving their VPC. Scope and design it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 203
output_tokens: 521
total_tokens: 724
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:15:34-05:00'
sources: []
---

**Scope & Design – Enterprise Document‑Q&A (2 M docs, 4‑week pilot)**  

| Goal | Constraint | Why it drives the design |
|------|------------|--------------------------|
| **Fast turn‑around** | Pilot in 4 weeks | We must use mature components that can be “plug‑and‑play” (not a research build). |
| **Zero data exfiltration** | Security team forbids leaving VPC | All data movement must stay within the customer’s network; we cannot rely on cloud‑hosted embeddings or inference. |
| **Scalable to 2 M docs** | Enterprise size | Retrieval and inference must be linear in corpus size, not quadratic. |

### Architecture

1. **On‑prem vector store** (e.g., Qdrant/PGVector).  
   * Compute dense embeddings locally with a frozen transformer (BERT‑style) fine‑tuned on internal style.  
   * Store both raw text and vectors; the store lives in the VPC, so no external traffic.

2. **Hybrid retrieval** – sparse + dense.  
   * Use Elasticsearch for keyword filtering (fast, low‑cost).  
   * Rank candidates with the vector similarity score to reduce hallucination and improve precision.

3. **Local inference engine** – a distilled LLM (e.g., OPT‑6B or Bloom‑1B) deployed on GPU nodes in the VPC.  
   * The model is kept entirely inside the network; only prompt + retrieved context travels locally.  
   * For safety, wrap inference with a rule‑based post‑filter to catch policy violations.

4. **API gateway** – secure, authenticated endpoints exposing “ask” and “document search”.  
   * All traffic encrypted at rest & in transit within VPC; no egress.

### Non‑obvious insight

*Hybrid retrieval is the key: dense embeddings alone would need a huge index (2 M × 768 dims) that strains memory. By first narrowing to ~200 keyword hits, we keep the vector search lightweight while still leveraging semantic similarity—dramatically reducing latency and cost without compromising accuracy.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
