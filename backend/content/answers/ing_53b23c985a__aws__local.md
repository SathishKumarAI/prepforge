---
qid: ing_53b23c985a__aws__local
question: 'Explain: When to Choose Stateful Architecture — Stateful vs. Stateless
  Architecture'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 522
total_tokens: 755
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:34:04-05:00'
sources: []
---

**When to Pick a Stateful Design (vs. Stateless)**  
> *Leadership Principles:* **Ownership**, **Dive Deep**

**Situation** – I led the migration of our recommendation engine from a monolithic batch job to a real‑time microservice on AWS. The new service had to remember user interactions within a session to improve click‑through rates.

**Task** – Decide whether each request should be handled by a stateless Lambda or a stateful container that can keep per‑user context across calls, while keeping cost and availability in check.

**Action** –  
1. **Requirements dive:**  
   * Latency < 200 ms for 99th percentile.  
   * Session data (≈ 2 KB) needed for the next 30 minutes.  
   * Peak traffic: 50k RPS with a 10× spike during promotions.

2. **Design options** –  
   * **Stateless Lambda + DynamoDB** – every request pulls session from DynamoDB; low cost, auto‑scale, but adds ~20 ms read latency and increases read capacity units (RCUs).  
   * **Stateful ECS Fargate containers + Redis (Amazon ElastiCache)** – each container keeps an in‑memory cache of recent sessions. This eliminates DB round‑trips for hot users, cutting latency to < 80 ms and reducing DynamoDB RCUs by ~70%.  

3. **Trade‑offs** –  
   * Cost: Fargate + Redis ≈ $0.12/hr vs. Lambda + DynamoDB ≈ $0.08/hr; however, the performance gain allowed us to serve more users before hitting the 200 ms threshold.  
   * Availability: Stateful containers need a high‑availability cluster (multi‑AZ) and automatic scaling policies; stateless Lambdas automatically scale but risk cold starts.  

4. **Decision** – Adopted stateful ECS with Redis, because the business metric—click‑through rate—improved from 3.2 % to 4.7 % (+46%) after reducing latency, outweighing the modest cost increase.

**Result** – The new architecture handled 80k RPS spikes during Black Friday without exceeding SLA limits and increased revenue by $1.8M in the first quarter.  
*Learned:* Always model the *session footprint* early; a small stateful cache can deliver disproportionate gains when latency is mission‑critical.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
