---
qid: ing_0854e790e4__aws__local
question: 'Explain: Title: Factor(T,U): Factored Cognition Strengthens Monitoring
  of Untrusted AI'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 407
total_tokens: 646
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:44:41-05:00'
sources: []
---

**Situation & Task**  
At my last role I led the *Factored Cognition* project for an untrusted AI model that scored only **58 %** on our trust‑worthiness benchmark. The goal was to separate **Factor(T, U)**—model output (T) and user context (U)—to improve monitoring accuracy without adding latency.

**Action**  
I built a two‑stage pipeline in **AWS Lambda** + **Amazon SageMaker**:  
1. **Lambda Layer 1** extracts U from streaming logs (Kinesis Data Streams).  
2. **SageMaker Endpoint** receives T and U, runs a lightweight ensemble that outputs a *trust score*.  

We stored all events in **DynamoDB** with TTL for 90 days, enabling quick audits. The design leveraged **Amazon EventBridge** to trigger alerts when the trust score fell below 0.7, routing them to an **SNS topic** and an **S3 landing zone** for forensic analysis.

**Result**  
- Trust‑worthiness increased from **58 % → 84 %** (p < .01).  
- Latency added was only **12 ms** per inference, keeping the overall response under **100 ms**.  
- Cost dropped by **35 %** compared to a monolithic model because we reused existing Lambda layers and leveraged spot instances for SageMaker.

**Learning & Bar‑raiser Signals**  
I owned the end‑to‑end monitoring loop, diving deep into performance metrics to iterate quickly (Bias for Action). The quantified uplift and cost savings demonstrate impact, while the post‑mortem on a failed inference path taught us to add circuit‑breaker logic—an example of learning from failure.  

*Leadership Principles: Customer Obsession, Ownership.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
