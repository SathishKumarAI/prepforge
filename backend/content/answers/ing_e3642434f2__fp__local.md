---
qid: ing_e3642434f2__fp__local
question: 'Explain: Design a Copilot feature that answers questions over a user''s
  work email, documents, and meetings - without ever leaking content the user can''t
  access.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 189
output_tokens: 462
total_tokens: 651
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:03:13-05:00'
sources: []
---

**Copilot for Private Knowledge Retrieval**

The core problem is *retrieval*—answering a user’s question by pulling evidence from email, docs, and meeting transcripts—while guaranteeing that the assistant never learns or exposes any content the user cannot see.  

1. **Local Embedding Engine**  
   All documents are tokenized and projected into a high‑dimensional semantic space on the client device. The model stores only these embeddings (≈ 256 bits per token) instead of raw text, eliminating direct access to the original content.

2. **Query‑to‑Embedding Translation**  
   When the user asks a question, the copilot converts it into an embedding locally and performs a nearest‑neighbor search over the local index. The returned candidate snippets are then *re‑fetched* from disk by the client, wrapped in a zero‑knowledge proof that the snippet indeed belongs to the original document.

3. **Secure Enclave Execution**  
   All inference (embedding generation, similarity scoring) runs inside an isolated enclave (TPM/SGX). The enclave never writes raw text to persistent storage; it only outputs abstract relevance scores and identifiers back to the UI.

4. **Differential‑Privacy Layer**  
   Before any score is exposed, Laplacian noise calibrated to a privacy budget is added, ensuring that even aggregated logs cannot leak individual sentences.

5. **No Central Server Storage**  
   The cloud component only receives hashed document IDs and encrypted metadata; it can’t reconstruct the content, so no leakage occurs.

---

### Non‑obvious insight

The key trick is *semantic locality*: by keeping embeddings local but searchable, the assistant can answer complex questions without ever exposing raw data. This sidesteps traditional “privacy‑by‑design” (encryption) and instead relies on **information geometry**—the idea that proximity in embedding space implicitly encodes relevance—thereby turning a privacy constraint into an operational advantage.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
