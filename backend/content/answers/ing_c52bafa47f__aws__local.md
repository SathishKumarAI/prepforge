---
qid: ing_c52bafa47f__aws__local
question: 'Q: Why is Continuous Batching superior to Static Batching for LLMs?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 475
total_tokens: 711
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:48:41-05:00'
sources: []
---

**Answer (Amazon‑style)**  

*Situation:* While designing a production LLM inference pipeline for a fintech client, we observed that the model’s latency spiked during peak hours.  
*Task:* Reduce average request latency by at least 30 % while keeping cost under the current $5K/month budget.  
*Action:* I moved from **static batching** (pre‑defined batch size of 8) to **continuous batching** using an event‑driven Lambda that aggregates requests in a Redis cache and triggers a SageMaker endpoint when either *time threshold* (50 ms) or *size threshold* (12) is hit. This eliminates the idle time static batches incur and adapts to traffic bursts.  
*Result:* Latency dropped from 240 ms to 165 ms (32 % improvement). CPU utilization rose from 45 % to 68 %, but overall cost fell by 18 % because we eliminated under‑utilized GPU hours. The solution also reduced memory churn, improving error rates from 0.9 % to <0.2 %.  

**Why Continuous Batching Wins**

| Aspect | Static Batching | Continuous Batching |
|--------|-----------------|---------------------|
| **Throughput** | Fixed; may under‑utilize resources during low traffic | Dynamic; matches load, higher GPU utilization |
| **Latency** | High when batch not full | Low because triggers on time/size thresholds |
| **Scalability** | Requires manual scaling of batch size | Auto‑scales via Lambda & DynamoDB streams |
| **Cost** | Idle GPUs waste money | Efficient use of spot instances, lower spend |

*AWS services used:* SageMaker RealTimeInference, Lambda, Redis (Elasticache), S3 for model storage.  

**Bar‑raiser focus:** Ownership – I owned the end‑to‑end pipeline; Dive Deep – measured latency & CPU metrics; Quantified Impact – 32 % latency reduction and 18 % cost savings; Learned from failure – initial static batch caused “cold start” delays, prompting the shift to continuous batching.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
