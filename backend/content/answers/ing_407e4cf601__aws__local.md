---
qid: ing_407e4cf601__aws__local
question: 'Explain: Origin Overload on Misses — Content Delivery Network (CDN) | System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 493
total_tokens: 732
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:51:46-05:00'
sources: []
---

**Situation / Task**  
In my last role I was asked to redesign our video‑streaming CDN so that a sudden spike in “misses” (requests for objects not cached locally) would never overwhelm the origin and cause latency > 2 s for 5% of users. The existing CloudFront + S3 stack had an average miss rate of 12%, and during flash sales we hit 70% misses, pushing origins into 400‑error bursts.

**Action**  
1. **Add a “warm‑up” layer** – I introduced an *Origin Request Policy* that routes 10 % of miss traffic to an *AWS Lambda@Edge* function which prefetches the missing object from S3 and stores it in a temporary CloudFront cache for 5 min.  
2. **Rate‑limit origins** – Configured CloudFront “Origin Shield” with a custom WAF rule that throttles origin requests to 200 req/s per region, backing this with an Amazon API Gateway + Lambda that dynamically scales the threshold based on real‑time CloudWatch metrics.  
3. **Observability** – Added Kinesis Firehose → Redshift for miss logs and built Grafana dashboards that trigger an SNS alert when miss latency > 1 s.

**Result**  
- Miss‑latency dropped from 2.8 s to < 0.9 s (70% improvement).  
- Origin error rate fell from 18% to < 1%.  
- Cost increased by only 12 % due to the Lambda@Edge warm‑up layer.

**Leadership Principles**  
*Ownership* – I took full responsibility for end‑to‑end latency and cost.  
*Dive Deep* – Built a real‑time analytics pipeline to surface root causes and validate design assumptions.  

**Bar‑raiser takeaways**  
- Demonstrated clear ownership and quantified impact.  
- Showed depth by designing multi‑layer mitigation (Lambda@Edge + WAF throttling).  
- Learned from failure: initial naive scaling caused “cache stampede”; the rate limiter fixed it without over‑provisioning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
