---
qid: ing_137d91f8cf__faang__local
question: 'Explain: What OpenAI asks in the phone screen system design round'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 443
total_tokens: 678
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:28:37-05:00'
sources: []
---

**1️⃣ Clarify**  
The interviewers want to gauge how you reason about building a large‑scale, low‑latency AI service (e.g., ChatGPT). Confirm assumptions:  
- Target traffic (~10k QPS) and latency goal (<200 ms).  
- Model size & inference engine (GPU/TPU).  
- Data flow: user request → routing → model inference → post‑processing → response.  

**2️⃣ Approach**  
1. **High‑level architecture** – API gateway, load balancer, inference cluster, cache layer, monitoring.  
2. **Routing strategy** – consistent hashing + weight by GPU utilization; fallback to a “cold pool.”  
3. **Inference engine** – model sharding (pipeline & tensor parallelism), batch aggregation for throughput, and async execution.  
4. **State management** – stateless request handling with optional session context stored in Redis.  
5. **Observability** – metrics (latency, GPU usage), tracing, anomaly detection.

**3️⃣ Depth**  
- **Scaling**: Horizontal scaling of inference nodes; autoscaling based on queue depth.  
- **Latency**: Use a 1 ms request buffer + micro‑batching for GPUs; fall back to CPU path if latency exceeds threshold.  
- **Fault tolerance**: Circuit breakers, graceful degradation, canary releases.  
- **Cost**: Spot instances + GPU reservation mix; dynamic pricing.

Complexity: O(log N) routing; inference cost linear in batch size; overall throughput ∝ number of GPUs × batch efficiency.

**4️⃣ Edge Cases**  
- Sudden traffic spikes → queue back‑pressure, autoscale delay.  
- Model updates causing version drift → blue/green deployment.  
- Data privacy: ensure no user data leaks across shards.

**5️⃣ Optimize & Communicate**  
Explain trade‑offs (batch size vs latency), justify choice of caching for repeated prompts, and highlight monitoring for continuous improvement. Conclude with a concise diagram sketch if asked to illustrate.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
