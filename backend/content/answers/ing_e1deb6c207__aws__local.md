---
qid: ing_e1deb6c207__aws__local
question: Full fine-tuning vs. parameter-efficient fine-tuning - how do you choose?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 424
total_tokens: 660
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:50:20-05:00'
sources: []
---

**Situation / Task**  
While leading the ML‑Ops team for our recommendation engine, we had to decide whether to deploy full fine‑tuning of a 12B transformer or adopt parameter‑efficient tuning (PEFT) for a new user‑segment model.  

**Action**  
I scoped the problem with *Ownership* and *Dive Deep*:  
1. **Compute & storage cost** – Full fine‑tune requires ~200 GB GPU‑RAM per epoch; PEFT uses <5 GB.  
2. **Inference latency** – 12B model needs a p3.16xlarge (≈$24/h) with 350 ms latency, while PEFT on a p4d.24xlarge (≈$48/h) gives 180 ms.  
3. **Accuracy trade‑off** – We benchmarked top‑k accuracy: full fine‑tune = 0.62, PEFT = 0.58 (Δ = –6 %).  
4. **Scalability & availability** – I designed a SageMaker training pipeline that auto‑scales across Spot instances for PEFT and uses EFS for shared checkpoints; full fine‑tuning would require an on‑prem cluster.

I presented the findings to stakeholders, highlighting that the 6 % drop in accuracy was acceptable given a **$1.2M annual cost saving** and faster deployment (from 3 weeks to 5 days).  

**Result**  
We chose PEFT, achieving 0.58 accuracy with 70 % lower infra spend, 50 % faster rollout, and 30 % reduction in carbon footprint.  

*Bar‑raiser notes:* I showed deep ownership of cost vs. performance trade‑offs, quantified impact, and learned that small model gaps can be justified by operational gains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
