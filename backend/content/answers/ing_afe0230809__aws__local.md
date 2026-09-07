---
qid: ing_afe0230809__aws__local
question: 'Explain: RLHF and DPO (Alignment)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 416
total_tokens: 645
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:03:05-05:00'
sources: []
---

**Situation –** At my previous role building a conversational AI for customer support, we faced a spike in user‑reported hallucinations (≈ 12% of queries were flagged as untruthful).  

**Task –** I had to reduce hallucinations while keeping latency < 200 ms and cost per inference under $0.0005.

**Action –**  
1. **RLHF (Reinforcement Learning from Human Feedback)**:  
   * Collected a 50k‑item “truthfulness” preference dataset via Amazon Mechanical Turk, labeling pairs of model responses.  
   * Trained a reward model on AWS SageMaker using **Amazon SageMaker Neo** for edge inference and fine‑tuned the base LLM with Proximal Policy Optimization (PPO) on an **ECS Fargate** cluster.  

2. **DPO (Direct Preference Optimization)**:  
   * Replaced PPO’s sampling step with a direct likelihood ratio loss, reducing training time by 35 % and eliminating variance issues.  
   * Deployed the DPO‑optimized policy to **Amazon ECS** behind an **ALB**, auto‑scaling on CPU usage.

3. Monitored hallucination rate via CloudWatch metrics; after two iterations, it dropped from 12% → **2.4%** (≈ 80 % relative reduction).  

**Result –** Latency remained at 180 ms, cost fell to $0.00042 per inference, and user satisfaction scores rose by 15 points in the post‑deployment survey.  

*Leadership Principles:*  
- **Customer Obsession**: Prioritized truthful answers that directly improve user experience.  
- **Ownership & Dive Deep**: Built a custom RLHF pipeline, iterated on metrics, and cut costs without sacrificing quality.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
