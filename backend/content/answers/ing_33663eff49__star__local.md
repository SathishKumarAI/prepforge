---
qid: ing_33663eff49__star__local
question: 'Explain: Evals that live inside the trace, not in a tool beside it'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 301
total_tokens: 542
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:11:21-05:00'
sources: []
---

**Situation:**  
In my last role I was tasked with debugging a new recommendation engine that used a custom tracing system built on OpenTelemetry. The logs were fine, but the performance metrics kept fluctuating during nightly runs.

**Task:**  
I needed to pinpoint whether the variability came from data preprocessing or the model inference step without adding another monitoring tool that would double our telemetry overhead.

**Action:**  
Instead of hooking an external profiler, I embedded lightweight “evals” directly into the trace spans. For each span I added a small Python lambda that calculated a rolling mean of latency and a success‑rate metric using only in‑memory counters. These evals ran as part of the tracer’s `on_span_end` callback, so every finished span automatically produced its own metrics bundle. I then aggregated those bundles in Grafana via Prometheus scrape on the trace exporter endpoint, keeping everything in a single pipeline.

**Result:**  
The built‑in evals revealed that 35 % of the latency spikes were due to a GPU memory thrashing bug in the inference stage. Fixing it dropped average latency from 420 ms to 250 ms and stabilized throughput at 1.8k requests per second. I learned that embedding evaluation logic inside traces can give you real‑time, low‑overhead diagnostics without extra tooling overhead.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
