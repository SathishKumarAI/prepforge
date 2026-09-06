---
qid: ing_a1efa0fd25__fp__local
question: 'Explain: What an IP Address Does — IP Address | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 383
total_tokens: 556
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:50:00-05:00'
sources: []
---

### Why a machine needs an **IP address**

At its core a computer is just a *node* that can send and receive packets of data over a shared medium (the internet).  
To talk to another node it must:

1. **Identify itself** so the other end knows where to reply.  
2. **Locate itself** on a large, hierarchical network so that routers can forward its packets.

An IP address satisfies both in one compact form: a 32‑bit or 128‑bit number encoded as dotted decimal (IPv4) or hexadecimal blocks (IPv6).  
The first bits encode the *network* prefix; the remaining bits encode the *host* within that network. Routers compare only the prefix, reducing routing tables from billions of entries to thousands—an application of **prefix‑based aggregation** in graph theory.

### Deep principle: *Information compression*

Routers exploit the fact that all hosts in a subnet share a common prefix; they store a single route entry for the entire subnet. This is a concrete instance of Shannon’s source coding theorem: by exploiting redundancy (common prefixes) we compress routing information while preserving unique reachability.

### Non‑obvious insight

An IP address *does not* guarantee uniqueness on its own—two devices can share an address inside the same LAN. The real guarantee comes from **ARP (Address Resolution Protocol)** mapping that address to a MAC, which is broadcast only within the local segment. Thus, the “address” in IP is a logical abstraction that relies on lower‑layer protocols for physical uniqueness; this separation is what lets the internet scale to billions of devices without central coordination.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
