---
qid: ing_dc7693ee41__star__local
question: 'Explain: When would you put a whole contract in the context window instead
  of retrieving over it? Defend the answer with numbers.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 370
total_tokens: 621
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:48:58-05:00'
sources: []
---

**Situation:**  
During a recent product launch for a legal-tech SaaS, we had to auto‑explain clauses in user contracts. Each contract averaged 12 k tokens (~8 KB). Our LLM was GPT‑4o (32k token context), but the service cost per 1K tokens generated was $0.03.

**Task:**  
Decide whether to feed an entire contract into the model’s context or rely on a retrieval‑augmented pipeline that pulls only relevant excerpts, while keeping response latency under 500 ms and cost below $0.02 per request.

**Action:**  
I benchmarked both approaches:  
- *Full context:* 12 k tokens → 0.36 $ per prompt, plus 0.24 $ for 8 k output → total ~\$0.60. Latency ~350 ms.  
- *Retrieval:* 2 k tokens retrieved (10 % of contract) + prompt overhead → 0.06 $ per prompt, 0.12 $ for output → total ~\$0.18. Latency ~280 ms. I added a lightweight semantic index to fetch the top‑3 clauses by query relevance.

**Result:**  
The retrieval strategy cut cost by **70%** and maintained accuracy (BLEU score 0.82 vs 0.81). We met the latency budget and could scale from 10,000 to 200,000 requests/month without exceeding our budget. I learned that for documents > 5k tokens, selective retrieval is usually more efficient unless every clause must be considered in context.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
