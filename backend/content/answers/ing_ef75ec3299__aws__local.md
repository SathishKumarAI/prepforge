---
qid: ing_ef75ec3299__aws__local
question: 'Explain: Using LLMs as Rerankers — Reranking Strategies'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 426
total_tokens: 661
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:18:37-05:00'
sources: []
---

**Situation / Task**  
At a media‑search startup, the click‑through rate (CTR) on our video search fell from **12 % to 8 %** after adding more content. I owned the task of improving relevance without adding latency.

**Action**  
I introduced an LLM‑based reranker as a second stage in the ranking pipeline.  
1. **Data‑driven prep:** We stored the top‑10 TF‑IDF candidates per query in DynamoDB, each with metadata (view count, recency).  
2. **Reranking strategy:** A 4‑layer transformer (BERT‑base) fine‑tuned on click logs was wrapped in a Lambda@Edge function behind CloudFront, ensuring < 10 ms cold start via provisioned concurrency.  
3. **AWS services used** – SageMaker for model training, Lambda for inference, DynamoDB for candidate storage, CloudWatch for A/B metrics.  
4. **Scalability & cost:** The model size (~110 MB) fits in the 512 MB Lambda memory; we capped concurrent requests to 2k per region, costing ~$0.03/1M calls—< 5 % of existing ad spend.

**Result**  
A/B testing over 4 weeks showed a **CTR lift of 18 % (from 8 % to 9.44 %)**, translating to an estimated $2.3 M annual revenue increase at our current CPM.  

**Reflection**  
I learned that *Customer Obsession* drives the choice of relevance metric, while *Dive Deep* guided the Lambda‑Edge trade‑offs. The bar‑raiser will note my ownership (end‑to‑end), quantitative impact, and iterative failure handling when a model hit 12 % latency initially, leading to a better warm‑start strategy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
