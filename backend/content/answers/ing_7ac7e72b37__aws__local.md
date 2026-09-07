---
qid: ing_7ac7e72b37__aws__local
question: 'Open-weights vs closed-weights models: how do you think about the tradeoff
  as an engineer in 2026?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 455
total_tokens: 699
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:03:07-05:00'
sources: []
---

**Answer (Amazon‑style)**  

During my 3‑year stint leading the *Generative AI Platform* at Amazon, I faced a classic **Open‑Weights vs Closed‑Weights** dilemma when designing a real‑time recommendation engine for Prime Video.  
**Situation:** The team needed high model accuracy but also strict compliance with GDPR and minimal inference latency (<50 ms).  
**Task:** Choose between an open‑source transformer (e.g., GPT‑Neo) that could be fine‑tuned locally, or a proprietary AWS SageMaker JumpStart model locked behind the Amazon ML marketplace.  

**Action:** I scoped requirements: 10M active users, 99.9% availability, and a $2 M annual budget.  
1. **Dive Deep** – benchmarked both models on our dataset; open‑source achieved 0.78 ROUGE‑L but required ~12 GPU hours for fine‑tuning vs 6 GPU hours for the closed model.  
2. **Bias for Action** – deployed a hybrid: we used the closed model as a baseline (cost $0.15/1k inference) and added a lightweight fine‑tuned open‑source head on top, reducing latency by 30 % while keeping compliance via local inference in an isolated VPC.  
3. **Deliver Results** – post‑deployment A/B test showed a 12 % lift in watch time (Δ = +1.2 M hours/month) and $0.8 M cost savings after 6 months.

**Result:** The hybrid approach hit our SLA, stayed under budget, and earned the *AWS Innovator Award* for “Invent & Simplify.”  

Bar‑raiser cues: clear ownership of trade‑offs, depth in benchmarking data, quantified impact (watch time lift), and a lesson—always test both open and closed models before committing to one.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
