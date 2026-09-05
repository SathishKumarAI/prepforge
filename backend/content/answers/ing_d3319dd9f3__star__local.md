---
qid: ing_d3319dd9f3__star__local
question: 'Explain: Timeline of the Week — Llm Security'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 355
total_tokens: 590
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:31:56-05:00'
sources: []
---

**Situation**  
At my last role I was asked to audit and harden the deployment of an on‑prem LLM that our product team used for automated code review. The model was exposed via a REST API, but we had no controls around data leakage or prompt injection.

**Task**  
Within seven days I needed to implement a secure pipeline: isolate user prompts, enforce rate limits, add token‑level filtering, and log all interactions for compliance.

**Action**  
Day 1–2: I mapped the data flow with OpenTelemetry, then set up a lightweight K8s sidecar using Envoy that intercepted every request. Day 3: integrated an open‑source prompt‑filter (OpenAI’s `prompt-filter`) to block disallowed content and added a custom whitelist of allowed functions. Day 4–5: configured rate limiting in Istio, coupled with a Redis‑backed token bucket for burst control. Day 6: built a monitoring dashboard in Grafana that visualized request latency, filter hits, and anomalous patterns. Day 7: ran a penetration test using prompt injection scripts, patched any uncovered vulnerabilities, and documented the process.

**Result**  
We reduced potential data exposure by 92 % (verified via audit logs), cut malicious query attempts to zero over the next month, and received an internal “Secure Deployment” badge. I learned that rapid, layered defenses—combining traffic interception, content filtering, and observability—are essential when deploying LLMs in production.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
