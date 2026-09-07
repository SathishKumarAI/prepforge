---
qid: ing_faa81757ef__aws__local
question: 'Explain: Tools you''ll learn — Generative AI with Large Language Models
  | Coursera'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 484
total_tokens: 719
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:45:07-05:00'
sources: []
---

**Situation / Task**  
I was hired as a Cloud Solutions Architect for a media company that wanted to prototype a chatbot using generative AI. My goal: evaluate the Coursera course “Generative AI with Large Language Models” and map its content to our production stack.

**Action (Technical)**  
The course covers *LLMs, prompt engineering, fine‑tuning*, and *deployment pipelines*. I mapped each module to AWS services:

| Course topic | AWS equivalent | Why |
|--------------|----------------|-----|
| Model training & fine‑tuning | **Amazon SageMaker** (managed Jupyter, distributed training) | Scalable GPU clusters; built‑in hyperparameter tuning. |
| Prompt engineering & inference | **Amazon Bedrock** (LLM APIs) + **Lambda@Edge** for real‑time responses | Low latency, global edge distribution. |
| Data prep & pipelines | **AWS Glue / Lake Formation** | Securely ingest and transform training data at scale. |
| Monitoring & governance | **Amazon CloudWatch + SageMaker Model Monitor** | Continuous drift detection; audit logs for compliance. |

I ran a proof‑of‑concept: fine‑tuned an LLM on 200 GB of internal scripts, achieving a BLEU score increase from 0.42 to 0.57 (≈35 % relative improvement) and cut inference cost by 40 % using **Inference Scheduler**.

**Result**  
The pilot was approved; we launched the chatbot in production with <30 ms latency at 99.9 % availability, under a $12k/month budget—15 % cheaper than our legacy rule‑based system. I documented lessons: early data labeling errors caused drift; adding a nightly validation job prevented that.

**Leadership Principles Highlighted**

- **Ownership** – Took full responsibility for the end‑to‑end pipeline and cost control.  
- **Dive Deep** – Analyzed model metrics, GPU utilization, and latency graphs to identify bottlenecks.  

**What a Bar‑Raiser Looks For**

1. *Quantified impact* (BLEU improvement, cost savings).  
2. *Depth of technical reasoning* (service trade‑offs, scalability).  
3. *Learning from failure* (drift mitigation).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
