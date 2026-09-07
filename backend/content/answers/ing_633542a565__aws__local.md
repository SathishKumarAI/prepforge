---
qid: ing_633542a565__aws__local
question: 'Q: How would you use LMArena Elo responsibly when choosing a model for
  a chat product?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 417
total_tokens: 656
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:09:19-05:00'
sources: []
---

**Situation / Task**  
I was tasked to pick the best LMArena‑Elo model for our new AI chat assistant that would power 5 M daily active users worldwide. The goal was to maximize user satisfaction while keeping inference cost below $0.10 per 1,000 tokens.

**Action (Design)**  
* **Data‑driven selection:** I ran a 14‑day A/B test on three candidate models (Elo S, Elo M, Elo L) using AWS SageMaker endpoints. Each endpoint logged latency, CPU/GPU utilization, and user‑rated relevance scores.  
* **Scalability & cost:** I deployed the top‑performing model (Elo M) behind an Amazon API Gateway + Lambda layer that scales automatically; GPU instances were swapped to spot for 70 % of traffic, saving ~30 %.  
* **Bias & safety checks:** Leveraging AWS Comprehend and GuardDuty, I monitored for toxic or biased responses, flagging any model with >2 % anomaly rate for retraining.  

**Result**  
Elo M achieved a 4.7/5 user rating versus 3.9 for Elo L, dropped inference latency from 520 ms to 310 ms, and cut cost per request by 28 %. The system handled peak load of 200k concurrent users with <99.8 % availability.

**Learning & Ownership**  
I documented the entire experiment in a shared repo, enabling the team to reproduce results and iterate on new models. I also set up automated alerts for drift, ensuring continuous ownership of model quality.

> **Leadership Principles:** *Customer Obsession* (maximizing relevance), *Ownership* (end‑to‑end pipeline), *Dive Deep* (metrics & trade‑offs).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
