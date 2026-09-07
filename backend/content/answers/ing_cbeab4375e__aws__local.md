---
qid: ing_cbeab4375e__aws__local
question: 'Explain: Building Custom Agent Skills — Building Tool Agents'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 449
total_tokens: 678
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:01:57-05:00'
sources: []
---

**Situation & Task (Customer Obsession, Ownership)**  
I led a cross‑functional team to add “tool‑agent” skills for an internal AI platform that allowed non‑technical users to trigger automated workflows (e.g., data refreshes, report generation) via chat. The goal was to cut manual effort by 70 % and reduce error rates.

**Action (Dive Deep, Bias for Action)**  
1. **Requirements & Architecture** – Defined a stateless Lambda‑based skill engine that parses intent, validates permissions with IAM roles, and invokes AWS Step Functions to orchestrate downstream services (S3, Glue, Redshift).  
2. **Design Choices** – Used Amazon Lex for NLU, DynamoDB for session state, and EventBridge to decouple triggers. Added a retry policy in Step Functions and dead‑letter queues for failure handling.  
3. **Scalability & Availability** – Lambda auto‑scales; Step Functions supports up to 10 000 concurrent executions with built‑in error handling. Multi‑AZ S3 buckets and Aurora Serverless provided high availability for data stores.  
4. **Cost Control** – Leveraged pay‑per‑use Lambdas, reserved instances for Glue jobs, and S3 Intelligent Tiering. Monitored cost via Cost Explorer, keeping spend < $5k/month.

**Result (Deliver Results)**  
Within three months:  
- User adoption rose 120 % (from 30 to 70 active users).  
- Manual ticket volume dropped 68 %.  
- SLA for report delivery improved from 4 h to 45 min.  

**Learnings & Bar‑raiser cues**  
I owned the end‑to‑end experience, dived into CloudWatch logs to root‑cause a rare timeout, and iterated on IAM policies—demonstrating ownership, depth, and continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
