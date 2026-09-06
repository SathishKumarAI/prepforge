---
qid: ing_be074ebf76__think__local
question: 'Explain: Q6: Describe hybrid search and when you would use it'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 192
output_tokens: 474
total_tokens: 666
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T13:30:38-05:00'
sources: []
---

**1️⃣ Clarify the request & set assumptions**  
- *Clarify*: “Hybrid search” refers to combining keyword‑based retrieval with semantic (vector) similarity, not a specific tool.  
- *Assumptions*: The audience knows basic IR concepts; we’re describing use‑cases and trade‑offs rather than code.

**2️⃣ Mental model / framework**  
Think of information retrieval as two axes:  
1. **Exactness** – keyword matching (high precision, low recall).  
2. **Relevance beyond wording** – semantic similarity (higher recall, possible noise).  
Hybrid search sits on a continuum between these extremes; it weights both components.

**3️⃣ Step‑by‑step reasoning**  
- *Identify problem*: Need precise answers but also want to capture intent when phrasing varies.  
- *Build hybrid pipeline*:  
  1. Run a keyword index (e.g., BM25) for fast, high‑precision hits.  
  2. Generate embeddings for query & documents; compute cosine similarity.  
  3. Fuse scores (linear combination or learned re‑ranking).  
- *When to use*:  
  - Multi‑domain knowledge bases where queries may be ambiguous.  
  - Customer support KBs with varied phrasing but same intent.  
  - Legal / medical corpora where exact terminology matters but synonyms are common.

**4️⃣ Common traps & wrong turns**  
- **Over‑relying on embeddings**: leads to “semantic drift” and irrelevant hits.  
- **Neglecting index freshness**: embeddings may become stale if the corpus updates frequently.  
- **Assuming linear fusion always works**: sometimes a learned re‑ranker (e.g., LambdaMART) yields better results.

**5️⃣ Sanity‑check & communicate**  
- Verify that top hits satisfy both keyword relevance *and* contextual fit.  
- Explain trade‑offs to stakeholders: “We’ll get more recall, but we must tune the weight to avoid noise.”  
- Provide a simple diagram (keyword → BM25 ↔ embedding similarity → final rank) to illustrate the flow.

This structured approach lets you articulate hybrid search clearly and decide when it’s the right tool.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
