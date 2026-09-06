---
qid: ing_4dd13fd8be__fp__local
question: 'Explain: Write Locally and Read Globally — Live Comment System Design -
  System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 476
total_tokens: 654
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:50:56-05:00'
sources: []
---

### Write‑Local, Read‑Global for a Live‑Comment System  
**Problem** – Users post comments in real time (writes) while the same content must be streamed to thousands of viewers (reads). Latency on writes is critical; reads must be consistent yet highly available.

#### 1. Fundamental principle: *Write‑Through Locality*
A comment originates at a client, travels to an edge node that **accepts** it locally and immediately propagates it to the author’s “home” shard.  
- **Why?** Edge nodes are geographically closest to the writer; they can acknowledge in < 30 ms regardless of back‑haul congestion.  
- The local write removes a *single point of contention*—the central database need not be hit for every post.

#### 2. Global read via *Eventual Replication + Gossip*
Once locally accepted, the comment is appended to a **write‑ahead log** and replicated across a quorum of data centers using a gossip protocol.  
- **Why?** Gossip ensures that any reader anywhere eventually sees all comments without requiring synchronous consensus for every read, keeping read latency < 50 ms.  
- The replication strategy is tuned so that the *majority* of replicas can serve reads while still tolerating up to `f` failures (Raft/CP trade‑off).

#### 3. Deep insight – *Temporal Consistency as a Service*
Because comments are inherently **append‑only** and *order matters only within a stream*, we can enforce **causal ordering** by attaching monotonically increasing sequence numbers per user session.  
- Readers merge streams using these timestamps, guaranteeing that the *local view* of each viewer is causally consistent without global locks.

#### 4. Architecture sketch
```
Client → Edge Node (write‑through) → Home Shard → Gossip Replication → Global CDN cache
      ↑                                               ↓
   Acknowledgement                                 Read API (any edge)
```

This design satisfies low write latency, high read availability, and graceful degradation under network partitions—all derived from the core principle that *writes should be local, reads can tolerate eventual global visibility*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
