---
qid: ing_fae71752a9__fp__local
question: 'Explain: For Law Firms — Harvey | AI software for legal and professional
  services'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 316
total_tokens: 490
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:53:17-05:00'
sources: []
---

**Harvey: a principled problem‑solver for legal practice**

At its core, every lawyer faces the *information bottleneck*—millions of statutes, cases, and contracts must be sifted to answer a single client question in minutes. Harvey turns this bottleneck into an *optimization problem*: maximize relevance while minimizing effort. It does so by building a **domain‑specific language model** fine‑tuned on thousands of internal documents, thereby encoding the legal ontology (e.g., “material breach” ↔ “failure to perform”) as high‑dimensional vectors.

The system first performs *semantic indexing*—each paragraph is embedded and stored in an approximate nearest‑neighbor graph. When a query arrives, it retrieves a ranked set of candidate passages and then applies a lightweight **neural re‑ranker** that evaluates contextual fit (e.g., jurisdictional nuance). The final answer is distilled into a concise, citation‑rich summary, which the lawyer can review or expand.

A non‑obvious insight: Harvey’s efficiency stems not from raw speed but from *structured uncertainty*. By explicitly modeling confidence scores for each retrieved clause, the system flags ambiguous passages for human inspection, reducing the risk of overreliance on AI. This hybrid certainty framework keeps lawyers in control while still enjoying massive productivity gains—exactly what modern legal teams need to stay competitive.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
