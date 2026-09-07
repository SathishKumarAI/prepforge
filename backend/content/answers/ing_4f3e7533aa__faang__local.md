---
qid: ing_4f3e7533aa__faang__local
question: 'Q5: How would you evaluate a RAG system?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 463
total_tokens: 697
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:48:44-05:00'
sources: []
---

**Clarify**  
The question asks how to *evaluate* a Retrieval‑Augmented Generation (RAG) model—i.e., the pipeline that first retrieves relevant documents and then generates an answer conditioned on them. I’d confirm whether we care about end‑to‑end user satisfaction, just retrieval quality, or both; whether evaluation is offline (gold queries & docs) or online A/B testing; and what metrics are available (accuracy, latency, cost).  

**Approach**  
1. **Define success criteria**: task accuracy (e.g., QA F1), relevance of retrieved set, generation coherence, overall latency.  
2. **Collect a benchmark dataset** with ground‑truth answers and relevant documents.  
3. **Run the pipeline** to obtain retrieval scores (recall@k, MRR) and generation metrics (BLEU, ROUGE, or human judgment).  
4. **Ablation studies**: swap out retriever or generator to isolate contributions.  
5. **Online monitoring**: track latency, token cost, and user satisfaction signals.

**Depth**  
- Retrieval: compute recall@k against gold docs; use MRR for ranking quality.  
- Generation: evaluate factual correctness (e.g., precision/recall of extracted facts) and language quality (BERTScore).  
- End‑to‑end: compute task‑specific accuracy, e.g., F1 on QA pairs.  
- Complexity: O(N log N) for indexing; retrieval latency linear in top‑k; generation cost proportional to token count.

**Edge Cases**  
- *Missing gold docs*: use human annotators to judge relevance.  
- *Noisy retriever outputs*: measure robustness by injecting irrelevant passages.  
- *Cold start queries*: evaluate fallback behavior.

**Optimize & Communicate**  
Highlight trade‑offs: tighter retrieval (higher precision) reduces generation burden but may miss answers; broader recall increases latency. Propose incremental improvements—e.g., relevance feedback loops, caching popular queries, or distilling the generator for faster inference. Summarize findings in a concise dashboard and explain how each metric informs product decisions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
