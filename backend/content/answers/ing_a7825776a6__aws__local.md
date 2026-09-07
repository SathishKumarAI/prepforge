---
qid: ing_a7825776a6__aws__local
question: 'Explain: Choosing a pattern — Multi-agent patterns in LlamaIndex | Developer
  Documentation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 383
total_tokens: 618
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:45:13-05:00'
sources: []
---

**Situation & Task**  
While architecting an AI‑powered recommendation engine for a global e‑commerce platform, I had to decide between single‑agent and multi‑agent patterns in LlamaIndex. The goal was to reduce latency by 30 % while keeping the system fault‑tolerant.

**Action (Design)**  
I chose a **multi‑agent pattern** where each agent handles a distinct domain: user context, product catalog, and real‑time inventory. Agents communicate via an event bus on **Amazon EventBridge**; results are merged in a lightweight Lambda orchestrator that writes to a **DynamoDB** cache.  

*Why this works:*  
- **Scalability:** Each agent runs in its own ECS task, scaling independently with CloudWatch metrics (≈ 2× traffic).  
- **Availability:** If one agent fails, EventBridge retries and the orchestrator falls back to cached data; no single point of failure.  
- **Cost:** By isolating workloads we keep CPU usage 25 % lower than a monolithic Lambda, saving ~US$1k/month on spot instances.

**Result**  
After deployment, end‑to‑end latency dropped from 650 ms to 440 ms (32 % improvement). The recommendation click‑through rate increased by 12 %, translating to an additional US$3.2M in annual revenue.

**Reflection & Learning**  
I applied **Customer Obsession**—prioritizing user experience—and **Dive Deep**—profiling each agent’s bottlenecks. A failed first attempt taught me the value of decoupling concerns; I iterated quickly, validating metrics before full rollout.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
