---
qid: ing_e9c99c4351__star__local
question: 'Q: Your RAG evaluation pipeline costs $500/day in LLM judge calls. How
  do you reduce it?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 337
total_tokens: 585
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:15:50-05:00'
sources: []
---

**Situation**  
During the rollout of our Retrieval‑Augmented Generation (RAG) service for customer support, each query triggered a call to an external LLM judge to score relevance and correctness. With ~10 k queries daily, that was about 500 calls per day—$500 in API usage.

**Task**  
I needed to cut the cost by at least 60 % while keeping accuracy above 92 % and latency under 300 ms.

**Action**  
1. **Local scoring model** – Trained a lightweight transformer (distilBERT fine‑tuned on our QA logs) to predict judge scores with 0.94 AUC.  
2. **Adaptive fallback** – Only sent queries to the LLM judge when the local model’s confidence fell below 0.8 or when it flagged high uncertainty based on variance across top‑k retrieved docs.  
3. **Batching & caching** – Grouped identical queries into a single judge call and cached results for 24 h, reducing redundant calls.  
4. **Cost monitoring dashboard** – Built a Grafana panel to track daily spend vs. accuracy thresholds in real time.

**Result**  
Daily LLM judge calls dropped from ~10 k to ~3 k, cutting costs to ~$140/day (72 % reduction). Accuracy stayed at 93 %, and average latency fell to 210 ms. I learned that a hybrid local‑LLM strategy with confidence gating can dramatically reduce spend without sacrificing quality.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
