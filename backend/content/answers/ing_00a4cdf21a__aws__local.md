---
qid: ing_00a4cdf21a__aws__local
question: 'Explain: API Gateway — Design Spotify | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 698
total_tokens: 933
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:26:06-05:00'
sources: []
---

**Situation / Task**  
I was tasked with designing a high‑throughput public API for a music streaming service (Spotify‑style) that would expose catalog search, user playlists, and playback controls to mobile and web clients. The goal was to handle 10 M active users, support 1 M requests per second (RPS), and guarantee <200 ms latency while keeping costs under $2 M/month.

**Action**  
*Architecture*:  
- **Amazon API Gateway** as the entry point – throttling 500 RPS per stage, caching popular queries for 5 min.  
- **Lambda@Edge / CloudFront** to route requests globally, reducing latency by ~30 %.  
- **AWS Lambda** (Python/Node) for stateless business logic; each function has a 15 s timeout and is auto‑scalable.  
- **Amazon DynamoDB** (global tables) for user metadata & playlist storage—single‑write latency <5 ms, read capacity 2× projected peak.  
- **Elastic Transcoder / MediaConvert** for on‑demand transcoding; jobs queued in SQS and processed by Fargate clusters.  
- **Amazon CloudWatch + X-Ray** for observability; automated alarms to trigger Lambda auto‑scaling.

*Scalability*:  
- API Gateway’s built‑in throttling prevents burst spikes from hitting downstream services.  
- DynamoDB global tables provide multi‑region read/write with <1 ms latency.  
- Fargate clusters scale based on SQS queue depth, ensuring 99.9% throughput during peak hours.

*Cost*:  
- API Gateway: ~$0.0035 per million calls → ~\$35k/month for 10 B calls.  
- Lambda: ~\$0.20 per 1M GB‑s; with average 128 MB/req and 100 ms runtime, cost ≈ \$80k.  
- DynamoDB: on‑demand pricing + provisioned capacity → ~$120k.  
- MediaConvert & Fargate: variable but capped at $600k. Total ~\$1.8M/month.

*Risk mitigation*: I introduced a **canary deployment** via API Gateway stages, and built automated rollback scripts in CloudFormation to address failures quickly.

**Result**  
The system handled 1.2 M RPS during a global release, with 99.7% of requests under 150 ms. Monthly traffic grew 120% YoY while costs remained within the budget. Post‑launch analysis showed a 35% reduction in user churn attributable to faster API responses.

**Learning & Ownership**  
I owned the entire pipeline from design to ops, diving deep into latency traces to identify bottlenecks. When a Lambda cold start spike caused a 5 % latency increase, I introduced provisioned concurrency and reduced the impact by 70%. This experience reinforced my bias for action and customer obsession: every optimization directly improved user listening time.

---

**Leadership Principles Highlighted**  
- **Customer Obsession** – prioritized sub‑200 ms latency to keep users engaged.  
- **Ownership & Dive Deep** – took full responsibility, dissected metrics, and iterated quickly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
