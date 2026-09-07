---
qid: ing_3b877cb000__aws__local
question: 'Explain: Case Study: Lucy, A Real Estate AI Assistant'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 450
total_tokens: 681
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:40:54-05:00'
sources: []
---

**Situation & Task**  
At a mid‑size RE SaaS firm I led the launch of *Lucy*, an AI assistant that auto‑answers tenant queries and schedules viewings. Our goal was to reduce manual ticket volume by 40 % while keeping latency < 1 s for high‑traffic agents.

**Action (Technical & Design)**  
I scoped the problem, then built a serverless pipeline on AWS:  
- **Amazon Lex** for intent detection + custom slots, backed by an **RDS Aurora PostgreSQL** store for context.  
- **AWS Lambda** orchestrated business logic; each function kept < 200 ms to stay within the 1‑s SLA.  
- **SQS FIFO** queued user requests, ensuring order and idempotency during peak loads (up to 10k TPS).  
- For long‑running tasks (e.g., calendar sync), we leveraged **Step Functions** with parallel branches.  
- **CloudWatch Alarms + SNS** auto‑scales Lambda concurrency; the architecture is multi‑AZ, giving 99.9 % availability.  

I also implemented a feedback loop: every conversation fed back to an S3 bucket and Athena for nightly drift analysis, driving iterative model improvements.

**Result**  
Within three months Lucy cut ticket volume by **47 %**, freeing 12 FTEs. Response latency stayed at **0.8 s average**. The serverless stack cost $1.2k/month vs the legacy $3.5k, a **66 % savings**.

**Reflection (Bar‑raiser notes)**  
I owned the end‑to‑end solution, dove deep into latency metrics, and quantified impact with real numbers. Post‑launch, we discovered an edge case where Lex misclassified “viewing” as “payment”; we retrained the model, documented the failure, and added a fallback rule—an example of learning from failure to strengthen the system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
