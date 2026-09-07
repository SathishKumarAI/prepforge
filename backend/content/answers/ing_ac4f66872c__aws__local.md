---
qid: ing_ac4f66872c__aws__local
question: DPO vs PPO-style RLHF - when would you choose each?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 490
total_tokens: 723
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:55:42-05:00'
sources: []
---

**Situation & Task**  
At a previous role I led the rollout of an AI‑driven recommendation engine for a large e‑commerce platform (10M users). We needed to decide between *Data‑Perception‑Only* (DPO) fine‑tuning and *Policy‑Perception‑Only* (PPO) reinforcement learning with human feedback (RLHF).

**Action**  
1. **Requirements & Design** – DPO requires labeled user interactions; PPO needs an environment simulator plus a reward model. I mapped the data pipeline to AWS services:  
   - **S3 + Glue** for raw logs → **Redshift Spectrum** for query.  
   - **Amazon SageMaker** for training (DPO) or **AWS DeepRacer/Neptune** for PPO’s policy graph.  
   - **Step Functions** orchestrated nightly jobs; **CloudWatch** tracked latency (<200 ms).  

2. **Scalability & Cost** – DPO scales linearly with data size, costing ~$0.10 per 1K training steps on SageMaker. PPO incurs additional simulation overhead (~$0.25 per step) but yields higher policy diversity.  

3. **Bias for Action** – We ran a controlled A/B test:  
   - *DPO* improved click‑through rate (CTR) by **4.2 %** in 48 hrs, cost $12K/month.  
   - *PPO* lifted CTR to **6.8 %**, but required double the compute ($24K/month).  

**Result**  
We adopted PPO for high‑value segments where incremental gains mattered, and DPO for the bulk user base. Overall revenue grew 3.5 %, aligning with our quarterly target. The experiment taught us that *ownership* means choosing the right trade‑off: data availability vs reward signal quality.

> **Bar‑raiser cues**  
> • Clear ownership of trade‑offs (cost vs lift).  
> • Dive deep into AWS services and their cost models.  
> • Quantified impact (CTR %, revenue %).  
> • Learned from a pilot that scaled to production.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
