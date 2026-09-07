---
qid: ing_95ff7085ad__faang__local
question: 'Explain: Non-functional Requirements — Mapserviceyelpgooglemap'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 466
total_tokens: 701
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:32:45-05:00'
sources: []
---

**Non‑Functional Requirements for a Map Service (e.g., Yelp/Google Maps)**  
*(FAANG interview style – 160–240 words)*  

| # | Section | Content |
|---|---------|---------|
|1| **Clarify** | “We’re building a location‑based service that shows POIs, routes, and real‑time traffic. The question asks what non‑functional constraints (performance, reliability, security, etc.) we must satisfy.”  Ask: target user base, devices, data volume, compliance needs. |
|2| **Approach** | 1️⃣ Define key NFR categories. <br>2️⃣ Map each category to concrete metrics. <br>3️⃣ Prioritize based on business impact (e.g., latency for routing). |
|3| **Depth** | • **Scalability** – horizontal scaling of map tiles and POI catalogs; use CDN + sharded databases.<br>• **Performance** – < 100 ms end‑to‑end for tile fetch, < 500 ms route calculation.<br>• **Availability** – 99.9% uptime; multi‑region active‑active with health checks.<br>• **Security** – TLS everywhere, OAuth for user data, rate limiting, GDPR/CCPA compliance.<br>• **Data Consistency** – eventual consistency for POI updates, strong consistency for user edits.<br>• **Maintainability** – modular microservices, automated CI/CD, observability (tracing, metrics). |
|4| **Edge Cases** | • Sudden traffic spike (e.g., emergency); need auto‑scaling & graceful degradation. <br>• Offline mode: cache recent tiles; fallback to static map. <br>• Privacy breach: data minimization, audit logs. |
|5| **Optimize & Communicate** | Highlight trade‑offs: stronger consistency → higher latency; CDN caching reduces load but may serve stale POIs. Explain that we’ll iterate with A/B tests and monitor SLAs. Conclude by tying each NFR to user value (speed, reliability, trust).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
