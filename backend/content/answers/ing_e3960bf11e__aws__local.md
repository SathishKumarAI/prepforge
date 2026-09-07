---
qid: ing_e3960bf11e__aws__local
question: 'Explain: Tradeoff Discussion (5 minutes) — System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 428
total_tokens: 661
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:53:35-05:00'
sources: []
---

**Situation & Task**  
In a recent role I led the redesign of an ML‑powered recommendation engine that served 3 M daily users. The client demanded *real‑time* personalization while keeping latency under 50 ms and cost below $0.05 per inference.

**Action – Trade‑off Design**  

| Requirement | Trade‑off | AWS Service | Rationale |
|-------------|-----------|-------------|-----------|
| **Speed vs Accuracy** | Use a lightweight *DistilBERT* model instead of full BERT | **Amazon SageMaker Neo + Lambda** | 2× faster inference, <5 % loss in NDCG |
| **Scalability vs Cost** | Cache top‑K recommendations per user with Redis | **Amazon ElastiCache for Redis** | Reduces 70 % invocations to Lambda; cold start costs avoided |
| **Availability vs Complexity** | Deploy dual region with Route 53 latency routing | **Route 53 + CloudFront** | <99.9 % SLA, minimal extra ops overhead |
| **Observability vs Overhead** | Instrument with AWS X-Ray & CloudWatch Logs | **X‑Ray / CloudWatch** | 10 % of compute time added for trace collection; gives actionable insights |

I quantified impact: post‑migration latency dropped from 120 ms to 38 ms, NDCG@10 improved by 3.2%, and monthly inference cost fell from $12K to $4.8K.

**Result**  
The system now supports 5× traffic with a 90% reduction in operational overhead. I presented the trade‑off matrix to leadership, received buy‑in for the architecture, and iterated on the cache strategy based on real usage data—demonstrating **Ownership**, **Dive Deep**, and **Bias for Action**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
