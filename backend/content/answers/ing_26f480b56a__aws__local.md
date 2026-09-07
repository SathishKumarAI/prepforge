---
qid: ing_26f480b56a__aws__local
question: 'Explain: Likely interviewer follow-ups — Content Moderation Pipeline'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 431
total_tokens: 662
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:53:57-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> **Situation & Task:** While leading a product that publishes user‑generated video, I noticed a spike in policy violations during a marketing campaign—1 % of all uploads were flagged for hate speech and graphic content. The business required an automated moderation pipeline that could scale to 10 M uploads/day while keeping latency under 2 s per clip.

> **Action:**  
> *Built a micro‑service architecture on **AWS Lambda** + **Step Functions** to orchestrate the workflow: S3 trigger → pre‑processing (resolution, audio extraction) → parallel inference with **Amazon Rekognition Video** and custom **SageMaker** models.  
> *Implemented a feedback loop using **Amazon DynamoDB** for human review scores; fed back into model retraining on an hourly schedule via **SageMaker Pipelines**.  
> *Introduced cost controls: auto‑scaling Lambda concurrency, spot instances for training, and S3 lifecycle policies to purge 30 days of raw data.  
> *Monitored metrics in CloudWatch and set up alerts for false‑positive rate >2%.  

> **Result:** Reduced policy violations by 87 % (from 1 % to 0.13 %) while keeping moderation latency at 1.8 s, and cut operational cost by 35 % compared to the legacy batch system.

> **Leadership Principles Highlighted:**  
> *Customer Obsession* – Protecting user experience through rapid, accurate moderation.  
> *Ownership* – Designed end‑to‑end pipeline, drove continuous improvement loop.  
> *Dive Deep* – Analyzed model error patterns, tuned thresholds, and iterated on architecture.

> **Bar‑raiser cues:** Ownership of the entire lifecycle, depth in performance trade‑offs, quantitative impact, and learning from the initial high false‑positive spike to refine the system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
