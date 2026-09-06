---
qid: ing_a9342bec50__fp__local
question: 'Explain: 7.2 Availability — Design Instagram | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 585
total_tokens: 763
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:05:20-05:00'
sources: []
---

### Why *availability* matters for a social‑media platform

A user’s feed must be **readable** whenever they tap the app.  
From an information‑theoretic point of view, each read request is a
measurement that consumes network bandwidth and CPU cycles.  The system
must guarantee that, with probability ≥ p (typically 99.999 %), every
request receives a valid response within *t* milliseconds.

#### Deriving the design constraints

1. **Workload model**  
   Let λ be the arrival rate of read requests (≈ 10⁵ req/s for Instagram).
   Each request demands an I/O cost *c* and a compute cost *d*.  
   The total service demand is D = λ(c + d).

2. **Capacity planning**  
   By Little’s Law, the system must sustain throughput ≥ D to keep queues
   bounded.  Thus we need at least N servers where  
   N ≥ D / (throughput per server).  
   This directly ties *availability* to horizontal scaling.

3. **Redundancy vs latency**  
   Replicating data across k nodes gives an *effective* success probability  
   P_success = 1 – (1‑p)ᵏ.  
   However, each additional replica adds read latency L_replica.  
   The trade‑off is: minimize expected response time E[T] =
   Σ_{i=0}^{k} i·L_replica · (1‑p)ⁱ p + k·L_replica · (1‑p)ᵏ.

4. **Consistency‑availability tension**  
   Strong consistency forces the system to wait for all replicas, hurting
   availability during partitions.  Relaxing to *eventual* consistency
   allows local reads, increasing availability but introducing stale data.
   The design must quantify how often stale reads are tolerable (e.g.,
   5 % of feeds may show a one‑minute lag).

#### One non‑obvious insight

Many architects focus on “read replicas” to boost throughput.  
The *real* bottleneck for availability is often **network partitions** at
the data center level.  Deploying read shards in the same rack may give
high throughput but collapses during a single switch failure.  
Distributing replicas across independent racks or geographic regions
raises the probability that *at least one* path remains healthy,
thereby improving availability more than adding extra local replicas.

In short, availability is not just “more servers”; it’s an optimization of
**probability of success** versus **latency budget**, tightly coupled to
the chosen consistency model and network topology.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
