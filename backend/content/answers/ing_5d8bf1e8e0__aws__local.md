---
qid: ing_5d8bf1e8e0__aws__local
question: 'Explain: How it works: — System Design: What is Service Discovery?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 658
total_tokens: 893
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:57:15-05:00'
sources: []
---

**Answer (Amazon Way)**  

> **Leadership Principles:** *Customer Obsession* – we build discovery so that micro‑services can find each other quickly and reliably; *Ownership* – I own the end‑to‑end reliability of the service registry.

### Situation  
In a 200‑service e‑commerce platform, new deployments started failing because services couldn’t locate their peers. The team’s SLA for “hot” APIs was slipping from 99.9 % to 97 %.

### Task  
Design a robust **Service Discovery** layer that scales to >1 k requests/sec per service, guarantees low latency (<5 ms), and reduces operational toil.

### Action  
1. **Requirements & Constraints**  
   * *Dynamic registration* – services register/deregister on start/stop.  
   * *Health‑check* – failover after 3 consecutive failures.  
   * *Latency* – <5 ms DNS‑style lookup.  
   * *Cost* – keep under $0.02 per request.

2. **Design**  
   * Use **AWS Cloud Map** as the central registry (managed, low‑latency, health‑checks).  
   * Each service runs a lightweight Envoy sidecar that registers its IP/port with Cloud Map on boot and deregisters on shutdown.  
   * Clients query Cloud Map via the **AWS SDK**; SDK caches entries for 30 s to cut down API calls (cache hit rate >95 %).  
   * For high‑traffic services, add a local in‑memory cache (e.g., Go’s `sync.Map`) behind Envoy to serve 99.9 % of lookups without hitting Cloud Map.

3. **Scalability & Availability**  
   * Cloud Map is fully managed; no single point of failure.  
   * Health checks run on a separate thread, so registration failures are detected within 10 s.  
   * Envoy sidecars auto‑reconnect to Cloud Map after network hiccups.

4. **Cost & Trade‑offs**  
   * Cloud Map charges $0.10 per 100 000 API calls; with caching we stay under $5/month for the whole platform.  
   * Trade‑off: additional latency on first lookup (~15 ms) but acceptable because cached entries cover >99 % of traffic.

### Result  
After deployment, service‑lookup failures dropped from 3 % to <0.01 %. API uptime improved from 97 % to 99.95 % (Δ +2.95 %). Operational tickets for “service not found” fell by 90 %, freeing 12 dev‑hrs/month for feature work.

### Learnings  
* **Dive Deep** – profiling showed the bottleneck was stale DNS entries; caching solved it.  
* **Bias for Action** – we shipped a minimal viable registry in two days, then iterated based on telemetry.  

This design demonstrates ownership, data‑driven impact, and continuous learning—exactly what a bar‑raiser looks for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
