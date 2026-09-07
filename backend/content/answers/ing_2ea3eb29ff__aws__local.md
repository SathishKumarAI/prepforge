---
qid: ing_2ea3eb29ff__aws__local
question: 'Explain: Conversation Flow — Conversational Agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 438
total_tokens: 665
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:10:37-05:00'
sources: []
---

**Conversation Flow – A Conversational Agent**

*Situation & Task:*  
I led the redesign of our customer‑support chatbot to reduce ticket volume by 40 %. The bot needed natural turn‑taking, context retention across multi‑turn dialogs, and fallback to human agents when confidence fell below 0.35.

*Action (Design):*  
1. **Stateful Flow Engine** – Built on Amazon Lex with a DynamoDB table keyed by `sessionId` storing last intent, slot values, and turn count.  
2. **Context Resolver** – Lambda function invoked after each Lex response to query the table, merge slot data, and decide next prompt or escalation.  
3. **Confidence‑Based Escalation** – If Lex confidence < 0.35 for two consecutive turns, a `fallback` intent triggers an SNS notification to the live‑chat queue (SQS → Kinesis Data Firehose → QuickSight).  
4. **Observability** – CloudWatch metrics (`lex_confidence`, `turns_per_session`) feed a real‑time dashboard; alarms trigger auto‑scaling of Lambda concurrency.

*Result:*  
- Ticket volume dropped 42 % in three months (≈ 12,000 tickets/month saved).  
- Mean time to resolution for escalated cases fell from 6 h to 1.2 h.  
- Cost decreased by $8K/month due to reduced human agent hours.

*Leadership Principles:* **Ownership** – I owned the entire end‑to‑end flow, not just Lex integration; **Dive Deep** – I profiled every turn’s latency and confidence to fine‑tune thresholds.  

*Bar‑raiser takeaways:*  
- Demonstrated clear ownership of metrics and iterative improvements.  
- Showed depth by dissecting Lambda cold starts, DynamoDB provisioned throughput, and fallback logic.  
- Quantified impact with concrete savings and SLA gains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
