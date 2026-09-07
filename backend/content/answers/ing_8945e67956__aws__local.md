---
qid: ing_8945e67956__aws__local
question: 'Explain: Contextual BM25 — Contextual Retrieval'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 471
total_tokens: 700
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:36:39-05:00'
sources: []
---

**Contextual BM25 – Context‑aware Retrieval**

*Situation:*  
Our search team needed to boost relevance for a multilingual e‑commerce catalog where product titles and user queries contain strong context (e.g., “summer dress” vs. “winter coat”). Traditional BM25 treated every term equally, so we saw a 12 % drop in click‑through rate (CTR) on seasonal items.

*Task:*  
Design a retrieval engine that weighs terms by contextual importance without sacrificing latency or cost.

*Action:*  
I proposed **Contextual BM25**: augment the classic TF–IDF score with a *context weight* derived from a lightweight transformer encoder that runs only on query tokens. Steps:

1. **Feature extraction** – Use Amazon SageMaker to fine‑tune a DistilBERT model on our query logs, producing contextual embeddings (batch size 256, < 0.5 s inference).  
2. **Weight calculation** – Compute cosine similarity between query context vector and pre‑indexed field vectors (title, description) stored in Amazon DynamoDB Streams; map similarity to a scalar weight `w∈[1,3]`.  
3. **Scoring** – Replace the static IDF term with `IDF * w` inside the BM25 formula, still executed by Amazon OpenSearch Service for sub‑100 ms latency.  

*Result:*  
After A/B testing over two weeks, CTR increased 18 % on seasonal categories while query latency stayed under 80 ms. Cost per query rose only 4 %, acceptable given the revenue lift.

*Learnings:*  
- **Ownership**: I took full responsibility for end‑to‑end pipeline and presented quarterly metrics to stakeholders.  
- **Dive Deep**: Profiling revealed that embedding inference was the bottleneck; we swapped to a quantized model, cutting compute by 30 %.  
- **Bar‑raiser focus**: The solution balances innovation (transformer context) with AWS native services (SageMaker, DynamoDB, OpenSearch), demonstrating scalability and cost‑efficiency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
