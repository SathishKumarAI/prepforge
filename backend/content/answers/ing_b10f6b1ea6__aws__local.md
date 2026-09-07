---
qid: ing_b10f6b1ea6__aws__local
question: 'Explain: Model Selection Guide — Reranking Strategies'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 405
total_tokens: 634
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:05:28-05:00'
sources: []
---

**Situation / Task**  
I led a cross‑functional squad at an e‑commerce platform to boost search relevance. Our goal: implement a reranking model that could be swapped in without downtime and deliver a 12 % lift in click‑through rate (CTR).  

**Action**  
1. **Ownership & Dive Deep:** I mapped the entire search pipeline—crawler → indexer → initial ranking → UI. I identified latency bottlenecks by instrumenting each microservice with CloudWatch metrics, discovering that the final reranking step added ~200 ms per query when using a heavy transformer model.  
2. **Design & AWS Services:**  
   * Deployed two candidate models (LightGBM and DistilBERT) in SageMaker endpoints behind an Application Load Balancer.  
   * Implemented an A/B router using API Gateway + Lambda that forwards 90 % of traffic to the baseline model, 10 % to the new endpoint, collecting query‑level latency & CTR via Kinesis Data Streams.  
3. **Bias for Action & Deliver Results:** Rolled out the reranker gradually. After 48 h, we observed a 13 % CTR lift and maintained <250 ms per request. Cost was 15 % higher, but the revenue increase (≈$2M/month) more than compensated.  
4. **Learning from Failure:** A mid‑night deployment caused a spike in errors; I instituted automated rollback using CloudFormation stack policies.

**Result**  
- CTR +13 %, Avg Revenue per Session +18 %.  
- Latency <250 ms, 99.9 % availability via Multi‑AZ SageMaker endpoints.  

**Bar‑raiser takeaways:** clear ownership, deep metric analysis, quantified business impact, and rapid learning loop.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
