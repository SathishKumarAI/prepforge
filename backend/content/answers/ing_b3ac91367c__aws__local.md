---
qid: ing_b3ac91367c__aws__local
question: 'Explain: Static vs. Dynamic Batching — Batching Strategies'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 439
total_tokens: 670
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:11:06-05:00'
sources: []
---

**Situation / Task**  
At my previous role I led the launch of a real‑time recommendation engine that served > 10k inference requests per second for an e‑commerce platform. The team needed to decide between **static** and **dynamic batching** to meet our latency SLA (≤ 200 ms) while keeping costs low.

**Action**  
I performed a *dive deep* analysis of request patterns, measuring 70% of traffic as bursty with short inter‑arrival times. I designed two prototypes:  

| Strategy | AWS Services | Key Trade‑offs |
|----------|--------------|----------------|
| Static batching (fixed size = 32) | SageMaker Endpoint + Lambda | Predictable throughput, higher latency during low load, easier to scale horizontally |
| Dynamic batching (max delay = 10 ms, max batch = 64) | Amazon ECS Fargate + SQS FIFO + Lambda | Lower average latency, efficient GPU utilisation, but requires careful back‑pressure handling |

I ran a 48‑hour A/B test. **Dynamic batching** reduced mean latency from 210 ms to **145 ms** (30% improvement) and cut GPU usage by 18%, saving ~$3k/month.

**Result**  
We rolled out dynamic batching, delivering 1.2× more recommendations per second without violating SLA. The initiative earned a “Customer Obsession” badge for keeping the customer experience smooth during peak shopping seasons.

**Bar‑raiser notes**  
*Ownership*: I took full responsibility for measuring impact and iterating on design.  
*Dive Deep*: Detailed latency profiling guided the choice.  
*Quantified Impact*: 30% latency drop, 18% cost saving.  
*Learning from Failure*: Early static batch tests highlighted waste under bursty traffic; that insight drove the dynamic approach.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
