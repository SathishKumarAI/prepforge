---
qid: ing_4e4dd03e05__star__local
question: 'Explain: that we''re probably hosting like a number'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 433
total_tokens: 668
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:05:16-05:00'
sources: []
---

**Situation**  
I was leading the rollout of an image‑classification model at a mid‑size e‑commerce company that had just migrated its inference pipeline to Kubernetes on AWS. The existing batch job served about 500,000 requests per day, but we expected a 3× traffic spike during a holiday sale.

**Task**  
Determine how many container hosts (EC2 instances) were needed so the model could serve 1.5 million predictions per hour with <200 ms latency and 99th‑percentile SLA, while staying cost‑efficient.

**Action**  
First I profiled the current inference code: a single GPU instance processed ~3,000 requests/min. I then modeled throughput vs. concurrency by running a load test on a single pod using Locust, varying the number of worker threads and batch size. The sweet spot was 8 workers with a batch size of 32, yielding ~4,500 req/min per pod. Next, I calculated required pods:  
1,500,000 req/hr ÷ (4,500 req/min × 60 min) ≈ 5.6 → rounded to 6 pods.  
To keep the cluster resilient I added a 25% buffer, so I provisioned 8 GPU hosts. Finally, I automated scaling with HPA that watched CPU/queue latency and spun up/down pods within 2 minutes.

**Result**  
The new deployment handled 1.7 million requests in the first hour of launch with an average latency of 145 ms and no SLA breaches. Cost per inference dropped by 18% compared to the legacy batch system, and I documented the profiling methodology so the ops team could adapt it for future model upgrades. This exercise taught me that realistic throughput modeling and a small safety margin are key to balancing performance with cost in ML serving.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
