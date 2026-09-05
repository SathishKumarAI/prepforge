---
qid: ing_fdb241b15d__star__local
question: 'Explain: No Model Training — Secure legal AI for the most sensitive matters
  | Harvey'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 320
total_tokens: 561
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:56:07-05:00'
sources: []
---

**Situation**  
At a multinational law firm, we were tasked with automating document review for a high‑profile corporate takeover that involved classified trade secrets and regulatory scrutiny. The client demanded zero risk of data leakage or model bias.

**Task**  
Build a secure AI system that could extract relevant clauses and flag risks without ever training on the confidential documents themselves.

**Action**  
I architected an “on‑prem, no‑training” pipeline: first, we deployed a fine‑tuned open‑source transformer (BERT) as a feature extractor. The model was pre‑trained only on public legal corpora and then wrapped in a secure enclave on the firm’s servers. Next, I implemented a differential‑privacy layer that added calibrated noise to the embeddings before any downstream processing. Finally, we used a rule‑based overlay—regular expressions and ontology mapping—to interpret the noisy features, ensuring that no raw text ever left the encrypted environment.

**Result**  
The solution processed 12,000 pages in under 8 hours with an 87 % accuracy on clause classification, compared to 74 % for the legacy manual review. Importantly, we passed a third‑party security audit with zero data leakage incidents and saved the client $350k in potential regulatory fines. I learned that combining pre‑trained models with privacy safeguards can deliver high performance while meeting stringent legal constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
