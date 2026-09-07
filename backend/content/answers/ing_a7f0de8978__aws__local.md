---
qid: ing_a7f0de8978__aws__local
question: 'Explain: Network credential refresh — Expanding Managed Agents in Gemini
  API:  background tasks, remote MCP and more'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 491
total_tokens: 733
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:46:35-05:00'
sources: []
---

**Situation & Task**  
When we upgraded Gemini’s credential pipeline, the existing on‑prem agents couldn’t refresh tokens for our new remote MCP (Managed Credential Provider) without blocking user requests. The goal was to add a background refresh worker that could scale with traffic and keep credentials valid 99.9 % of the time.

**Action – Design & Implementation**  
1. **Background Agent Service** – Deployed as an ECS‑Fargate task (one per region). It pulls token status from DynamoDB, calculates next refresh window, and writes a CloudWatch Event to trigger a Lambda that calls MCP’s `/refresh`.  
2. **Remote MCP Integration** – Exposed via HTTPS behind an Application Load Balancer with WAF protection; each request is authenticated by an IAM‑role policy that allows only the ECS task.  
3. **Reliability & Scaling** – CloudWatch Events fan‑out to multiple Lambda instances (concurrency 2000) and use SQS FIFO for idempotent retries.  
4. **Cost Control** – Lambda “pay‑per‑execution” keeps spend < $5/day; DynamoDB TTL automatically cleans stale rows.  

**Result**  
- Token refresh latency dropped from 2 s to < 200 ms.  
- Credential availability improved from 93 % to 99.95 % during peak load (30k requests/sec).  
- Operational cost decreased by 35 % compared with the monolithic batch job.

**Leadership Principles & Bar‑Raiser Focus**  
*Customer Obsession*: Ensured uninterrupted user experience.  
*Ownership*: Took full responsibility for end‑to‑end flow, from ECS to MCP.  
*A bar‑raiser will listen for:* clear ownership of metrics, deep dive into AWS service trade‑offs (e.g., Lambda vs. EC2), and a lesson learned—initially we over‑provisioned Lambdas; after profiling, we reduced concurrency limits without impacting SLA.

---

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
