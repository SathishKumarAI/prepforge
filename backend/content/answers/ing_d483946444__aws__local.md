---
qid: ing_d483946444__aws__local
question: What is the difference between short-term and long-term memory in agents?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 481
total_tokens: 714
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:20:46-05:00'
sources: []
---

**Answer (Amazon Way)**  

I once led a cross‑functional team building an AI assistant for a retail platform. The question of short‑term vs. long‑term memory was pivotal in our architecture.

| Aspect | Short‑Term Memory | Long‑Term Memory |
|--------|-------------------|------------------|
| **Purpose** | Stores transient context (current user intent, recent actions) | Persists knowledge across sessions (product catalog, user preferences) |
| **Lifetime** | Seconds to minutes, cleared after dialogue ends | Months/years, retained until policy deletion |
| **Storage** | In‑memory cache (Redis) for low latency | Durable store (Amazon DynamoDB + S3 for embeddings) |
| **Access Pattern** | Read‑heavy, bursty | Write‑heavy during onboarding, read‑light otherwise |

### STAR

- **Situation:** Customers complained that the assistant “forgot” prior preferences after a few interactions.  
- **Task:** Design memory layers to balance speed and persistence.  
- **Action:** Implemented a two‑tier system: Redis for 10 ms response time on short‑term context, and DynamoDB + S3 for long‑term embeddings, using AWS KMS for encryption. Added CloudWatch metrics to monitor cache hit ratios (target >95%).  
- **Result:** Reduced user churn by **12%** in three months; latency dropped from 350 ms to 80 ms on average.  

### Technical/Design Notes

- **Scalability:** Redis cluster auto‑scales via Elasticache, DynamoDB handles 10⁶ writes/sec with on‑demand capacity.  
- **Availability:** Multi‑AZ deployments; S3 provides 99.999% durability.  
- **Cost Trade‑off:** In‑memory cache is ~30 % higher cost but justified by latency savings and revenue uplift.

**Bar‑raiser cues I listen for:** ownership of the end‑to‑end solution, deep dive into trade‑offs (latency vs. persistence), quantifiable impact, and learning from early failures (e.g., mis‑estimated cache TTL).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
