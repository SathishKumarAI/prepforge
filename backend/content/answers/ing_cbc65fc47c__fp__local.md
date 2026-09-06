---
qid: ing_cbc65fc47c__fp__local
question: 'Explain: System Design Interview - Distributed Cache'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 614
total_tokens: 782
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:13:38-05:00'
sources: []
---

## Why a distributed cache is needed

In modern web services, latency and throughput are bottlenecks.  
A single in‑memory store (e.g., Redis or Memcached) can serve millions of
requests per second, but its capacity and fault tolerance are limited to one
node.  When data size grows beyond that node’s RAM, or when a failure would
bring the entire cache down, performance suffers.

Hence we **distribute** the cache: split the key‑space across many nodes,
replicate for reliability, and route requests efficiently.  
The design problem is *how to keep this system fast, consistent enough for
the workload, and fault‑tolerant*.

## Core principles

| Principle | What it guarantees | How it shapes the design |
|-----------|-------------------|--------------------------|
| **Partitioning (sharding)** | Even load distribution; each node handles a subset of keys. | Use consistent hashing so that adding/removing nodes changes only O(1/N) key mappings, minimizing cache misses. |
| **Replication** | Availability and durability under node failures. | Keep 2–3 replicas per shard. Write‑through or write‑back policies decide consistency level (e.g., quorum reads). |
| **Consistency model** | Predictable read/write semantics. | Adopt *eventual* or *causal* consistency for low latency; use vector clocks if strict ordering is required. |
| **Cache invalidation** | Freshness of data. | Leverage TTLs, publish/subscribe invalidation messages, or version tags to avoid stale reads. |

## Architecture sketch

1. **Client library** – hashes the key (consistent hashing) and looks up the node address in a *routing table*.
2. **Routing layer** – maintains membership via gossip; updates routing table on topology changes with minimal churn.
3. **Node layer** – stores key–value pairs in RAM, handles local replication to peers.
4. **Replication controller** – ensures each shard’s replicas are synchronized (e.g., using Raft or Paxos if strong consistency is needed).

## Non‑obvious insight

> **The *routing table* itself should be *distributed and cached*.**  
> If every client recomputes the node for a key by contacting a master, the master becomes a bottleneck. Instead, ship the routing table (or a hash function with replica mapping) to clients; only when topology changes do they refresh it via incremental updates. This turns what appears to be a single‑point problem into a *data‑driven* one, preserving low latency even under frequent scaling events.

By grounding each design choice in an optimization or information‑theoretic principle—load balancing (entropy), replication (redundancy), consistency (stochastic convergence)—we obtain a cache that scales, tolerates failure, and delivers the low latency required by high‑traffic services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
