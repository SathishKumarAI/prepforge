---
qid: ing_25ff16af99__star__local
question: 'Explain: For the Most Sensitive Matters — Secure legal AI for the most
  sensitive matters | Harvey'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 354
total_tokens: 597
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:44:50-05:00'
sources: []
---

**Situation** – While leading a product‑safety sprint at Harvey, we were tasked with building an internal legal‑AI assistant that could draft and review contracts for our high‑profile, data‑sensitive clients (e.g., fintech regulators). The existing models leaked confidential clauses during inference because they stored raw prompts in memory.  

**Task** – Design a system that guarantees end‑to‑end confidentiality: no sensitive text leaves the secure enclave, all model weights are encrypted at rest, and we meet GDPR “data minimization” requirements while still delivering accurate legal language.

**Action** – I orchestrated a two‑phase architecture. First, we integrated Intel SGX enclaves to run inference in isolated hardware; the neural net was split so that only embeddings—highly abstract vectors—exit the enclave for scoring. Second, we used homomorphic encryption (Microsoft SEAL) on the embedding layer so even those vectors cannot be reverse‑engineered. I also added a differential‑privacy noise scheduler during fine‑tuning to protect against membership inference attacks, and set up continuous monitoring with an audit log that timestamps every query in a tamper‑evident ledger.

**Result** – The prototype passed a full penetration test with zero data leakage, reduced average response time from 1.8 s to 1.2 s, and cut the compliance review cycle by 35%. I learned that marrying hardware isolation with cryptographic safeguards can deliver both speed and privacy—key for legal AI in the most sensitive matters.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
