---
qid: ing_aa0b64c4d1__fp__local
question: 'Explain: Next Steps — BigLaw Bench Deep Dive: Retrieval | Harvey'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 505
total_tokens: 678
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:06:43-05:00'
sources: []
---

**Next Steps – Big Law Bench Deep‑Dive: Retrieval (Harvey)**  
1. **Define the legal problem** – The bench must decide whether a contractual clause is enforceable under *Section 2* of the *Contract Act*. The core question is: “Which prior cases, statutes, or policy statements most closely resemble this fact pattern?”  
2. **Map to retrieval fundamentals** – Retrieval is an information‑theoretic problem: given a query (the case facts), find documents that maximize relevance. It must satisfy two constraints: *coverage* (all pertinent precedents) and *precision* (exclude irrelevant ones).  
3. **Construct the index** – Use a **vector‑space model** with term‑frequency inverse‑document‑frequency weighting on the corpus of jurisdictional decisions, statutes, and secondary sources. Add a **semantic layer**: embed passages via transformer models to capture context beyond keyword overlap.  
4. **Query expansion & disambiguation** – The facts mention “performance‑based payments.” Expand with synonyms (“target‑price”, “incentive fee”) and disambiguate by weighting legal‑terminology n‑grams that co‑occur with *Section 2* citations.  
5. **Rank & filter** – Rank by cosine similarity to the query vector, then prune using a *semantic relevance threshold* (e.g., 0.85). Apply a lightweight *temporal decay* so newer cases get a modest boost, reflecting jurisprudential evolution.  
6. **Human‑in‑the‑loop validation** – The bench reviews the top 10 hits, verifies that each contains an application of *Section 2*, and notes any counter‑examples. This step surfaces *non‑obvious insight*: often the decisive precedent is a *secondary source* (law review article) that synthesizes multiple cases; retrieval engines tuned only to primary law miss it.  
7. **Iterate & refine** – Feed the bench’s feedback back into the model: adjust term weights, retrain embeddings on highlighted passages, and re‑run retrieval until confidence > 0.92.  

By treating legal precedent search as a precision‑coverage optimization problem, we ensure that every relevant authority is surfaced while filtering noise—exactly what the Big Law bench needs to make a well‑grounded decision.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
