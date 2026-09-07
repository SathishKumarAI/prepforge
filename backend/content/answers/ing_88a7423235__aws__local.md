---
qid: ing_88a7423235__aws__local
question: 'Explain: The Day 30 Problem: Why Your AI Agent Gets Worse Over Time'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 404
total_tokens: 639
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:33:24-05:00'
sources: []
---

**Situation**  
At a fintech startup I led the rollout of an on‑device recommendation agent that learned user intent via reinforcement learning (RL). After 30 days, we observed a *deterioration* in click‑through rate (CTR) from 12 % to 7 %.

**Task**  
Diagnose why the agent worsened and engineer a sustainable solution.

**Action**  
1. **Dive Deep into Data** – Logged every state‑action pair, reward signal, and policy update. Identified that after ~10k steps the reward distribution shifted: new content had higher “engagement” scores but lower conversion value.  
2. **Re‑design Reward & Exploration** – Added a *value‑based* component to the RL objective (expected revenue) and introduced ε‑greedy exploration with decay tied to performance, not time.  
3. **AWS Services** – Deployed the agent on **Amazon SageMaker Edge Manager** for OTA updates; used **S3 + Athena** for log aggregation and **CloudWatch Alarms** to trigger retraining when CTR fell below 10 %.  
4. **Scalability & Cost** – Model size was <5 MB, so edge inference cost <$0.01 per device/month. Retraining used SageMaker Pipelines on spot instances, cutting compute spend by 40 %.

**Result**  
Within two weeks of the fix, CTR rebounded to 11.8 % and stabilized above 10 % for 90 days. Revenue grew 18 % YoY in the segment served by the agent.

**Learning** – The failure taught me that *reward drift* can silently erode RL gains; continuous monitoring and adaptive reward shaping are essential. This aligns with **Customer Obsession** (we kept users happy) and **Ownership** (I owned the end‑to‑end pipeline).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
