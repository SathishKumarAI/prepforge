---
qid: ing_5d411a512f__aws__local
question: 'Explain: All Database Lists — All Dbs List'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 489
total_tokens: 719
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:56:42-05:00'
sources: []
---

**Situation / Task**  
At my previous role we had an internal data‑science platform that exposed every customer’s relational database as a “list” for ML pipelines. The original implementation was a monolithic API that pulled the entire catalog into memory, leading to 3 × latency spikes during peak hours and occasional OOM crashes when customers added >10k databases.

**Action**  
I took ownership of redesigning the service:

| Step | Design Decision | AWS Services | Rationale |
|------|-----------------|--------------|-----------|
| 1 | Partition metadata by tenant ID and region | **Amazon DynamoDB Global Tables** | Enables local reads, reduces cross‑region latency. |
| 2 | Expose a paginated REST endpoint (`/databases?limit=100`) | **API Gateway + Lambda** (Python) | Serverless scales automatically; pagination keeps memory bounded. |
| 3 | Cache frequent queries in **ElastiCache Redis** with TTL 5 min | Improves response time for repeat list requests. |
| 4 | Implement audit logs via **CloudWatch Logs** and **EventBridge** to trigger alerts on anomalous query patterns. | Ensures observability and compliance. |

I added unit tests that mock DynamoDB streams, ran a load test with **Artillery** (10k concurrent users), and achieved <200 ms 99th‑percentile latency—down from the previous 1.2 s—and cost savings of ~30 % per month.

**Result**  
The new “All Dbs List” service now handles >50 k databases with sub‑second response times, improves developer productivity by 40 %, and reduces ops overhead. I documented the failure mode (OOM) and refactored code to use streaming instead of eager loading—a key learning about scalability early in design.

**Leadership Principles Anchored**  
- **Ownership**: Led end‑to‑end redesign, from spec to deployment.  
- **Dive Deep**: Analyzed performance bottlenecks, instrumented metrics, and iterated on data partitioning.  

This approach aligns with Amazon’s bias for action while ensuring the system is robust, cost‑effective, and maintainable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
