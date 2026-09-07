---
qid: ing_6183185780__aws__local
question: How to view the health of a service? — Leaderboard System Design - System
  Design
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 372
total_tokens: 610
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:06:05-05:00'
sources: []
---

**Situation & Task (Leadership Principle: Ownership)**  
I was tasked with building a real‑time leaderboard for a global gaming platform that served > 10M concurrent players. The business demanded < 200 ms latency, 99.9% availability, and cost control.

**Action (Dive Deep + Bias for Action)**  
1. **Health Metrics** – I defined three core signals:  
   *Cache hit rate* (target ≥ 95%), *query latency* (≤ 150 ms), and *data consistency lag* (< 2 s).  
2. **Instrumentation** – Deployed CloudWatch metrics + X-Ray traces on the leaderboard API, exposing a Grafana dashboard.  
3. **Alerting & Auto‑Healing** – Set up SNS alerts; auto‑scales Lambda containers when latency > 180 ms or hit rate < 90%.  
4. **Cost Control** – Leveraged DynamoDB on-demand for writes and Aurora Serverless for read replicas, with reserved capacity for peak periods.

**Result (Deliver Results)**  
Reduced average query latency from 350 ms to **145 ms** and cache miss ratio from 12% to **3%**, cutting compute cost by **18%** while maintaining 99.95% uptime during a peak event that attracted 2M concurrent users.

**Learnings (Invent & Simplify)**  
The first iteration lacked a “health‑check” endpoint; we added a lightweight `/status` route that aggregates the three metrics, enabling automated health probes and faster incident response. This reinforced the importance of exposing observability as part of the API contract.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
