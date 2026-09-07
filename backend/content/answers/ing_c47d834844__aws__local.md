---
qid: ing_c47d834844__aws__local
question: 'Explain: Inserted Directly — CachesExplained \u00b7 google/guava Wiki \u00b7
  GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 572
total_tokens: 819
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:47:11-05:00'
sources: []
---

**Situation (S)**  
I was tasked with reducing the latency of a recommendation engine that read millions of user‑profile objects from DynamoDB for every request. The team had tried an in‑memory cache, but it kept evicting hot items and we lost performance.

**Task (T)**  
Design a robust, scalable caching layer using Guava’s `CacheBuilder` that could keep frequently accessed profiles “inserted directly” while ensuring memory safety and consistent eviction policies.

**Action (A)**  

| Requirement | Design | AWS Service | Rationale |
|-------------|--------|------------|-----------|
| **Fast read/write** | `CacheBuilder.newBuilder()` with `maximumSize(1_000_000)` and `expireAfterAccess(Duration.ofHours(2))` | *None* – pure Java in the Lambda container | Low‑latency, no network hop |
| **Memory safety** | Use `softValues()` to allow GC when memory pressure rises | *None* | Prevent OOM on bursts |
| **Distributed consistency** | On cache miss, fetch from DynamoDB and call `cache.put(key, value)`; use DynamoDB Streams + Lambda to invalidate entries on write | **DynamoDB Streams → Lambda** | Keeps cache fresh across instances |
| **Scalability** | Deploy in Fargate tasks behind an Application Load Balancer; each task hosts its own Guava cache (local). Horizontal scaling handled by ECS. | **ECS/Fargate, ALB** | No single point of failure |
| **Cost** | Only pay for compute time and memory per container; no dedicated caching service needed | *None* | <$0.10/hr per task |

**Result (R)**  
After rollout, cache hit rate jumped from 12 % to 82 %, cutting API latency from 350 ms to 45 ms on average—a **75 % performance lift** and a **30 % reduction in DynamoDB read capacity units**, saving ~$1.2K/month.

---

### Leadership Principles  
- **Customer Obsession:** Delivered faster responses, directly improving user experience.  
- **Ownership & Dive Deep:** I dissected GC behavior, memory pressure, and DynamoDB throughput to craft a fault‑tolerant solution.  

**Bar‑raiser takeaways:**  
- Quantified impact (hit rate, latency, cost).  
- Demonstrated deep understanding of Guava internals and AWS integration.  
- Learned from failure: initial naive cache caused thrashing; the soft‑value strategy fixed it.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
