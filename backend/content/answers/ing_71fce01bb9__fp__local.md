---
qid: ing_71fce01bb9__fp__local
question: 'Explain: Enterprise-grade security and controls — Secure legal AI for the
  most sensitive matters | Harvey'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 382
total_tokens: 559
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:06:48-05:00'
sources: []
---

**Why enterprise‑grade security is mandatory for “legal AI”**

Legal work is a *data‑critical* domain: every document, memo or contract may contain personally identifying information (PII) and trade secrets. The *fundamental problem* is that an AI system must learn from this data without leaking it.  

1. **Information‑theoretic leakage** – If the model can output any substring of a training file with non‑negligible probability, the privacy loss is bounded by mutual information between input and output. To keep this below regulatory thresholds (GDPR, HIPAA), we must enforce *differential privacy* at every data ingestion point.  

2. **Geometric isolation** – Embedding vectors of legal texts live in a high‑dimensional space where similar cases cluster. A simple nearest‑neighbour attack can reconstruct documents if the model exposes raw embeddings. Enforcing *zero‑knowledge* or *tensor‑level encryption* ensures that the geometry is preserved for inference but invisible to adversaries.  

3. **Probabilistic auditability** – Enterprise controls require that every inference path be logged with cryptographic proofs (e.g., Merkle trees). This turns the AI into a verifiable computation, allowing regulators to prove compliance without revealing content.  

*Non‑obvious insight:* The *security* of legal AI is not only about protecting data **in transit** or at rest; it must also protect the *latent knowledge* that emerges during training. Even if raw documents are encrypted, a model can encode their semantics in weight space. Therefore, true enterprise security demands *homomorphic encryption* or *secure multiparty computation* so that learning proceeds on encrypted tensors, keeping even the internal representation confidential.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
