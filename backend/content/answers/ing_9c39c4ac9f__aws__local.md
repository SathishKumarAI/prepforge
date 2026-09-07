---
qid: ing_9c39c4ac9f__aws__local
question: 'Explain: Pitfall 5: No Graceful Degradation — Common Pitfalls'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 416
total_tokens: 651
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:18:05-05:00'
sources: []
---

**Pitfall 5 – No Graceful Degradation**

*Situation (S)*  
I led the rollout of an AI‑driven recommendation engine for a global e‑commerce platform. The model ran on SageMaker, feeding real‑time scores to Lambda functions that updated user feeds.

*Task (T)*  
During a traffic surge, GPU nodes throttled and the inference queue filled. Without graceful degradation, every request stalled, causing a 30 % spike in page load times and a 12 % drop in conversion rate within minutes.

*Action (A)*  
1. **Design fallback**: Added an *Elastic Inference* tier that served cached top‑N recommendations from DynamoDB when SageMaker latency exceeded 200 ms.  
2. **Circuit breaker**: Implemented API Gateway throttling + CloudWatch alarms; once the queue depth hit 500, Lambda switched to the fallback path automatically.  
3. **Observability**: Deployed X-Ray traces and a Kinesis stream of latency metrics to auto‑scale an SQS buffer that queued inference requests for later batch processing.

*Result (R)*  
- Latency returned to < 250 ms within 2 minutes, restoring the 95th‑percentile user experience.  
- Conversion rate rebounded by **9 %** in the next hour.  
- Cost impact: DynamoDB and Lambda usage increased only 4 %, while SageMaker GPU instances were spun down during low traffic, saving ~$1,200/month.

**Leadership Principles Anchored**  
- *Customer Obsession*: Ensured uninterrupted user experience.  
- *Ownership & Dive Deep*: Identified bottleneck root cause and engineered a robust fallback.  

Bar‑raiser focuses: ownership of failure mode, deep dive into metrics, quantified impact, and iteration after the incident to prevent recurrence.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
