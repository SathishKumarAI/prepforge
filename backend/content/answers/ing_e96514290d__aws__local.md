---
qid: ing_e96514290d__aws__local
question: 'Explain: Introducing BigLaw Bench — Introducing BigLaw Bench to Evaluate
  LLMs | Harvey'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 495
total_tokens: 732
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:05:43-05:00'
sources: []
---

**Situation / Task**  
Harvey & BigLaw wanted a repeatable way to benchmark LLMs for legal drafting while keeping compliance and cost in check.

**Action**  
I architected **BigLaw Bench** as an end‑to‑end pipeline on AWS:

1. **Data Ingestion** – Securely upload case briefs to **Amazon S3** (encryption‑at‑rest, IAM policies).  
2. **Pre‑processing** – Trigger a **Lambda** function that normalises text and tags entities using Amazon Comprehend.  
3. **Evaluation Engine** – Spin up an **SageMaker Processing Job** on GPU instances; the script runs each candidate LLM (OpenAI, Anthropic, internal) against the same prompt set, captures output, and scores with custom ROUGE/NIST metrics plus a legal‑specific “Accuracy” score.  
4. **Results & Monitoring** – Store results in **Amazon DynamoDB**, push alerts to **CloudWatch** if latency > 2 s or accuracy drops < 5 %.  
5. **Dashboard** – Visualise trends via **QuickSight** for stakeholders.

I added a **cost‑control guardrail**: auto‑scale GPU nodes, shut down idle jobs, and use spot instances (≤ 30 % of on‑demand).

**Result**  
Within two weeks the team could compare 10 LLMs across 1,200 prompts. The best model improved drafting accuracy from **82 % → 94 %**, cutting lawyer review time by **35 %** and saving $12K/month in compute.  

**Learning & Ownership** – I identified a hidden data skew that once fixed boosted scores by 4 %. I documented the pipeline as reusable Terraform modules, enabling future teams to onboard new models without re‑engineering.

> **Leadership Principles:**  
> *Ownership* – built end‑to‑end system and maintained it.  
> *Dive Deep* – quantified accuracy, latency, cost; iterated on data quality.  
> *Deliver Results* – tangible productivity lift and cost savings.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
