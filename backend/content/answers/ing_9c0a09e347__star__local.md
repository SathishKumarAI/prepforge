---
qid: ing_9c0a09e347__star__local
question: What is distributed tracing, and why is it important?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 315
total_tokens: 552
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:43:59-05:00'
sources: []
---

**Situation:**  
When I joined the fraud‑detection team at a fintech startup, our real‑time scoring service was built as a microservice architecture. After a surge in traffic, we started seeing unpredictable latency spikes that caused false negatives on high‑risk transactions.

**Task:**  
I had to pinpoint the root cause of the latency and reduce the average response time from 350 ms to under 200 ms without disrupting live users.

**Action:**  
I introduced distributed tracing with OpenTelemetry and Jaeger. First, I instrumented each service—ingress gateway, score calculator, and persistence layer—to emit trace spans. I configured a sampling strategy that captured 5% of requests during peak hours. Using the traces, I visualized call graphs and identified a bottleneck in the external credit‑score API; its retry logic was adding ~120 ms per request. I refactored the client to use exponential backoff with circuit breaking and added caching for repeated lookups. I also tweaked JVM GC settings on the scoring service based on trace insights.

**Result:**  
Latency dropped from 350 ms to 185 ms, improving fraud‑detection accuracy by 12%. The tracing system now provides real‑time alerts for anomalous spans, and I documented a playbook that reduced incident response time by 40% for future traffic spikes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
