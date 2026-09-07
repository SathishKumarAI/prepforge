---
qid: ing_8ff1134b16__faang__local
question: 'Explain: When to Use Strong Consistency — Strong vs. Eventual Consistency
  - by Ashish Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 608
total_tokens: 854
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:19:09-05:00'
sources: []
---

**Clarify**  
You’re asked: *“When should we opt for strong consistency over eventual consistency, and why?”*  
Assumptions I’d confirm:  
- The system is distributed (multiple replicas).  
- Latency vs. correctness trade‑offs matter.  
- Workloads include reads, writes, and possible coordination.

**Approach**  
1. Define the two guarantees.  
2. List scenarios where each shines.  
3. Explain the cost of enforcing strong consistency.  
4. Summarize a decision rule.

**Depth**  

| When to use | Why it matters |
|-------------|----------------|
| **Financial/transactional systems** (banking, trading) | Even a single wrong balance can trigger regulatory fines or cascade failures. |
| **Inventory & order‑processing** | Prevent overselling; need real‑time stock counts. |
| **Access control / authentication** | Users must see the most recent permissions to avoid security gaps. |
| **Audit trails / compliance logs** | Guarantees that every write is durable before acknowledging. |

Strong consistency requires *quorum reads/writes* (e.g., majority of replicas).  
- **Latency:** O(log N) network hops, higher per‑operation latency.  
- **Availability:** Fails if enough nodes are unreachable (CAP theorem).  
- **Write amplification:** Each write must propagate to all quorums.

Eventual consistency is preferable when:  

| When to use | Why it matters |
|-------------|----------------|
| **Read‑heavy, low‑criticality data** (social feeds, caching) | Users tolerate stale reads; lower latency. |
| **Global content delivery** | Replicas can serve locally with minimal coordination. |
| **High write throughput** | No need to wait for all replicas before ack. |

**Edge Cases**  
- *Network partitions*: Strong consistency will block operations until reconnection, while eventual will continue serving stale data.  
- *Clock skew*: Eventual systems rely on timestamps; if clocks drift, convergence can be delayed.  
- *Mixed workloads*: Some services need strong for a subset of keys; partitioning or hybrid approaches (e.g., per‑key consistency) are needed.

**Optimize & Communicate**  
- **Hybrid models:** Use *per‑entity consistency*—critical records get strong quorum, others eventual.  
- **Quorum tuning:** Adjust read/write quorums to balance latency and consistency.  
- **Monitoring:** Continuously measure staleness (e.g., read–write gap) to ensure SLAs.

**Narrative tip for interviewers**: Start with the business impact of correctness vs. latency, then walk through concrete use‑cases, finish by highlighting trade‑offs and a pragmatic decision framework. This demonstrates both depth and structured reasoning—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
