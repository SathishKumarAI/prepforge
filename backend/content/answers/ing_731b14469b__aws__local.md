---
qid: ing_731b14469b__aws__local
question: 'Explain: Common Use Cases — Content Delivery Network (CDN) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 478
total_tokens: 714
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:45:53-05:00'
sources: []
---

**Situation & Task**  
I was tasked to design a CDN‑powered recommendation engine for an e‑commerce platform that served 20 M users daily and needed sub‑100 ms latency for personalized product cards.

**Action (Design)**  
1. **Data Ingestion** – Real‑time clickstream → Amazon Kinesis Data Streams, batch logs via S3 → Glue ETL → Redshift Spectrum.  
2. **Model Training** – SageMaker Pipelines with Spot instances; model size ~300 MB, training time 12 h, cost $120/day.  
3. **Inference Layer** – Deploy the trained model on Amazon Lambda@Edge (CPU‑bound) and AWS AppConfig for feature flags.  
4. **Caching & Edge Distribution** – CloudFront with custom origin in us-east-1; edge functions precompute “top‑10” items per user segment, stored in DynamoDB Global Tables (latency < 5 ms).  
5. **Monitoring** – CloudWatch metrics + X-Ray tracing to detect cold starts; automatic scaling via Lambda provisioned concurrency.

**Result**  
*Latency dropped from 350 ms to 80 ms (77% improvement).*  
*Revenue lift of $1.2 M/month due to higher click‑through rates.*  
*Operational cost reduced by 35% through Spot usage and edge caching.*

**Leadership Principles Reflected**  

| Principle | How it manifested |
|-----------|-------------------|
| **Customer Obsession** | Built a system that delivers instant recommendations, directly improving user experience. |
| **Ownership** | Took end‑to‑end responsibility—from data pipelines to edge deployment—ensuring reliability and cost control. |
| **Dive Deep** | Analyzed CloudWatch traces to pinpoint Lambda cold starts; iterated on provisioning concurrency until latency met SLA. |

**Bar‑raiser takeaways**  
- *Quantified impact*: explicit numbers (latency, revenue).  
- *Depth*: detailed service choices and trade‑offs (Spot vs On‑Demand, Lambda@Edge vs EC2).  
- *Learning from failure*: early attempts with plain CloudFront cache hit ratios caused stale recommendations; switched to edge compute for freshness.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
