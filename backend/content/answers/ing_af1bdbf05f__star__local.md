---
qid: ing_af1bdbf05f__star__local
question: 'Explain: you know, if you have to build — Building Software Systems At
  Google and Lessons Learned'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 326
total_tokens: 571
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:22:25-05:00'
sources: []
---

**Situation:**  
When I joined the AutoML team, our pipeline was monolithic and took over an hour to train a single model on the new TPU‑v4 cluster. The latency hit customer deployments and cost estimates were off by 35 %.  

**Task:**  
I had to refactor the system into micro‑services, cut training time to under 20 minutes, and reduce GPU usage by at least 25 % without sacrificing accuracy.  

**Action:**  
I introduced a data‑flow DAG with Apache Beam for parallel preprocessing, switched from raw TensorFlow graphs to XLA‑compiled kernels, and added an autoscaling job queue that spawns Spot TPU pods when demand spikes. I also implemented model checkpointing with sharded checkpoints in Cloud Storage, enabling resume after failures. For hyper‑parameter tuning, I replaced grid search with Bayesian optimization via Vizier, cutting experiment cycles from 50 to 12 runs.  

**Result:**  
Training time dropped from 60 min to 18 min (70 % reduction). GPU utilization fell from 80 % to 55 %, saving roughly $3k/month in TPU credits. Accuracy stayed within 0.1 % of the baseline, and deployment latency improved by 40 %. I learned that early abstraction layers—data flow, autoscaling, and experiment orchestration—are critical for scaling ML at Google’s scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
