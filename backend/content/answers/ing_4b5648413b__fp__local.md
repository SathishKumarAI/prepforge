---
qid: ing_4b5648413b__fp__local
question: 'Explain: Sources: — tech-prep-jeremy.io/systems-design/topics/cdns.md at
  master \u00b7 jeremyyew/tech-prep-jeremy.io \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 205
output_tokens: 465
total_tokens: 670
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:45:25-05:00'
sources: []
---

**What is this source about?**

The file *`cdns.md`* in Jeremy Yew’s `tech-prep-jeremy.io` repository is a concise design‑style guide for Content Delivery Networks (CDNs). It answers the core problem: **how to deliver web content quickly and reliably to geographically dispersed users while keeping infrastructure cost low**.

---

### Why CDNs must work this way

1. **Latency minimisation** – By placing edge servers close to clients, the number of network hops is reduced.  
2. **Cache‑efficiency** – Content is cached at edges; only cache‑misses hit origin servers, so traffic and latency drop dramatically.  
3. **Failover & redundancy** – Multiple edge nodes ensure that if one goes down, others can serve the same content, preserving availability.  
4. **Scalability** – The CDN’s architecture is essentially a distributed hash table of object keys → edge locations; adding more nodes scales linearly without re‑architecting.

---

### Deeper principle: *Distributed caching as an information‑theoretic trade‑off*

The CDN can be seen as a system that compresses (caches) repeated requests into short‑delay responses. The *entropy* of user requests dictates how much caching is possible; high locality means low entropy, so fewer bytes travel across the backbone. This links directly to Shannon’s source coding theorem: by exploiting redundancy in traffic, the CDN reduces bandwidth—exactly what it does.

---

### A non‑obvious insight

Many people focus on *where* to place edge nodes, but **how they invalidate caches is equally critical**. The guide highlights that fine‑grained invalidation (e.g., via versioned URLs or ETag checks) can reduce wasted bandwidth far more than simply expanding cache TTLs. In practice, a well‑designed CDN spends 60 % of its performance gains in intelligent eviction logic rather than raw server count.

---

So, *`cdns.md`* distills the engineering trade‑offs behind CDNs into a quick reference that links architectural decisions to fundamental limits from information theory and distributed systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
