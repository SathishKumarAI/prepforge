---
qid: ing_79bd331843__star__local
question: Design an internal LLM gateway for ~40 product teams. What does "platform
  as product" mean concretely here?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 388
total_tokens: 637
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:37:11-05:00'
sources: []
---

**Situation:**  
Our company rolled out a new internal large‑language‑model (LLM) service that needed to be used by roughly forty product teams across engineering, marketing, and support. Each team had different data privacy rules, latency expectations, and model‑fine‑tuning needs.

**Task:**  
I was tasked with building an “internal LLM gateway” that would let every team access the LLM as a consumable API while ensuring governance, monitoring, and cost control—essentially turning the LLM platform into a product our teams could buy from us.

**Action:**  
1. Designed a multi‑tenant API layer in Go with per‑team rate limits, request throttling, and OAuth2 scopes.  
2. Built a dynamic “model catalog” that exposed available base models (e.g., GPT‑4o, custom fine‑tuned variants) and allowed teams to spin up temporary inference endpoints via Kubernetes Jobs.  
3. Implemented telemetry with Prometheus/Grafana dashboards, logging all prompts and responses for auditability.  
4. Added a cost‑allocation module that parsed billing from the cloud provider’s API and mapped usage back to team IDs in our billing system.  
5. Ran a pilot with three teams, iterating on SLA definitions (latency < 200 ms, error rate <1%) and tightening security controls.

**Result:**  
Within two months we had 38 of the 40 teams actively using the gateway, reducing their own inference infrastructure spend by ~30% and cutting model‑deployment time from weeks to days. The platform now operates as a self‑service product: teams “order” model versions, set quotas, and receive usage metrics—demonstrating true “platform as product” with clear ownership, SLAs, and financial transparency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
