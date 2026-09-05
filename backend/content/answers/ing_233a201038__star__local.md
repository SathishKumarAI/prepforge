---
qid: ing_233a201038__star__local
question: 'Explain: Breaking down the different types of tracing'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 328
total_tokens: 563
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:39:29-05:00'
sources: []
---

**Situation:**  
While leading a production‑grade recommendation engine at a streaming platform, we started seeing sudden latency spikes during model inference. The dashboards only showed average response time, so I needed to dig deeper into the execution pipeline.

**Task:**  
I had to identify which part of the ML stack—data preprocessing, feature extraction, or model inference—was responsible for the delays and provide a clear plan to fix it without impacting throughput.

**Action:**  
First, I implemented **system tracing** with OpenTelemetry to capture end‑to‑end request traces across microservices. Then I added **application tracing** by instrumenting the TensorFlow Serving API calls to record GPU utilization and batch sizes. Finally, I deployed **model tracing** using a lightweight profiler that logged each layer’s execution time inside the neural network. By correlating these three trace layers in Grafana, I pinpointed that the feature extractor was shuffling data inefficiently during peak hours.

I refactored the extractor to use a pre‑shuffled buffer and added a caching layer, reducing its latency from 120 ms to 30 ms per request.

**Result:**  
Overall inference latency dropped by 35%, and we maintained a 99.9% SLA even under traffic spikes. The exercise taught me that layered tracing—system, application, and model—is essential for isolating bottlenecks in ML pipelines, and that each layer requires different instrumentation tools to be effective.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
