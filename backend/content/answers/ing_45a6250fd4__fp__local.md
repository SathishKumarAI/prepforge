---
qid: ing_45a6250fd4__fp__local
question: 'Explain: Communications — system-design-primer/solutions/system_design/twitter/README.md
  at master \u00b7 donnemartin/system-design-primer \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 198
output_tokens: 376
total_tokens: 574
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:33:29-05:00'
sources: []
---

**Why we model a “Twitter‑like” system the way the primer does**

The core problem is *high‑throughput, low‑latency ingestion of user posts and their dissemination to followers*.  
From an information‑theoretic view this is a **publish/subscribe channel** with two constraints:

1. **Throughput** – each post must be stored once yet delivered to \(k\) followers.
2. **Latency** – every follower’s timeline should be refreshed within milliseconds.

These constraints force us to separate *write* and *read* paths:  
- **Writes** are written to a **writable log** (Kafka‑style). This gives linear scalability, guarantees ordering, and decouples the producer from consumers.  
- **Reads** pull data from pre‑computed **fan‑out tables** (user → tweet list) so that a follower’s timeline is a simple key‑value lookup rather than an expensive join.

The primer’s design choice of *“materialised views”* for timelines follows directly from the principle of **data denormalisation to reduce read cost**—the trade‑off is extra write amplification, which is acceptable because writes dominate latency concerns in social feeds.

> **Non‑obvious insight:**  
> By treating each tweet as an immutable event in a log and letting the *read* side perform the heavy lifting (fan‑out), we convert a potentially quadratic problem (\(O(n \times k)\)) into linear reads. This mirrors how modern message queues handle high‑volume publish/subscribe workloads: the system pays for write amplification to achieve constant‑time reads, exactly what a real‑world Twitter needs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
