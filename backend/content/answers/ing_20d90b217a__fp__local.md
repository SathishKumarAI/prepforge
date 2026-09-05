---
qid: ing_20d90b217a__fp__local
question: 'Explain: Design an enterprise assistant that answers questions over a company''s
  internal documents, respecting per-user permissions (Amazon Q-shaped).'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 183
output_tokens: 487
total_tokens: 670
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:16:11-05:00'
sources: []
---

**Why the problem matters**

An enterprise’s knowledge is a *graph* of facts: documents, policies, code, contracts. Users need instant answers, but only to the portion of the graph they are allowed to see. The system must therefore solve **query‑on‑filtered‑subgraphs**: given a natural‑language question and a user‑specific permission mask, return an answer that respects the mask while still being accurate.

**Fundamental solution**

1. **Document representation**  
   Encode every document as a *latent vector* \(d_i\) using a transformer (e.g., BERT). Store these vectors in an index for fast retrieval.

2. **Permission encoding**  
   For each user \(u\), build a *permission mask* \(p_u \in \{0,1\}^{|D|}\) where 1 means “allowed to see document i”. This is the simplest linear constraint: any answer must be a weighted sum of documents with weights only on allowed indices.

3. **Retrieval‑then‑filter**  
   * Retrieve top‑\(k\) candidate vectors \(C_q\) for query \(q\) using cosine similarity.  
   * Project each candidate onto the user’s mask: \(\tilde d_i = p_u[i] \cdot d_i\).  
   * Re‑rank by similarity to \(q\) after masking; this guarantees no leakage.

4. **Answer synthesis**  
   Fine‑tune a decoder (e.g., T5) on pairs \((q, \tilde C_q)\) → answer, where the decoder is conditioned on the masked context only. During inference, the decoder never sees disallowed vectors.

**Non‑obvious insight**

The *linear projection* of document embeddings onto the permission mask is equivalent to training a model under *hard constraints*. By enforcing the mask at retrieval time rather than in the decoder loss, we avoid “leakage through attention” that plagues end‑to‑end fine‑tuning. This separation turns an NP‑hard policy enforcement problem into a simple dot‑product filtering step, yielding both correctness guarantees and sub‑second latency—essential for Amazon‑Q‑style enterprise assistants.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
