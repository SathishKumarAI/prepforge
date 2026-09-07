---
qid: ing_ecfa0fac76__aws__local
question: 'Explain: Contact Me — Ai Evals Complete Guide Langwatch Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 411
total_tokens: 645
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:14:07-05:00'
sources: []
---

**Answer (Amazon‑style)**  

During a recent project I led the launch of *Contact Me* – an AI‑powered customer support bot that needed to evaluate user sentiment and trigger escalations.  
- **Behavioral (STAR):**  
  - **Situation:** Our legacy system could only handle ~50 concurrent chats with high latency, hurting NPS by 12 points.  
  - **Task:** Design a real‑time evaluation pipeline using Langwatch (for on‑device inference) and Langfuse (for logging & analytics).  
  - **Action:** I orchestrated a serverless stack: *Amazon SageMaker Edge* for Langwatch, *Lambda* + *Step Functions* to route messages, *DynamoDB* for state, and *EventBridge* for escalation alerts. We added *Amazon CloudWatch* dashboards powered by *Langfuse* metrics (accuracy %, latency).  
  - **Result:** Throughput rose from 50 to 2,000 concurrent chats; average response time dropped from 4 s to 0.7 s. NPS improved by 18 points and we cut infra cost by 35% using spot instances.  

**Technical / System Design:**  
- Langwatch runs inference locally on the client device (edge) reducing round‑trip latency.  
- Langfuse aggregates evaluation logs into a time‑series DB, enabling A/B testing of prompts.  
- We used *SQS* for message buffering to decouple components and ensure high availability.  

**Bar‑raiser cues I met:** Ownership (end‑to‑end delivery), Dive Deep (latency profiling), Quantified Impact (NPS + cost metrics), Learning from failure (initial 20% error rate → prompt tuning).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
