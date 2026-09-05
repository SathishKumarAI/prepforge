---
qid: ing_d746fec85a__star__local
question: 'Explain: Latency — Serverless Architecture - by Neo Kim'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 390
total_tokens: 628
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:39:22-05:00'
sources: []
---

**Situation:**  
When I joined the fintech team at FinSecure, we were migrating our fraud‑detection pipeline from an on‑prem cluster to a serverless stack on AWS Lambda and API Gateway. Our internal dashboards reported that detection latency had ballooned from ~200 ms to almost 2 seconds during peak hours, hurting real‑time risk scoring.

**Task:**  
I needed to reduce the end‑to‑end latency of the Lambda function by at least 60% while keeping the cost within a 15% budget increase and ensuring cold‑start performance didn’t degrade under burst traffic.

**Action:**  
First I instrumented the function with CloudWatch metrics and X-Ray traces to isolate bottlenecks. The heavy dependency was on loading a large pre‑trained model (≈80 MB) from S3 each invocation. I switched to using Lambda layers for the model, enabled provisioned concurrency during peak windows, and implemented an in‑memory cache keyed by request hash. I also rewrote the inference code to use ONNX Runtime with reduced precision (FP16), cutting GPU‑like acceleration into the CPU path. Finally, I set up a step‑function orchestration to split the job into two lightweight Lambdas: one for feature extraction and another for scoring, allowing parallel execution.

**Result:**  
Latency dropped from 1.8 seconds to 600 ms on average, with peak latency under 800 ms. Cost rose only 12% due to provisioned concurrency. The experiment taught me that in serverless, the biggest gains come from avoiding per‑invocation heavy I/O and leveraging layers plus parallelism; and that profiling early is critical to target the right optimizations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
