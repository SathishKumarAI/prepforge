---
qid: ing_0a1f8d16e0__think__local
question: How would you evaluate multilingual retrieval quality - a customer's employees
  query in French and Korean over mostly-English documents?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 199
output_tokens: 434
total_tokens: 633
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T03:23:47-05:00'
sources: []
---

**1️⃣ Clarify the scenario & assumptions**  
   * Identify what “retrieval quality” means for the client (precision, recall, relevance score).  
   * Assume documents are predominantly English but may contain some French/Korean snippets; queries come in French or Korean.  
   * Note that the user base is internal employees—contextual relevance matters.

**2️⃣ Adopt a retrieval‑evaluation framework**  
   * Use standard IR metrics (MAP, nDCG@k, precision@k).  
   * Extend them with cross‑lingual considerations: language‑agnostic embeddings or translation pipelines.  
   * Consider a two‑stage pipeline: translate query → retrieve → post‑filter.

**3️⃣ Step‑by‑step reasoning**  
   1. **Build a multilingual index** (e.g., use multilingual BERT or LASER to embed all docs).  
   2. **Translate queries** into English (or directly vectorize in the same space).  
   3. Run retrieval, collect ranked list.  
   4. Compute metrics on a held‑out test set of French/Korean queries with known relevance judgments.  
   5. Compare against baseline (e.g., naive translation + BM25) to quantify gains.

**4️⃣ Avoid common traps**  
   * Don’t assume perfect translation—error propagation hurts recall.  
   * Don’t ignore query drift: a literal translation may miss local terminology.  
   * Beware of over‑fitting to a small test set; use diverse queries across domains.

**5️⃣ Sanity‑check & communicate**  
   * Plot precision–recall curves per language; look for dips in French/Korean.  
   * Explain results with concrete examples: “For the query ‘développer l’API’, 80 % of top‑10 docs are relevant.”  
   * Summarize actionable insights (e.g., invest in better translation models or augment English docs with localized summaries).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
