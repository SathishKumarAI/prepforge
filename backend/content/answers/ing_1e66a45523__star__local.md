---
qid: ing_1e66a45523__star__local
question: 'Explain: Fetch traces and filter by span name — Ai Evals Comprehensive
  Study Guide'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 319
total_tokens: 560
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:30:28-05:00'
sources: []
---

**Situation**  
During a quarterly performance audit for our AI inference service, the monitoring team noticed an abnormal spike in latency during peak hours. The logs were flooded with thousands of spans per request, making it hard to pinpoint which component was slowing us down.

**Task**  
I needed to isolate the problematic span—specifically the “model‑inference” span—to see how its execution time correlated with the overall latency and identify any degradation in the model serving layer.

**Action**  
Using our OpenTelemetry exporter, I pulled the latest 5 k traces from the Jaeger backend via `curl` and piped them into a Python script. The script parsed each trace’s JSON, filtered for spans where `span_name == "model-inference"`, and computed the average duration per service instance. I then plotted the results against the request timestamps and cross‑checked with the CPU/memory metrics from Prometheus to see if resource contention was a factor.

**Result**  
The analysis revealed that the “model‑inference” span had increased from 120 ms to 275 ms during the spike, correlating with a 35% drop in throughput. We identified a memory leak in the model cache and patched it, restoring latency to baseline (≈110 ms) and improving overall request success by 18%. This exercise reinforced the value of targeted span filtering for rapid root‑cause analysis in AI workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
