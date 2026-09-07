---
qid: ing_6f8b89cb7d__aws__local
question: 'Explain: Clarifying Requirements — Design URL Shortener | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 497
total_tokens: 735
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:37:20-05:00'
sources: []
---

**Situation & Task (Customer Obsession + Ownership)**  
I was asked by a startup client to build a URL‑shortening service that could handle millions of clicks per day while guaranteeing 99.999% uptime. They needed a fast, cost‑effective solution with minimal maintenance.

**Action (Dive Deep + Bias for Action)**  
1. **Requirements Clarification** – I scoped the problem:  
   * Short‑URL generation (collision‑free, 6–8 chars).  
   * Redirection latency <10 ms.  
   * Analytics dashboard (click count per URL, geo‑location).  
2. **Design** –  
   • **API Layer**: Amazon API Gateway → Lambda (Node.js) for stateless request handling.  
   • **Storage**: DynamoDB with a global secondary index on `short_code` for O(1) lookups; provisioned read/write throughput auto‑scaled.  
   • **Caching**: ElastiCache‑Redis cluster (replica set) to warm the most popular URLs, reducing DB load.  
   • **Analytics**: Kinesis Data Streams → Lambda → Amazon S3 + Athena for ad‑hoc queries; CloudWatch metrics feed a Grafana dashboard.  
   • **Availability**: Multi‑AZ deployment of DynamoDB and Redis; Route 53 latency‑based routing to nearest edge.  

3. **Cost & Trade‑offs** – Using serverless reduces idle cost; DynamoDB’s pay‑per‑request model keeps traffic spikes affordable. The trade‑off is higher cold start latency, mitigated by keeping the Lambda warm via scheduled invocations.

**Result (Deliver Results)**  
The pilot handled 5 M requests/day with <9 ms median latency and incurred <$300/month. After 6 months, usage grew to 30 M/day; we added a second DynamoDB replica set and increased Redis capacity, keeping cost growth at 12% YoY while maintaining the same SLAs.

**Reflection (Learn from Failure)**  
Initial attempts used EC2 + MySQL, which hit 70% CPU during traffic bursts. Switching to managed services eliminated that bottleneck and freed up engineering time for feature work.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
