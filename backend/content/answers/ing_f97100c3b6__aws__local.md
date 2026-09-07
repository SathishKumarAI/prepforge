---
qid: ing_f97100c3b6__aws__local
question: 'Explain: GLM Slide/Poster Agent — Z.ai - Inspiring AGI to Benefit Humanity'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 430
total_tokens: 668
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:42:07-05:00'
sources: []
---

**Situation (S)** – At my previous role I led a cross‑functional team that built *GLM Slide/Poster Agent*, an AI service to auto‑generate marketing assets from minimal prompts for Z.ai’s internal brand hub. The goal was to cut design cycle time by 80 % while keeping brand consistency.

**Task (T)** – Own the end‑to‑end pipeline: data ingestion, model fine‑tuning, inference serving, and UI integration, ensuring zero downtime during a quarterly rollout.

**Action (A)** –  
1. **Dive Deep & Ownership** – I mapped every data touchpoint; discovered that 35 % of our training set was stale, so I automated nightly refreshes via AWS Glue and S3 event triggers.  
2. Designed a serverless inference layer with Amazon SageMaker endpoints behind an Application Load Balancer, auto‑scaling from 1–10 concurrent requests (95 % latency <200 ms).  
3. Implemented cost controls: reserved instances for the model trainer (+30 % savings) and spot instances for ad‑hoc batch jobs.  
4. Introduced a feedback loop using Amazon CloudWatch metrics to fine‑tune hyperparameters on‑the‑fly, reducing post‑deployment edits by 25 %.  

**Result (R)** – Within two months of launch:  
- Design cycle time dropped from 5 days to 30 hours (80 % reduction).  
- Monthly spend fell from $12K to $7.8K, a 35 % cost saving.  
- User adoption grew 4× within the first quarter, and NPS rose from 68 to 82.

**Bar‑raiser cues** – I demonstrated *Ownership* by taking responsibility for every failure point, *Dive Deep* through data hygiene audits, quantified impact with clear metrics, and learned from an initial latency spike by redesigning the autoscaling policy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
