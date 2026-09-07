---
qid: ing_39772e6b1f__aws__local
question: 'Explain: Web Crawler — Web Crawler System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 402
total_tokens: 633
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:36:43-05:00'
sources: []
---

**Situation & Task**  
At my previous role I was tasked to build a high‑throughput web crawler that could index millions of pages per day for a recommendation engine. The goal: 10 × faster crawl rate while keeping cost < $2k/month.

**Action – Design**  
*Architecture*: Serverless Lambda workers poll an SQS queue, each worker fetches a URL via API Gateway → Amazon CloudFront (edge caching) → EC2‑based proxy pool (rotating IPs). Results are stored in DynamoDB with TTL for freshness.  
*Scalability*: Auto‑scaling of Lambda concurrent executions (up to 10k) and SQS long polling ensures linear growth; DynamoDB on-demand mode keeps latency < 5 ms regardless of load.  
*Availability*: All components are deployed across 3 AZs, with CloudFront providing global edge caching to reduce round‑trip time.  
*Cost & Trade‑offs*: Using Lambda + API Gateway eliminates server maintenance (≈70 % cost saving). The proxy pool is a single EC2 spot fleet; we accept occasional IP bans for the 1 % error rate versus the $0.20 per instance cost.

**Result**  
Crawl speed increased from 0.5M to **5M pages/day** (10×). Cost stayed at **$1,800/month**. The system achieved 99.9 % availability over six months.  

**Reflection**  
I took full ownership: defined metrics, iterated on the architecture after a failed initial monolith attempt, and instituted automated health checks that reduced downtime by 30%. This aligns with *Ownership* (own end‑to‑end) and *Dive Deep* (profiling Lambda timeouts).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
