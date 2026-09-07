---
qid: ing_ce7b868814__aws__local
question: 'Explain: Scalability and Performance — How to Ace System Design Interviews'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 445
total_tokens: 678
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:07:48-05:00'
sources: []
---

**Situation & Task**  
While leading a data‑science team at my previous company, we were asked to build an online recommendation engine that could serve 5 M users with <200 ms latency during peak traffic (10 k requests/sec). The interviewers wanted to see how I’d scale the ML pipeline and keep costs under budget.

**Action – Design & AWS Services**  
1. **Data ingestion**: Kinesis Data Streams → Lambda for real‑time feature extraction; persisted to DynamoDB (high write throughput) and S3 (cold storage).  
2. **Model training**: SageMaker Ground Truth + Spot instances, saving models in EFS for shared access.  
3. **Inference**: SageMaker Real‑Time Endpoint behind an Application Load Balancer with Auto Scaling based on CPU usage; fallback to Batch Transform during off‑peak hours.  
4. **Caching**: Redis (ElastiCache) for the top 1 M most popular items, cutting latency from 200 ms to ~30 ms.  

I used **Canary releases** and **A/B testing** on CloudWatch metrics to validate performance before full rollout.

**Result**  
- Latency dropped from 250 ms to 35 ms (90% reduction).  
- Peak throughput handled 12 k req/s without errors, exceeding the requirement.  
- Cost per inference decreased by 40 % through spot usage and caching.  

**Leadership Principles & Bar‑raiser Notes**  
*Customer Obsession*: Delivered a faster, cheaper experience for millions of users.  
*Ownership & Dive Deep*: Tracked every metric, iterated on data pipeline until SLA met.  
Bar‑raisers will look for quantified impact (latency, cost), clear trade‑offs (spot vs. on‑demand), and evidence that I learned from a failed early prototype where latency hit 500 ms due to cold starts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
