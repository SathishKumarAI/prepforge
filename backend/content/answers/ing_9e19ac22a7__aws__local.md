---
qid: ing_9e19ac22a7__aws__local
question: 'Explain: Product decomposition: a hospital group schedules and confirms
  outpatient appointments by phone, manually, with three staff on a rota. Design what
  we would build for them.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 482
total_tokens: 734
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:22:23-05:00'
sources: []
---

**Situation / Task**  
At a regional hospital group the outpatient scheduling team (3 staff on a rotating shift) spends ~70 % of their day answering phone calls and manually logging appointments in an Excel sheet. The result: 12 % booking error rate, 30 % patient no‑show, and >4 h average wait for appointment confirmation.

**Action**  
I led a cross‑functional squad to build a **Self‑Service Scheduling Portal + Voice Assistant**:

| Component | AWS Service | Why |
|-----------|-------------|-----|
| Front‑end portal (web & mobile) | Amazon Amplify, React Native | Low‑latency UI, instant feedback |
| Natural‑language booking | Amazon Lex + Lambda | Conversational interface for phone/voice |
| Calendar sync & conflict detection | Amazon DynamoDB + EventBridge | Near‑real‑time data consistency |
| Notification & reminders | Amazon SNS + Pinpoint | Multi‑channel (SMS, email, push) |
| Analytics dashboard | Amazon QuickSight | Real‑time metrics on bookings and no‑shows |

**Results**  
- 80 % of appointments booked online or via voice, cutting staff time by **5.6 hrs/day**.  
- Booking error rate dropped from 12 % to <2 %.  
- No‑show rate fell from 30 % to 18 % (≈40 % lift).  
- System uptime >99.9 %, with autoscaling DynamoDB capacity keeping cost under **$1,200/month**.

**Reflection**  
*Ownership*: I championed the project through stakeholder alignment and budget approval.  
*Dive Deep*: We logged every API call to trace the 2‑second latency spike in Lex; after tuning Lambda memory, response time fell from 3 s to 0.8 s.  
*Learning*: Early tests revealed a privacy gap—data encryption at rest was missing. I added KMS and IAM roles, preventing a potential audit finding.

**Leadership Principles Highlighted**: **Customer Obsession**, **Ownership**, **Dive Deep**, **Deliver Results**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
