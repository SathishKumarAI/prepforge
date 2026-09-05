---
qid: ing_a4f97e851e__star__local
question: 'Explain: Domain-Specific Routing — Production Rag At Scale'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 360
total_tokens: 596
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:03:12-05:00'
sources: []
---

**Situation:**  
At my last company we launched a multi‑tenant SaaS platform that served both retail and financial clients. By Q2, our traffic had doubled to 30 M requests/day, but latency for the finance tier was creeping above 250 ms during peak hours, hurting compliance SLAs.

**Task:**  
I needed to redesign routing so each tenant’s traffic followed a dedicated path with appropriate QoS, without adding costly hardware or rewriting the entire request pipeline.

**Action:**  
1. **Domain‑specific routing layer:** I introduced an Envoy sidecar per service that inspects the “X‑Tenant‑ID” header and forwards requests to tenant‑specific upstream clusters.  
2. **Dynamic cluster config:** Using Consul KV, we stored each tenant’s desired latency budget and bandwidth limits; a small Go daemon watches changes and updates Envoy configs via its XDS API in real time.  
3. **Traffic shaping & retries:** For high‑risk finance routes I enabled 100 ms request timeouts and circuit breakers; for retail I allowed longer back‑offs.  
4. **Observability:** Integrated OpenTelemetry to tag traces with tenant ID, then pushed metrics to Prometheus, enabling us to see per‑tenant latency curves instantly.

**Result:**  
Latency for finance tenants dropped from 260 ms to 120 ms (a 54% improvement) and remained below SLA thresholds during traffic spikes. Overall request throughput increased by 12% due to reduced retry churn. I learned that fine‑grained, header‑based routing coupled with dynamic configuration can scale cleanly across thousands of tenants without extra infrastructure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
