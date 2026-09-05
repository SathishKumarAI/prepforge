---
qid: ing_321127e479__fp__local
question: 'Explain: Routing Tables — IP Address | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 450
total_tokens: 620
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:51:23-05:00'
sources: []
---

**Why a routing table exists**

Every packet on the Internet is a *data unit* that must reach a destination host identified by an IP address.  
A router’s job is to decide, for each incoming packet, which outgoing interface brings it closest to that destination. The fundamental problem is: **given a set of known destinations (prefixes) and their next‑hop interfaces, pick the most specific match in sub‑linear time**.

**The core principle – longest‑prefix matching**

IP addresses are binary strings; network prefixes are their leading bits.  
If a packet’s address shares *k* leading bits with a prefix, it is closer to that network than one sharing fewer bits. Therefore the router must find the prefix with the largest *k* that matches the packet. This is an optimization: we minimize hops while respecting the hierarchy of networks.

**Data structures that make it fast**

- **Trie (prefix tree)**: each node represents a bit; traversal follows the packet’s bits until no child exists, yielding the longest match in O(length) time.
- **Compressed or radix tries** collapse chains of single‑child nodes, saving space without affecting lookup speed.
- **Hash tables with longest‑prefix fallback** trade off worst‑case guarantees for average‑case speed.

**Non‑obvious insight**

Routers don’t simply store “destination → next hop” pairs; they also store *subnets* (ranges). A single entry can cover millions of IPs, drastically reducing table size. The trick is that the longest‑prefix rule automatically resolves conflicts: a more specific subnet overrides a less specific one. This property allows hierarchical routing protocols (BGP, OSPF) to aggregate routes and keep tables tractable even at continental scales.

In summary, routing tables solve the *hierarchical lookup* problem by encoding IP prefixes in a trie-like structure, enabling routers to perform longest‑prefix matching efficiently—an elegant application of prefix hierarchies to distributed systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
