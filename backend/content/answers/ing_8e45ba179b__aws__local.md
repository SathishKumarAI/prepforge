---
qid: ing_8e45ba179b__aws__local
question: 'Explain: Real-World Applications — Computer Use Agents'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 492
total_tokens: 721
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:47:43-05:00'
sources: []
---

**Situation & Task**  
At my previous role I was tasked to build a *Computer Use Agent* (CUA) that could autonomously manage user‑level tasks on Windows laptops for a Fortune‑500 finance team. The goal was to reduce manual support tickets by 30 % and free up 15 hrs/month of help‑desk engineers.

**Action – Design & Implementation**  
I architected an event‑driven microservice in **AWS Lambda** (Python) triggered by Windows Event Logs via **Amazon Kinesis Data Streams**. Each log record was parsed, enriched with user context from **AWS Cognito**, and routed to a **Step Functions** state machine that orchestrated the CUA workflow:  
1. *Validate* task request against policy stored in **DynamoDB**.  
2. *Execute* PowerShell scripts via **SSM Run Command** (on‑prem Windows hosts).  
3. *Audit* results and publish status to an **SNS** topic for real‑time dashboards in **Amazon QuickSight**.

To guarantee high availability I used **Lambda@Edge** for global throttling, set **Provisioned Concurrency**, and implemented retry logic with exponential backoff—achieving 99.95 % uptime during a peak 5‑minute surge. Cost was capped at <$1k/month by leveraging spot instances for the on‑prem agent nodes.

**Result**  
Within three months we saw a **32 % drop in support tickets**, a **12 hr/month** time savings per engineer, and a **$18k annual cost reduction** from overtime.  

---

### Leadership Principles Highlighted
- **Customer Obsession** – I designed the CUA to solve real user pain points identified through ticket analytics.  
- **Ownership & Dive Deep** – I took full ownership of the end‑to‑end pipeline, digging into Windows event semantics and AWS service limits to optimize for latency (<200 ms per task).  

Bar‑raisers look for quantified impact (ticket reduction %, cost savings), depth (Lambda concurrency tuning, SSM integration), and learning from a failed early prototype that mis‑parsed logs—prompting the switch to Kinesis.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
