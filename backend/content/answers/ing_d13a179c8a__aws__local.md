---
qid: ing_d13a179c8a__aws__local
question: 'Explain: Design an in-app assistant that can take actions in your app ("book
  it", "send it to Sam").'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 474
total_tokens: 717
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:13:59-05:00'
sources: []
---

**Situation & Task**  
While leading the product team at a ride‑sharing startup, we needed an *in‑app assistant* that could understand user intent (“Book me a car”, “Send the ETA to Sam”) and trigger backend actions without leaving the app. The goal was to increase conversion by 15% and reduce support tickets by 25%.

**Action – Design & Architecture**  
1. **Intent Engine** – Built on Amazon Lex for NLU, fine‑tuned with our domain data (≈ 50k utterances).  
2. **Skill Layer** – Lambda functions (Node.js) map intents to micro‑services via AWS Step Functions for orchestration.  
3. **Action Services** –  
   * `BookRide` → Amazon DynamoDB + EventBridge → booking workflow.  
   * `SendETA` → SNS topic that triggers an SNS publish to a subscribed Lambda, which calls the internal messaging API.  
4. **Security & Auditing** – IAM roles per function, CloudTrail logs; data encrypted at rest (KMS).  
5. **Scalability/Availability** – All services are serverless (auto‑scaling), regionally deployed, with a 99.95 % SLA via AWS Global Accelerator for latency.  
6. **Cost Control** – Pay‑per‑use Lambda + DynamoDB On‑Demand; estimated monthly spend < $200.

**Result**  
- **Conversion ↑ 18%** (bookings per session).  
- **Support tickets ↓ 28%** (action requests handled automatically).  
- **Latency** averaged 120 ms, meeting our 150 ms target.  

**Learnings & Bar‑raiser Checkpoints**  
*Ownership*: I drove the end‑to‑end pipeline and maintained SLA dashboards.  
*Dive Deep*: Investigated a spike in failed “SendETA” calls; discovered SNS dead letter queue misconfiguration—fixed it, reducing failures from 4% to < 0.1%.  
*Quantified Impact*: Tracked metrics via CloudWatch Alarms and integrated with our BI dashboard.  

This solution exemplifies **Customer Obsession** (smooth user experience) and **Ownership** (full responsibility for reliability).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
