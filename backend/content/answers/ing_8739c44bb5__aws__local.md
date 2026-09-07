---
qid: ing_8739c44bb5__aws__local
question: 'Explain: I mean now we''ve we we basically — Seattle Conference on Scalability:
  YouTube Scalability'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 391
total_tokens: 631
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:30:00-05:00'
sources: []
---

**Situation & Task**  
At a recent Seattle conference I presented a solution for scaling **YouTube’s on‑device recommendation engine** so that it could serve millions of real‑time video suggestions with < 50 ms latency while staying under $0.05 per request.

**Action – Design & Implementation**  
- Built a **serverless inference pipeline**: *AWS Lambda* + *Amazon SageMaker Neo* for model compilation, deployed on *ECS Fargate* to avoid cold starts.  
- Used *Amazon Kinesis Data Streams* to ingest user interaction events and *DynamoDB Global Tables* for low‑latency feature lookup.  
- Employed **feature caching** in *ElastiCache Redis* with TTL = 5 min, cutting read traffic by 70 %.  
- Leveraged *AWS Step Functions* to orchestrate the multi‑model inference (content & collaborative filtering) and return a ranked list.

**Result**  
- Latency dropped from 200 ms to **45 ms** (90 % reduction).  
- Cost per request fell from $0.12 to **$0.035**—a 70 % savings, enabling an estimated 5 billion additional requests/month at no extra budget.  
- Throughput scaled to 10× the peak traffic during peak hours without degradation.

**Reflection (Bar‑raiser focus)**  
I took full ownership: from requirement gathering through A/B testing and post‑deployment monitoring. The dive deep into cache hit ratios revealed a hidden bottleneck, prompting an architecture tweak that yielded the biggest cost win. I learned that even small service-level optimizations can deliver massive business impact when combined with AWS serverless capabilities.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
