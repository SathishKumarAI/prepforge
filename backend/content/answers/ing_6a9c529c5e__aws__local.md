---
qid: ing_6a9c529c5e__aws__local
question: 'Explain: Reciprocal Rank Fusion (RRF) for Combining Results'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 389
total_tokens: 621
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:25:37-05:00'
sources: []
---

**Situation / Task**  
At my previous role I was tasked with improving the relevance of our search engine for a global e‑commerce catalog. The engineering team had built several ranking models (BERT‑based semantic, popularity, click‑through), but their outputs were disjointed and produced inconsistent top‑10 lists.  

**Action**  
I introduced **Reciprocal Rank Fusion (RRF)**—a simple yet powerful ensemble that aggregates ranked lists by summing the reciprocals of each document’s rank plus a constant \(k\). I implemented it as an AWS Lambda layer invoked after each model outputs, feeding results into Amazon OpenSearch Service. To keep latency under 200 ms, I pre‑cached the top‑50 items from every model in Redis (Amazon ElastiCache) and performed RRF in memory.  

I benchmarked three scenarios: single best model, naïve union, and RRF. Using AWS CloudWatch metrics I measured Mean Reciprocal Rank (MRR) and click‑through rate (CTR).  

**Result**  
RRF lifted MRR from 0.42 to **0.56** (+33 %) and boosted CTR by **18 %** over a two‑week A/B test, translating to an estimated $1.2 M annual revenue lift. The Lambda solution cost <$50/month versus the $350/month of running all models concurrently in EC2.  

**Learning**  
I learned that “ownership” means iterating on the simplest idea first; RRF’s O(1) complexity allowed quick wins while still being scalable and cost‑effective. It also taught me to quantify impact early, so stakeholders could see tangible business value.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
