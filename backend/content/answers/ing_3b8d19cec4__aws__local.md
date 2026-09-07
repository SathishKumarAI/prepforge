---
qid: ing_3b8d19cec4__aws__local
question: 'Explain: Books for ML Interview Prep'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 465
total_tokens: 692
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:41:00-05:00'
sources: []
---

**Situation & Task**  
I was tasked with building a scalable study‑plan platform that recommends the *top 10* books for every candidate’s ML interview prep level (beginner, intermediate, advanced). The goal: improve user engagement by **30 %** and reduce churn by **15 %** within six months.

**Action**  
1. **Data‑driven discovery** – Collected 12M review points from Goodreads, Coursera, and internal surveys; used AWS Glue to clean & catalog the data in Athena.  
2. **Model design** – Trained a multi‑label recommendation model (LightGBM + embeddings) on S3‑stored feature vectors. Deployed with SageMaker Pipelines for CI/CD.  
3. **Infrastructure** –  
   * **SageMaker Endpoint** behind an Application Load Balancer (ALB) with Auto Scaling, ensuring 99.9 % availability.  
   * **Caching**: Amazon ElastiCache Redis (10 ms latency) for the most frequent queries.  
   * **Cost control**: Spot Instances for training, on‑demand for inference; overall cost dropped 40 %.  
4. **Feedback loop** – Integrated with CloudWatch and DynamoDB to capture click‑through rates; retrained nightly using new data.

**Result**  
- User engagement increased **32 %**, surpassing the target.  
- Churn fell by **18 %** within three months.  
- Training cost reduced from $12K/month to $7.2K/month (40 % savings).  

**Leadership Principles Anchored**  
- *Customer Obsession*: Built a recommendation engine that directly addressed user pain points, validated through A/B testing.  
- *Ownership & Dive Deep*: Took full responsibility for data pipelines, model fidelity, and cost optimization; iterated until metrics met goals.  

**Bar‑raiser Takeaways**  
- Demonstrated end‑to‑end ownership from data ingestion to deployment.  
- Quantified impact with concrete percentages.  
- Showed learning loop: initial low CTR → feature engineering → performance lift.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
