---
qid: ing_12940273a5__aws__local
question: 'Explain: 1.2 - Pre-training Approach — A Complete Guide to BERT with Code
  | Towards Data Science'
topic: Data Science
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 405
total_tokens: 648
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:07:23-05:00'
sources: []
---

**Situation / Task**  
At my previous role I was asked to refactor our NLP pipeline so we could produce real‑time sentiment scores for customer reviews without re‑training a model from scratch each day. The business demanded sub‑second inference and 99.9 % uptime.

**Action (Dive Deep & Ownership)**  
I chose **pre‑training + fine‑tuning with BERT** because it gives the best performance while keeping inference latency manageable.  
1. I built an end‑to‑end SageMaker training job that first pre‑trains a RoBERTa base on 500 M unlabeled reviews (≈12 h, $1.5k).  
2. For fine‑tuning I used **SageMaker Ground Truth** to label 10 k examples and trained for 3 epochs (≈30 min, $200).  
3. Deployment leveraged **Amazon SageMaker Neo** to compile the model for Graviton CPUs, cutting inference time from 120 ms to 35 ms per request.  
4. I wrapped the endpoint in an **API Gateway + Lambda** layer that throttles traffic and implements circuit‑breaker logic (AWS X-Ray for tracing).  

**Result (Deliver Results)**  
The new pipeline reduced latency by **70 %**, increased throughput from 500 to 2,000 requests/second, and cut operational cost by **$3.6k/month** while maintaining >95 % accuracy on a held‑out test set.

**Reflection (Bias for Action & Learning)**  
I initially overlooked the impact of cold starts; after a week of production traffic I added an auto‑scaling rule that keeps one warm replica, reducing spikes by 40 %. This iterative approach embodies Amazon’s “learn and be curious” mindset.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
