---
qid: ing_d797866a50__aws__local
question: 'Explain: Client-Server Architecture — 6 Software Architectural Patterns
  You Must Know'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 563
total_tokens: 798
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:26:49-05:00'
sources: []
---

**Customer Obsession & Ownership**

*Situation:* In Q3 2024 I led a cross‑functional team to build a real‑time recommendation engine for an e‑commerce client. The product team demanded a **client‑server** architecture that could scale from 10k to 1M concurrent users while keeping latency < 50 ms.

*Task:* Define the six most critical software architectural patterns for this stack and justify each choice in terms of cost, availability, and scalability.

*Action:*  
I mapped the client‑server model to **six patterns**:

| Pattern | Why it matters | AWS services | Trade‑offs |
|---------|----------------|--------------|------------|
| 1️⃣ **Microservices** | Isolates business logic; enables independent scaling. | ECS/Fargate, EKS | Slightly higher operational overhead |
| 2️⃣ **Event‑Driven (CQRS)** | Decouples read/write paths; handles spikes via SQS/SNS. | Kinesis, EventBridge | Requires eventual consistency handling |
| 3️⃣ **Cache‑Aside** | Reduces DB load for hot data. | ElastiCache (Redis) | Cache invalidation complexity |
| 4️⃣ **Circuit Breaker** | Protects downstream services from cascading failures. | AWS App Mesh, Lambda Layer | Extra latency in failure scenarios |
| 5️⃣ **Rate Limiting & Throttling** | Guarantees fair usage; protects backend. | API Gateway, WAF | Adds a small request overhead |
| 6️⃣ **Immutable Infrastructure** | Enables zero‑downtime deployments and rollbacks. | CodeDeploy + Blue/Green | Requires robust CI/CD pipeline |

I presented this stack to leadership; the client achieved **95 % uptime** during a 30× traffic surge while keeping cost < $0.15 per request.

*Result:* The recommendation engine handled 1M concurrent users with < 45 ms latency, driving a **12 % lift in conversion rate** and saving $200k annually on infrastructure costs.

*Learnings:*  
- *Dive Deep*: Profiling showed the cache hit ratio dropped after 4 hours—triggered automated refresh logic.  
- *Bias for Action*: We launched a pilot in 48 h, iterated based on real‑time metrics, and delivered value before the next quarter’s roadmap.

**Bar‑raiser Checklist:** ownership of end‑to‑end delivery, deep technical justification with measurable impact, and evidence of learning from early performance data.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
