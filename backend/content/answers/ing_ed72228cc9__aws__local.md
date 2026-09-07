---
qid: ing_ed72228cc9__aws__local
question: 'Explain: Maybe there is something wrong with the — Google Maps System Design
  Interview Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 443
total_tokens: 679
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:15:21-05:00'
sources: []
---

**Situation & Task**  
I was reviewing a candidate’s response to the classic “Google‑Maps‑like system” prompt. The interviewer noted that their design had gaps in scalability, cost control, and data freshness—critical for a product used by millions daily.

**Action – Technical Design**  
1. **Data ingestion**: Use *Amazon Kinesis Data Streams* for real‑time GPS telemetry; batch uploads via *S3* for historical maps.  
2. **Storage & indexing**: Persist tiles in *Amazon S3* with a *CloudFront* CDN for low‑latency global delivery. For routing, build an immutable graph in *DynamoDB* (partitioned by region) and cache hot edges in *ElastiCache Redis*.  
3. **Routing engine**: Deploy stateless Lambda functions behind *API Gateway* to compute shortest paths using Dijkstra’s algorithm on the cached graph; fallback to EC2 autoscaling for heavy traffic.  
4. **Data freshness**: Schedule nightly *Glue ETL* jobs to refresh road network metadata in DynamoDB, ensuring <5 min staleness.

**Result – Metrics & Impact**  
- Reduced average API latency from 350 ms to 80 ms (30% improvement).  
- Cut operational cost by 40% compared to a monolithic EC2‑based design.  
- Achieved 99.999% availability across three AZs, meeting SLAs for real‑time navigation.

**Leadership Principles Highlighted**  
- **Customer Obsession**: Delivered instant routing with minimal latency.  
- **Ownership & Dive Deep**: I personally benchmarked each component, identified bottlenecks, and iterated on the design to balance cost vs. performance.  

**Bar‑raiser Takeaway**  
A strong answer shows *ownership* (took responsibility for every layer), *deep technical insight* (chosen services with trade‑off justification), and a *quantified outcome*. It also demonstrates learning: I had previously underestimated caching needs, so I built a robust Redis layer to avoid that failure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
