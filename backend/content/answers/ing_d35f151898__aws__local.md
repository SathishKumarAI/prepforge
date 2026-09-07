---
qid: ing_d35f151898__aws__local
question: 'Explain: Confidence-Based Escalation — Conversational Agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 416
total_tokens: 646
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:18:28-05:00'
sources: []
---

**Confidence‑Based Escalation for a Conversational Agent**

*Situation:*  
I led the redesign of our customer support chatbot at an e‑commerce startup that handled ~10 k tickets/day. The bot’s low confidence responses caused a 12 % increase in CSAT complaints.

*Task:*  
Implement a confidence‑based escalation layer so that when the model predicts <70 % certainty, the user is routed to a live agent without extra friction.

*Action:*  
1. **Data‑driven threshold tuning** – Analyzed historic intent scores; set 70 % as the cut‑off where bot accuracy dropped below 85 %.  
2. **Architecture:**  
   * **Amazon Lex** (NLU) → **AWS Lambda** to evaluate confidence and decide route.  
   * **Amazon Connect** for live‑chat hand‑off, using a small queue per region.  
   * **Amazon DynamoDB** stores session context; **SQS** buffers high‑volume escalations.  
3. **Scalability/Availability:** Auto‑scaling Lambda (5 ms latency) and Connect’s built‑in 99.9 % SLA guarantee.  
4. **Cost trade‑off:** Reduced Lex API calls by 30 % (≈$1,200/mo), while Connect usage rose modestly ($3,500/mo). Net savings >$2k/month.

*Result:*  
CSAT improved from 78 % to 92 % in 90 days; average handle time dropped 15 %. The feature was adopted company‑wide and later integrated into the flagship product.  

**Leadership Principles:** *Ownership, Dive Deep.* I owned the end‑to‑end pipeline, dove deep into model metrics, and iterated until measurable impact surfaced.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
