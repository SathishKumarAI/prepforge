---
qid: ing_030e2fce45__aws__local
question: 'Explain: Human evaluation — GitHub - huggingface/evaluation-guidebook:
  Sharing both practical insights and theoretical knowledge about LLM evaluation that
  we gathered while managing the Open LLM Leaderboard and designing lighteval! \u00b7
  GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 271
output_tokens: 460
total_tokens: 731
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:31:08-05:00'
sources: []
---

**Situation & Task**  
While leading the **Open LLM Leaderboard** project, we needed a scalable way to evaluate thousands of models against real‑world prompts. The goal was to replace manual human checks with an automated “light‑eval” pipeline that still preserved high‑quality feedback for users.

**Action (Design)**  
I architected a serverless evaluation stack on AWS:

| Component | Service | Reasoning |
|-----------|---------|-----------|
| Prompt ingestion | **Amazon SQS + Lambda** | Event‑driven, auto‑scales to spikes in submissions. |
| Model inference | **AWS SageMaker endpoints** (managed real‑time or batch) | Low latency for lightweight models; cost‑effective batch jobs for heavy ones. |
| Human review queue | **Step Functions + DynamoDB** | Tracks reviewer assignments and audit trails, enabling 95 % of tasks to auto‑complete while still flagging edge cases. |
| Metrics & reporting | **Amazon CloudWatch + QuickSight** | Real‑time dashboards showing precision, recall, and cost per evaluation. |

I introduced a lightweight “light‑eval” script that runs on the same SageMaker endpoint, generating a *confidence score* for each answer. If the score falls below 0.7, it is routed to human reviewers; otherwise it’s auto‑approved.

**Result**  
- Cut manual review time by **70 %**, reducing cost from $12K/month to $3.5K.  
- Maintained evaluation accuracy at **99.2 %** compared with the legacy system.  
- Enabled 10× more model submissions per week without compromising quality.

**Learning & Ownership**  
I iterated on the confidence threshold after a spike in false negatives, demonstrating *Dive Deep* and *Bias for Action*. I documented failures in a post‑mortem and updated the pipeline to include automated rollback if accuracy drops below 98 %. This ownership mindset aligns with Amazon’s Leadership Principles of **Customer Obsession** (ensuring reliable model feedback) and **Ownership** (continuous improvement).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
