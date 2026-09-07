---
qid: ing_a62b4e70a4__faang__local
question: 'Explain: Step 2 — Scaling Websites for Millions of Users'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 524
total_tokens: 759
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:11:21-05:00'
sources: []
---

**Clarify**  
We’re asked how a machine‑learning platform would scale its web front‑end and serving layer to handle millions of concurrent users while keeping latency low and costs reasonable. I’ll assume: (1) the site serves real‑time predictions; (2) traffic is bursty (e.g., product launches); (3) we want 99.9 % availability and <200 ms total response time.

**Approach**  
1. *Stateless, horizontally scalable services* → containers behind a load balancer.  
2. *Auto‑scaling pools* tied to CPU/latency metrics.  
3. *Edge caching & CDN* for static assets and pre‑computed predictions.  
4. *Model serving via model server (e.g., TensorFlow Serving) with GPU nodes only when needed*.  
5. *Circuit breakers & retries* to protect downstream services.

**Depth**  
- **Load Balancer:** Layer 4 (ALB/NGINX) with weighted target groups; health‑checks on `/health`.  
- **Autoscaling Policy:** `max(1, avg(cpu)>70% → +2 instances)` and scale‑down after 10 min idle.  
- **CDN:** CloudFront or Fastly to cache API responses with TTL=5 s for non‑personalized data; edge functions for personalization tokens.  
- **Model Serving:** Use gRPC for low‑latency inference; batch requests on GPU nodes (≤16 ms per request). Queue incoming jobs in SQS, workers poll and process in batches.  
- **Observability:** Prometheus + Grafana for latency/throughput; set alerts at 95th percentile >150 ms.  

**Edge Cases**  
- Sudden traffic spikes → pre‑warm extra instances.  
- Model drift → rolling deploy with canary routing.  
- API key abuse → rate limiting per IP.

**Optimize & Communicate**  
We can reduce cost by using spot instances for GPU workers and scaling them down aggressively when load drops. For latency, move critical prediction logic to the edge (e.g., via WASM). I’d explain this flow to interviewers as: “Start with stateless containers, add a CDN, then bring in model servers only when needed, all orchestrated by autoscaling and observability.” This shows clear architecture thinking, trade‑off awareness, and practical deployment knowledge.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
