---
qid: ing_0e54a86781__faang__local
question: 'Q8: What is reranking and when would you skip it?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 428
total_tokens: 664
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:17:13-05:00'
sources: []
---

**Clarify**  
Reranking refers to the post‑processing step where a model (often a language or retrieval system) reorders an initial list of candidate outputs based on additional signals—confidence scores, context relevance, user preferences, etc. I’ll assume we’re talking about ranking in NLP tasks such as question answering or search.

**Approach**  
1. **Generate candidates** with the base model.  
2. **Score each candidate** using a secondary metric (e.g., similarity to query, factuality check).  
3. **Sort** by combined score to produce the final list.  
Skip reranking when the initial ranking is already highly reliable or when computational cost outweighs benefit.

**Depth**  
- *When to use:*  
  - Low‑confidence base models (e.g., LLMs with high variance).  
  - Domains needing precision (medical QA, legal search).  
  - Multi‑modal pipelines where different signals can be fused.  
- *How to skip:*  
  - If the base model is fine‑tuned for a specific domain and shows >95 % top‑1 accuracy.  
  - In latency‑critical systems where an extra scoring pass would exceed SLAs.  
  - When training data is scarce, making additional signal unreliable.

**Edge Cases**  
- Overfitting: reranking may amplify model bias if the secondary metric is correlated with that bias.  
- Degenerate scores (all zeros) leading to unchanged order—need a fallback.  
- Memory blow‑up when candidate set is huge; use top‑k filtering first.

**Optimize & Communicate**  
Use lightweight heuristics (e.g., cosine similarity in a shared embedding space) for reranking and benchmark latency vs. recall improvement. Explain that we’ll monitor A/B tests: if ΔRecall < 0.5 % but latency ↑30 %, we drop the step. This shows clear trade‑off reasoning to interviewers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
