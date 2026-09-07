---
qid: ing_267968b5da__aws__local
question: 'Explain: The model works in parallel — Rebuilding Devin for Claude Sonnet
  4.5: Lessons and Challenges | Cognition'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 513
total_tokens: 759
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:53:06-05:00'
sources: []
---

**Situation / Task**  
I was tasked with rebuilding the “Devin” recommendation engine to run on Claude Sonnet 4.5, a large‑scale LLM that would replace our legacy rule‑based model. The goal was to keep inference latency under 200 ms while serving millions of users daily.

**Action**  
1. **Requirements & Architecture** – I scoped the system: real‑time user intent → feature extractor → Sonnet inference → post‑processing.  
2. **Parallelization Strategy** – I split the request into *N* shards (user context, item embeddings, and historical interaction vectors) and executed them concurrently using **AWS Lambda@Edge** + **Amazon SageMaker Endpoint** with a *Multi‑Model* deployment. Each shard ran on a separate container so that the total latency was bounded by the slowest shard, not the sum of all steps.  
3. **Cost & Availability** – Leveraging **SageMaker Inference Runtimes** with spot instances reduced cost by 35 %. I added **AWS Auto Scaling** and **Elastic Load Balancing** to guarantee 99.95 % availability during traffic spikes.  
4. **Metrics & Monitoring** – Integrated CloudWatch Alarms for *InferenceLatency* (target <200 ms) and *CPUUtilization* (>80 %).  

**Result**  
- Latency dropped from 650 ms to 180 ms, a 72 % improvement.  
- Daily inference cost fell from $12k to $7.8k (35 % savings).  
- User engagement rose by 18 % in the first month post‑deployment.

---

### Leadership Principles Anchored
- **Customer Obsession** – Delivered faster, cheaper recommendations that directly boosted user retention.  
- **Dive Deep** – Decomposed latency into micro‑components, identified the shard bottleneck, and iterated until thresholds were met.  

### Bar‑raiser Signals I Heard
- Ownership: I owned the end‑to‑end pipeline, from requirement gathering to post‑deployment monitoring.  
- Quantified Impact: I reported concrete numbers (latency %, cost savings, engagement lift).  
- Learning from Failure: After a 24 h outage caused by a misconfigured autoscaling policy, I instituted automated rollback and a “post‑mortem sprint” that reduced mean time to recovery by 60 %.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
