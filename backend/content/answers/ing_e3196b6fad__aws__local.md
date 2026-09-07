---
qid: ing_e3196b6fad__aws__local
question: 'Explain: Endpoint: GET /{short_code} — Design URL Shortener | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 392
total_tokens: 635
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:52:46-05:00'
sources: []
---

**Leadership Principles:** *Customer Obsession* & *Ownership*

**Situation / Task**  
I was tasked to build a highly‑available URL shortener for a global startup that expected 50 M clicks/day and 1 B stored links, while keeping latency < 30 ms.

**Action**  
- **Design**: Short code → SHA‑256 hash of the long URL + base62 encoding. Store `code|longURL` in DynamoDB (partition key = code).  
- **Endpoint** (`GET /{short_code}`): API Gateway triggers a Lambda that fetches from DynamoDB, follows redirects via CloudFront cache, and returns 301.  
- **Scalability**: Auto‑scales Lambda to 10 k RPS; DynamoDB provisioned throughput with auto‑scale (1 M writes/day).  
- **Availability**: Multi‑AZ deployment; use Global Accelerator for latency < 20 ms globally.  
- **Cost**: ~\$2K/month (Lambda compute + DynamoDB) vs \$10K for a traditional VM cluster.  
- **Trade‑offs**: Using serverless eliminates ops overhead but limits custom networking; we mitigated by using VPC endpoints for DynamoDB.

**Result**  
The system handled 55 M clicks/day with <0.5% error rate, latency stayed under 25 ms in all regions, and cost was 80 % lower than the baseline architecture.  

**Bar‑raiser notes:** I owned the end‑to‑end flow, dove deep into DynamoDB partitioning, quantified performance gains, and iterated after a failed initial design that caused throttling—learning to pre‑emptively shard by hash prefix.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
