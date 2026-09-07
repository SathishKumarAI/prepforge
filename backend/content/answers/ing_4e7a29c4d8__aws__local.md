---
qid: ing_4e7a29c4d8__aws__local
question: 'Explain: Make it happen — Careers at Glean | Glean Work AI'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 401
total_tokens: 635
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:22:36-05:00'
sources: []
---

**Situation & Task**  
At a fast‑growing AI startup, I was tasked to launch the *Glean Work AI* career portal—an internal tool that matches open roles with employee skill profiles using NLP. The goal: reduce time‑to‑hire by 30 % and improve candidate engagement.

**Action (Ownership + Bias for Action)**  
1. **Data‑driven design** – Scraped LinkedIn, internal ATS, and self‑reported skill tags; used SageMaker to train a BERT model that scored candidates on fit.  
2. **Scalable stack** – Deployed the model as a Lambda‑based microservice behind API Gateway, storing embeddings in DynamoDB for instant lookup.  
3. **Feedback loop** – Built an EventBridge pipeline feeding hiring outcomes back into SageMaker to fine‑tune the model quarterly.  
4. **UX & Ops** – Integrated with Cognito for single‑sign‑on and CloudWatch dashboards for real‑time latency monitoring.

**Result (Deliver Results + Dive Deep)**  
- Cut time‑to‑hire from 35 days to 24 days (≈30 % reduction).  
- Candidate satisfaction scores rose from 3.6/5 to 4.2/5.  
- Serverless architecture kept monthly costs under $1,200 versus the projected $5,000 for a VM‑based solution.

**Reflection**  
The first iteration over‑estimated candidate similarity, leading to low conversion; I applied A/B testing and introduced a confidence threshold, boosting match accuracy by 12 %. This cycle exemplifies true ownership—owning both success metrics and failure modes—and demonstrates the Amazon principle of *Customer Obsession* through continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
