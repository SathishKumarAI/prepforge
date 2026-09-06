---
qid: ing_0b042ae424__think__local
question: You retrieved 50 candidate passages for a query but the model's useful context
  budget is ~10. How do you choose, and how do you know your choices are good?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 213
output_tokens: 362
total_tokens: 575
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T03:26:23-05:00'
sources: []
---

**1️⃣ Clarify the goal & constraints**  
- *What am I optimizing for?*  – Maximize relevance & completeness within a 10‑token budget.  
- *Assumptions:* each passage is roughly the same length; the model can process only ~10 tokens of context; no overlap between passages.

**2️⃣ Adopt a lightweight scoring framework**  
Treat it as a knapsack problem with weight = token count, value = relevance score.  
- Compute a *relevance* estimate for each candidate (e.g., BM25 against the query).  
- Estimate *token length* via simple heuristics (average word → 1.33 tokens).

**3️⃣ Step‑by‑step selection**  
a) Rank passages by relevance per token (`score / tokens`).  
b) Greedily pick top items until the cumulative token count ≈ 10.  
c) If a passage is too long, consider truncating or splitting it (but keep semantic integrity).  

**4️⃣ Avoid common pitfalls**  
- Don’t just take the first 10 passages; relevance can be non‑linear.  
- Ignoring overlap may duplicate information—check for redundancy before finalizing.  
- Over‑truncation can lose key context; ensure critical terms remain.

**5️⃣ Sanity checks & communication**  
- Verify total token count ≈ 10 with a tokenizer.  
- Spot‑check the selected set against the query to confirm coverage.  
- Explain choices: “I ranked by relevance per token, then filled the 10‑token budget while ensuring minimal overlap.”  

This process balances efficiency (quick ranking) and effectiveness (maximizing useful context).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
