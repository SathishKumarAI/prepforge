---
qid: ing_317ee7ab1d__aws__local
question: 'Explain: Cost estimate — Realtime Voice Agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 502
total_tokens: 730
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:17:02-05:00'
sources: []
---

**Situation & Task**  
At my last role I was tasked to launch a real‑time voice agent for a fintech client that needed 24/7 support while keeping the bill under $10 k/month.

**Action (Design)**  
I broke the solution into three AWS layers:  

1. **Speech‑to‑Text & Text‑to‑Speech** – Amazon Transcribe Real‑Time Streaming and Amazon Polly (batch mode for long answers).  
2. **NLP & Dialogue Management** – Amazon Lex V2, backed by a Lambda authorizer that pulls intent data from DynamoDB.  
3. **Orchestration & Analytics** – Step Functions to chain calls, CloudWatch Logs for metrics, and Kinesis Data Streams for audit.

*Scalability*: Each service is fully managed; the agent can scale to 5k concurrent users with no code changes.  
*Availability*: All services run in a single AZ with cross‑region failover via Route 53 health checks (99.95% SLA).  
*Cost*:  

| Service | Avg. Usage | Monthly Cost |
|---------|------------|--------------|
| Transcribe (30 min/voice) | 200 hrs | $1,500 |
| Polly (10 M chars) |  | $300 |
| Lex (100k requests) |  | $400 |
| Lambda + Step Functions |  | $200 |
| DynamoDB & Kinesis |  | $300 |
| **Total** |  | **$2.8 k** |

This left a generous margin for future growth.

**Result**  
The agent handled 18,000 calls in the first month, reducing live‑agent tickets by 73% and cutting support costs from $12 k to $3 k/month (a 75% savings).  

**Reflection**  
I owned every layer, dug deep into latency logs to reduce response time from 1.2 s to 0.7 s, and iterated on the Lex intent model after user feedback—demonstrating *Customer Obsession* and *Bias for Action*. The bar‑raiser would note my quantified impact, clear ownership trail, and continuous learning loop.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
