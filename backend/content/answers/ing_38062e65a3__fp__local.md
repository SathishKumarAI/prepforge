---
qid: ing_38062e65a3__fp__local
question: 'Explain: NFR — Socialnetworkfacebookinstagram'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 377
total_tokens: 546
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:03:29-05:00'
sources: []
---

### Why NFRs for Facebook & Instagram Are Inescapable

A social network’s core problem is **“enable rapid, trustworthy exchange of personal content at scale.”**  
To solve this, the system must satisfy *availability*, *consistency*, *performance*, *security* and *usability*. These are non‑functional because they constrain how the functional features (posts, likes, stories) behave, not what they do.

1. **Availability & Scalability** – Users expect 24/7 access; mathematically this demands a *distributed* architecture with *eventual consistency* to keep latency low while tolerating network partitions (CAP theorem).  
2. **Security & Privacy** – Personal data is the product; information‑theoretic guarantees (encryption, differential privacy) ensure that even if an attacker compromises nodes, user secrets stay protected.  
3. **Usability & Engagement** – Human‑computer interaction theory shows that latency < 100 ms keeps users’ *flow* intact; thus aggressive caching and edge computing are mandated.

#### One Non‑Obvious Insight
Most designers focus on *feature richness*, but the *entropy* of user interactions (how unpredictable their behavior is) drives the need for **adaptive load balancing**. As content diversity spikes, traffic patterns become highly non‑stationary; a static sharding scheme turns into a bottleneck. Implementing a *self‑tuning* scheduler that monitors entropy and reallocates shards in real time keeps the system both fast and resilient—an optimization principle rarely highlighted in traditional NFR lists.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
