---
qid: ing_c68b9b961f__aws__local
question: What's the difference between continued pretraining and SFT? When do you
  need domain knowledge injection?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 693
total_tokens: 931
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:51:45-05:00'
sources: []
---

**Situation – Problem**  
While launching a new recommendation engine for our e‑commerce platform, the dev team struggled to adapt an open‑source LLM (GPT‑3.5) to understand product categories and pricing nuances. We needed a solution that would be fast to iterate, cost‑effective, and highly accurate.

**Task – What I had to deliver**  
Show the difference between *continued pretraining* vs *supervised fine‑tuning (SFT)*, explain when domain knowledge injection is essential, and design an end‑to‑end pipeline on AWS that meets our SLA of 10 ms inference per request.

**Action – Technical & Behavioral**  

| Step | Design Choice | AWS Services | Reasoning |
|------|---------------|--------------|-----------|
| **Data prep** | Curate a product‑specific corpus (1M sentences, 3 GB) | S3 + Glue | Keeps data versioned and searchable. |
| **Continued Pretraining** | Run masked‑language modeling on the corpus for 2 epochs (≈ 8 hrs GPU). | SageMaker Training Job (p4d.xlarge) | Improves token distribution & reduces perplexity by **30%** on a held‑out validation set. |
| **SFT** | Fine‑tune with labeled intent pairs (5k examples) for 3 epochs. | SageMaker Training + Hyperparameter Tuning | Adds task‑specific signal; accuracy jumps from **68% → 84%** on our test set. |
| **Domain Knowledge Injection** | Inject a knowledge graph of product categories and price ranges into the prompt using an auxiliary embedding layer. | DynamoDB for KG, Lambda to build prompts | Needed because the model’s general world knowledge lacked pricing context; after injection, precision on price‑related queries rose from **70% → 92%**. |
| **Deployment** | Containerize with Docker, push to ECR, deploy via SageMaker Real‑Time endpoint (multi‑AZ). | ECS + Fargate for batch jobs, CloudWatch for monitoring | Achieves 99.9 % availability and scales to 10k RPS at $0.20 per 1K invocations. |

**Result – Impact**  
- Reduced inference latency from **25 ms → 8 ms**.  
- Increased recommendation conversion by **12%**, translating to an extra **$350k/month** in revenue.  
- Cut monthly compute spend by **15%** by switching to spot instances for pretraining.

**Learnings & Ownership**  
I realized early that *domain knowledge injection* is only worthwhile when the base model’s world‑model gaps directly affect business metrics. The bar‑raiser would note my data‑driven validation, cross‑team collaboration (UX + Ops), and post‑mortem analysis of the first batch failures to iterate faster.

> **Leadership Principles**  
> *Customer Obsession* – we tuned the model for the exact user intent that drives sales.  
> *Ownership & Dive Deep* – I owned the full pipeline, from data ingestion to production monitoring, and dug into token‑level errors to guide training.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
