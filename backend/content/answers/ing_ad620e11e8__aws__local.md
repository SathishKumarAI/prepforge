---
qid: ing_ad620e11e8__aws__local
question: 'Explain: Okay? so, now let''s run our program — Python Full Course for
  Beginners'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 467
total_tokens: 704
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:57:30-05:00'
sources: []
---

**Situation & Task**  
I was tasked to launch a “Python for Beginners” ML pipeline that auto‑generates lesson plans and evaluates student code on our e‑learning platform. The goal was to cut manual grading time by **70 %** while keeping accuracy above 90 %.

**Action (Technical)**  
1. **Data ingestion** – Students’ code snapshots go into an S3 bucket; a Lambda trigger writes metadata to DynamoDB.  
2. **Feature extraction & model training** – A SageMaker notebook cluster (p3.2xlarge) ingests the dataset, engineers features (token counts, AST depth), and trains a Gradient‑Boosted Trees model on 200 GB of historical submissions.  
3. **Inference service** – The trained model is deployed as an endpoint in SageMaker; Lambda calls it with new code snippets, returning a pass/fail score and suggested corrections.  
4. **Observability & scaling** – CloudWatch dashboards track latency (target < 300 ms) and error rates; auto‑scaling adjusts the number of inference instances based on queue depth.

**Result**  
- Grading time dropped from **3 hours → 20 minutes** per batch (70 % reduction).  
- Accuracy improved to **92 %**, surpassing the 90 % target.  
- Operational cost stayed under $2k/month, a 30 % saving over the previous manual process.

**Leadership Principles**  
- *Ownership*: I owned the entire ML lifecycle, from data capture to deployment and monitoring.  
- *Dive Deep*: I profiled Lambda cold starts and SageMaker latency to pinpoint bottlenecks, then re‑architected the inference layer for sub‑300 ms response times.  

**Bar‑raiser takeaways**  
Listeners expect a clear ownership narrative, quantified impact, deep technical reasoning (why S3 + Lambda + SageMaker), and evidence of learning—here I iterated on model choice after an initial 85 % accuracy failure, pivoting to GBTs for better performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
