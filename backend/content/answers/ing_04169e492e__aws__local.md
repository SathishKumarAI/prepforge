---
qid: ing_04169e492e__aws__local
question: 'Explain: Go beyond editing — Resend \u00b7 Email for developers'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 445
total_tokens: 680
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:33:55-05:00'
sources: []
---

**Scenario (STAR)**  
*Situation*: A fintech app’s “Resend Email” feature was buggy—developers could only trigger one resend per user, causing SLA breaches when users missed the first push. *Task*: Redesign to allow unlimited resends without compromising cost or deliverability. *Action*: I built a serverless micro‑service that decouples UI requests from email delivery.

1. **Decouple**: Front‑end sends a JSON payload (userId, templateId) → **API Gateway** → **Lambda** validates and writes to **SQS** queue.
2. **Process**: A second Lambda polls SQS, fetches user contact info from **DynamoDB**, and invokes **Amazon SES** with the chosen template.  
3. **Retry & Metrics**: SES’s bounce/complaint notifications are routed to an SNS topic that triggers another Lambda to log failures in CloudWatch Logs. We store send counts per user in a TTL‑enabled DynamoDB table, enabling instant “can‑resend” checks.
4. **Cost control**: With Lambda’s pay‑per‑execution model and SES’s free tier for 62k emails/month, we cut infrastructure cost by 70% vs the legacy EC2 + cron job stack.

*Result*: Resends per user increased from 1 to unlimited; email delivery rate rose from 94 % to 98.7 %, reducing support tickets by **35 %** in two weeks.  

**Leadership Principles Highlighted**  
- *Customer Obsession*: Ensured users never miss critical notifications.  
- *Ownership & Dive Deep*: I architected the end‑to‑end flow, tuned retry logic, and monitored metrics until SLA met.

**Bar‑raiser cues**: Demonstrated clear ownership, quantified impact (98.7 % deliverability), deep dive into AWS service trade‑offs, and lessons from initial failures that led to a more resilient design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
