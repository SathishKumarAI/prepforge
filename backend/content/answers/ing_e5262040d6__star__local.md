---
qid: ing_e5262040d6__star__local
question: 'Explain: Too slow to stop anything — Luna Evaluation Models  Cloud Observability
  | Splunk'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 393
total_tokens: 637
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:06:00-05:00'
sources: []
---

**Situation:**  
At my last role at a fintech startup we built “Luna,” a real‑time fraud detection service that ran on AWS Lambda and fed results into Splunk for observability. During a quarterly review the SLA was to evaluate new models in under 30 seconds, but our end‑to‑end latency hit 3–4 minutes—so nothing could be stopped before it passed through.

**Task:**  
I had to redesign the evaluation pipeline so that model inference, feature engineering, and metric reporting all fit within the 30‑second window while still sending full logs to Splunk for auditability.

**Action:**  
First I profiled each stage with AWS Xray; the bottleneck was a nightly Spark job that pre‑aggregated features. I refactored it to run on an EMR cluster with Spot instances and pushed the feature store into DynamoDB, reducing lookup time from 1 s to <50 ms per request. Next, I switched the Lambda runtime from Python 3.6 to Go for lower cold‑start overhead and bundled only the necessary model artifacts in a Docker layer. Finally, I set up Splunk’s HTTP Event Collector with batched writes (5 k events per batch) instead of single‑event posts, cutting network overhead.

**Result:**  
The end‑to‑end latency dropped from 3 minutes to 18 seconds—well under the SLA. We also saw a 25 % reduction in Lambda invocations cost and improved observability with richer, time‑synchronized logs in Splunk. I learned that profiling early and decoupling feature store layers can dramatically improve real‑time ML pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
