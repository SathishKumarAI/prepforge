---
qid: ing_482d7ccd40__faang__local
question: 'Explain: Request Volume — Design Load Balancer | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 492
total_tokens: 732
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:31:51-05:00'
sources: []
---

**Clarify**  
We’re asked to design a load balancer that can handle *request volume* for an ML inference service (e.g., image classification). Key assumptions:  
1. Requests are stateless, arriving at a public endpoint.  
2. Backend nodes run the same model; we need horizontal scaling.  
3. Latency SLA is tight (< 200 ms) and traffic can spike 10× in minutes.  

**Approach**  
1. **Ingress layer** – use an edge CDN (e.g., CloudFront, Akamai) to cache static content and absorb bursts.  
2. **Load‑balancing algorithm** – implement a *round‑robin with health checks*; keep a lightweight local queue for each backend.  
3. **Auto‑scaling policy** – trigger new instances when CPU > 70% or request latency > 150 ms for 5 min.  
4. **Session stickiness** isn’t needed (stateless).  

**Depth**  
*Health checks*: HTTP GET on `/health` every 10 s; if failure count ≥3, mark node unhealthy.  
*Queueing*: Use a small in‑memory ring buffer per backend to smooth micro‑spikes and avoid packet loss.  
*Metrics*: Collect Prometheus metrics (request rate, latency, queue depth) and trigger alerts.  
Complexity: O(1) routing per request; scaling decisions are O(n) over active nodes but run asynchronously.

**Edge Cases**  
- Sudden traffic spike → CDN cache misses → backend overload → queues grow → SLA breach. Mitigate by pre‑warming a pool of “standby” instances and increasing queue size temporarily.  
- Backend crash mid‑request → request lost; implement idempotent retries at client side with backoff.

**Optimize & Communicate**  
To reduce latency, place the load balancer close to users (regional edge) and use *gRPC* for low‑overhead communication. For cost, shut down idle standby nodes after 30 min of inactivity. I’d explain these trade‑offs: higher cache hit ratio vs. cold start overhead; larger queues vs. memory usage. This shows a balanced, scalable design that meets SLAs while controlling spend.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
