---
qid: ing_5907d2b2e0__aws__local
question: 'Explain: Summary — Bloom Filters | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 564
total_tokens: 793
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:47:01-05:00'
sources: []
---

**Customer Obsession & Ownership**

*Situation:*  
I was tasked with adding a “fast‑lookup” feature to our global product catalog so that the recommendation engine could instantly determine if a SKU existed before launching an A/B test. The existing database lookup cost 120 ms per request and hit traffic spikes of ~50 k QPS, threatening SLA violations.

*Task:*  
Design a scalable, low‑latency, memory‑efficient filter that reduces DB traffic by >95% while keeping false positives below 1%.

*Action:*  
I chose **Bloom Filters** because they offer sub‑kilobyte space per million keys and O(1) membership checks.  
1. **Data pipeline:** Every time a SKU is created or updated, a Lambda function (Python 3.11) writes the hash to an SQS queue.  
2. **Consumer service:** A fleet of ECS Fargate tasks pulls messages, hashes them with 10 independent hash functions, and updates an in‑memory Redis cluster (Amazon ElastiCache for Redis). The cluster is sharded across two AZs for high availability.  
3. **API layer:** API Gateway exposes `/exists/{sku}` that forwards to a Lambda@Edge function; the function queries Redis once per request, returning `true/false`. If Redis misses, it falls back to DynamoDB (global table).  
4. **Metrics & tuning:** Using CloudWatch metrics I set a target false‑positive rate of 0.8 %. When traffic doubled, I added a third Fargate task and increased Redis memory from 2 GiB to 4 GiB, keeping the hit ratio above 98%.

*Result:*  
- **Latency** dropped from 120 ms to <5 ms per lookup (95th percentile).  
- **DB traffic** decreased by **96%**, cutting costs from $3.2k/month to $0.2k/month.  
- The system handled peak QPS of **80 k** with 99.9 % availability.

*Learnings:*  
I discovered that a Bloom filter’s false‑positive tolerance must be aligned with business impact; a single false positive could mislead recommendations and affect revenue. I documented this trade‑off in the design doc and set up automated alerts when the rate exceeded 1%.  

**Key Takeaway:** By owning the end‑to‑end pipeline, diving deep into probabilistic data structures, and iterating on metrics, we delivered a cost‑effective, highly available feature that directly improved customer experience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
