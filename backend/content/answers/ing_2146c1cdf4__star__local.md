---
qid: ing_2146c1cdf4__star__local
question: 'Explain: Usage metrics ​ — About Glean MCP server'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 361
total_tokens: 598
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:36:09-05:00'
sources: []
---

**Situation:**  
In my last role at a SaaS analytics firm, we launched the Glean MCP (Machine‑Learning Content Processor) server as part of our real‑time recommendation engine. Within two weeks of deployment, internal dashboards showed a steady drop in query throughput—only 68 % of expected requests were hitting the server, and latency spiked from 120 ms to 250 ms.

**Task:**  
I was tasked with diagnosing the root cause, restoring performance, and implementing robust usage metrics so we could proactively catch similar issues in future releases.

**Action:**  
First, I added a Prometheus exporter to the MCP that recorded per‑endpoint hit counts, error rates, and response times, then visualized them on Grafana. Next, I enabled detailed tracing via OpenTelemetry, correlating slow requests with specific model inference calls. The data revealed that a newly added “contextual relevance” model was being called 3× more often than anticipated due to an oversight in request batching logic. I refactored the batch scheduler to cap concurrent calls and introduced a rate‑limit per user session. Finally, I set up alerting thresholds (e.g., >90 % error rate triggers an incident) and automated dashboards that display real‑time usage versus capacity.

**Result:**  
After the fixes, throughput rebounded to 97 % of target, latency dropped back to 115 ms, and we avoided a potential outage. The new metrics suite now provides early warning for any future performance regressions, and I’ve documented the entire pipeline so other teams can replicate it for their own ML services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
