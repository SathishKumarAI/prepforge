---
qid: ing_62184ab081__faang__local
question: 'Explain: Public IP Addresses — IP Address | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 594
total_tokens: 828
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:32:09-05:00'
sources: []
---

**Public IP Addresses – System‑Design Overview**

| Section | What I’ll Cover |
|---------|-----------------|
| **Clarify** | A public IPv4/IPv6 address is globally routable on the Internet, unlike a private (RFC 1918) one. The question likely asks how to design an allocation & lookup system for millions of hosts, ensuring uniqueness, scalability, and low latency. |
| **Assumptions** | 1) We need to support ~10⁹ public IPs.<br>2) Allocation requests are frequent (tens of thousands/sec).<br>3) Lookups must be <5 ms. <br>4) We care about security, revocation, and future‑proofing for IPv6. |
| **Approach** | 1. **Global registry** – a sharded key/value store keyed by subnet CIDR.<br>2. **Local cache** – each edge router holds a Bloom filter + LRU table of allocated IPs for its zone to answer lookups instantly.<br>3. **Allocation workflow** – client → local allocator → global coordinator (via Raft quorum). <br>4. **Revocation** – tag with TTL, use lazy cleanup and a background sweeper. |
| **Depth** | • **Uniqueness**: use a central ID‑generator that assigns sequential IDs within each subnet; encode the subnet prefix + host ID into IPv6/IPv4.<br>• **Scalability**: sharding by /24 (IPv4) or /48 (IPv6) gives ~16 k shards, each can be served by 3 replicas. <br>• **Latency**: local cache hit ≈ 0.5 µs; fallback to global store ≈ 2–3 ms.<br>• **Complexity**: Allocation O(log N) on shard, lookup O(1). |
| **Edge Cases** | • **Subnet exhaustion** – trigger subnet re‑allocation or use NAT64 for IPv6 overflow.<br>• **Simultaneous requests** – handle via optimistic concurrency and conflict resolution.<br>• **Network partition** – local allocator may serve stale data; use version stamps. |
| **Optimize & Communicate** | • Batch allocations to reduce coordination overhead.<br>• Use consistent hashing for shard placement, minimizing reshuffles when nodes join/leave.<br>• Expose REST/GRPC APIs with rate limits and audit logs for security.<br>**Narrative**: “We first guarantee global uniqueness by centralizing ID generation per subnet. Then we push the bulk of lookups to edge caches, keeping latency low while still allowing rapid revocation via TTLs.” |

*Word count: ~190 words.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
