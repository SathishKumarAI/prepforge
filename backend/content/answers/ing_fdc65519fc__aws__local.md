---
qid: ing_fdc65519fc__aws__local
question: 'Explain: Inference Time Tradeoffs — Reranking Strategies'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 427
total_tokens: 658
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:51:55-05:00'
sources: []
---

**Situation & Task (Customer Obsession)**  
At my last startup we built a search‑to‑purchase AI that returned 1 000 ranked results per query. Users complained the top‑10 were often irrelevant, hurting conversion by 12 %. I was tasked to redesign the reranking pipeline so that latency stayed <200 ms while improving relevance.

**Approach (Dive Deep & Ownership)**  
I split inference into two stages:  
1️⃣ **Fast pre‑ranker** – a lightweight linear model hosted in an Amazon SageMaker *Endpoint* with *Multi‑Model* support, cached via ElastiCache Redis to keep 95 % of queries under 30 ms.  
2️⃣ **Selective reranker** – a heavier BERT‑based model served by a GPU‑enabled Lambda@Edge function that processes only the top‑50 candidates. The function pulls feature vectors from DynamoDB and returns a final score.

I introduced *cost‑aware batching* (max 10 requests per batch) to amortize GPU launch time, reducing average cost per inference from $0.02 to $0.008 while keeping total latency <180 ms.

**Result (Deliver Results)**  
Post‑deployment, top‑10 relevance rose by **18 %**, boosting conversion by **7 %** and increasing revenue by **$1.2M annually**. The system maintained 99.9 % uptime with a predictable cost of $15k/month.

**Bar‑raiser takeaways**  
- Ownership: I drove the entire redesign, from data pipeline to deployment.  
- Dive Deep: I profiled latency hotspots and engineered batching logic.  
- Quantified impact: metrics on conversion & cost were central.  
- Learning from failure: Initial attempts over‑cached heavy models; pivoting to selective reranking taught me to balance accuracy vs. cost.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
