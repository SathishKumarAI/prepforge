---
qid: ing_1218cb2951__faang__local
question: What do you monitor in production LLM serving, and what pages someone at
  3 a.m.?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 551
total_tokens: 793
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:25:50-05:00'
sources: []
---

**Clarify**  
We’re asked which metrics/alerts an engineer should keep in mind when an LLM is live, and what a night‑shift operator would look at if something goes wrong at 3 a.m.  
Assumptions: the model runs behind a microservice (REST/gRPC), traffic is user‑generated, latency matters for UX, and we have A/B‑testing or can roll back.

**Approach**  
1. Define *health* vs *performance* metrics.  
2. Build dashboards/alerting that surface both.  
3. Prioritize alerts that indicate a regression in quality or availability.

**Depth**  
| Category | Key Metrics | Why it matters |
|----------|-------------|----------------|
| **Availability** | 99.9 % uptime, request‑level success rate | Guarantees service is reachable. |
| **Latency** | 95th/99th percentile latency, mean latency | UX hinges on response time; spikes can indicate resource contention or cold starts. |
| **Resource Utilization** | GPU/CPU memory usage, batch size, queue depth | Prevents OOM and ensures efficient inference. |
| **Throughput** | QPS, token‑per‑second | Detects throttling or backpressure. |
| **Quality / Safety** | Prompt‑level failure rate (e.g., hallucination flag), user‑reported issues | Protects brand and regulatory compliance. |
| **Model Drift** | Token distribution shift, perplexity on held‑out data | Signals need for retraining. |

At 3 a.m. an operator would first check the *availability* alert—if requests are failing, then look at *latency* spikes, followed by GPU memory usage. If latency is high but availability is fine, investigate queue depth or batch size changes. A sudden drop in token‑per‑second could hint at a throttling rule firing.

**Edge Cases**  
- Sudden traffic surge (flash crowd) → queue backlog.  
- Batch size mismatch after a deployment → memory OOM.  
- Model update introduces bias → safety alert triggers.

**Optimize & Communicate**  
Automate rollbacks when success‑rate drops below 95 % for >5 min, and auto‑scale GPU nodes based on queue depth. When explaining to stakeholders, emphasize that monitoring is a *feedback loop*: metrics inform alerts, alerts drive operational actions, which in turn refine the model and deployment pipeline. This keeps both latency and quality within SLAs while minimizing manual night‑shift interventions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
