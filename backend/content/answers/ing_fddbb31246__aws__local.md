---
qid: ing_fddbb31246__aws__local
question: 'Explain: Cosine Similarity — Embeddings And Vector Spaces'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 465
total_tokens: 696
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:52:12-05:00'
sources: []
---

**Answer (Amazon‑style)**  

*Leadership Principles:* **Customer Obsession**, **Dive Deep**

> **Situation:** I was tasked to improve a recommendation engine for an e‑commerce platform that served millions of users daily. The existing item‑to‑item similarity calculation was based on sparse bag‑of‑words, leading to low relevance scores and a 12 % drop in click‑through rate (CTR).  
> **Task:** Replace the heuristic with a vector‑based similarity model using word‑and‑sentence embeddings, ensuring latency ≤ 50 ms per request and cost < $0.02/1K queries.  
> **Action:**  
> *Collected 2M product descriptions, generated 300‑dimensional embeddings with **Sentence‑BERT** on an EC2 GPU cluster (p3.2xlarge).  
> *Implemented a scalable similarity lookup using **Amazon SageMaker Neo** for model optimization and deployed to **ECS Fargate** behind an Application Load Balancer.  
> *Used **cosine similarity**: 𝑐osθ = (v₁·v₂)/(‖v₁‖‖v₂‖) – normalizes vectors, making similarity independent of magnitude and robust to sparse data.  
> *Integrated **Elasticsearch** with the “knn” plugin for sub‑millisecond nearest‑neighbor search; tuned `k=10` to balance recall vs latency.  
> *Monitored with CloudWatch; applied autoscaling based on request rate, keeping CPU < 70 %.  
> **Result:** CTR rose 18 % within two weeks, revenue increased by $1.2M/month, and infrastructure cost dropped 30 % compared to the legacy solution.  

*Bar‑raiser focus:* Demonstrated ownership (full pipeline from data prep to deployment), deep dive into cosine math and vector scaling, quantified impact (CTR & revenue lift), and learned that pre‑normalizing embeddings drastically reduces drift across product updates.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
