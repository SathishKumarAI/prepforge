---
qid: ing_b5e1653437__aws__local
question: 'Explain: Human handoff — Customer Support Agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 473
total_tokens: 701
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:15:18-05:00'
sources: []
---

**Situation & Task (S)**  
At a Saa‑as fintech I led the rollout of an “AI‑first” chat support channel that routed 70 % of tickets to an LLM agent before escalating to a human. The goal was to reduce first‑contact resolution time by 30 % while keeping CSAT above 90 %.

**Action (A)**  
- **Ownership & Dive Deep:** I mapped the end‑to‑end flow, identified bottlenecks in intent‑classification and knowledge‑base lookups, and built a lightweight “Human Handoff” microservice on AWS Lambda.  
- **AWS Services Used:**  
  - *Amazon SageMaker* for fine‑tuned LLM (BERT‑derived) that scores intents with ≥ 0.92 F1.  
  - *API Gateway* + *Lambda* to expose a stateless handoff endpoint.  
  - *Step Functions* orchestrate fallback: if confidence < 0.8 or the LLM flags “escalation flag”, the request is queued in **Amazon SQS** and routed to an Ops team via **Amazon Connect** IVR for live chat.  
- **Bias for Action:** I deployed a canary release (5 % traffic) using *AWS AppConfig*, monitored latency & error rates, then rolled out fully once metrics met thresholds.

**Result (R)**  
- First‑contact resolution rose from 48 % to 72 % (Δ +24 pp).  
- Average handle time dropped 35 %, cutting support cost by $120K/month.  
- CSAT remained at 92 %.  
- The handoff system scaled elastically; peak traffic of 10k concurrent chats was served with < 200 ms latency, using on‑demand Lambda and auto‑scaling SQS.

**Learning & Bar‑Raiser Insight**  
I iterated the LLM confidence threshold after analyzing failure logs—learning that a stricter 0.85 cut false positives by 18 %. The bar‑raiser will note my ownership of the entire pipeline, deep dive into model metrics, and quantified impact on cost/experience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
