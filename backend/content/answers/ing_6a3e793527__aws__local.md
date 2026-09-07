---
qid: ing_6a3e793527__aws__local
question: 'Do I need ML expertise? — Glean Interview Guide (2026): Process, Questions,
  Compensation \u2013 techinterview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 427
total_tokens: 674
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:24:48-05:00'
sources: []
---

**Answer (Amazon style)**  

> *Leadership Principles:* **Customer Obsession**, **Ownership**  
> 
> **Situation:** I was tasked with launching a recommendation engine for a new e‑commerce line that had no in‑house ML team.  
> 
> **Task:** Deliver a production‑ready model within 90 days while keeping costs under $20K/month and latency <200 ms.  
> 
> **Action:**  
> * **Own the data** – I set up an S3 “raw” bucket, used Glue to crawl logs, and built a Redshift warehouse for feature engineering (≈30 GB).  
> * **Rapid experimentation** – leveraged SageMaker Autopilot to train 12 candidate models; tuned hyper‑parameters with Bayesian search.  
> * **Deploy & monitor** – deployed the best model as a Lambda‑backed API behind ALB, using CloudWatch for latency and error metrics; set up a feedback loop that retrains every week on new clickstream data.  
> * **Cost control** – switched from On‑Demand to Spot instances for training, cutting GPU hours by 60 %.  
> 
> **Result:** The engine increased conversion by **18 %** (from 3.2 % to 3.8 %) and reduced average cart size cost per user by $0.45/month—saving ~$170K annually.  
> 
> **Bar‑raiser notes:** I demonstrated *ownership* by turning a skill gap into a full end‑to‑end pipeline, used *dive deep* to quantify every trade‑off (cost vs latency), and learned from early false positives in the feedback loop by instituting A/B tests before rollout.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
