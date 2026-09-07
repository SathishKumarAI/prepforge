---
qid: ing_321127e479__faang__local
question: 'Explain: Routing Tables — IP Address | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 473
total_tokens: 706
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:40:49-05:00'
sources: []
---

**Clarify**  
We’re asked how routing tables work for IP addresses in a system‑design context—i.e., the data structures and lookup logic that let a router forward packets to their destination.

**Approach**  
1. Describe the table format (prefix, mask, next hop).  
2. Explain longest‑prefix matching.  
3. Outline how routers populate tables (static routes vs dynamic protocols like OSPF/BGP).  
4. Mention performance concerns and typical optimizations.

**Depth**  

| Field | Purpose |
|-------|---------|
| **Destination prefix** (`192.168.1.0/24`) | Target network. |
| **Subnet mask / CIDR** | Defines the address space covered. |
| **Next hop / interface** | Where to forward the packet. |

*Lookup*: For an incoming IP, routers compare it against all prefixes and pick the one with the longest mask that matches—this guarantees the most specific route.  

*Dynamic learning*:  
- **OSPF**: Interior gateway protocol that floods link‑state databases; each router builds a shortest‑path tree (Dijkstra).  
- **BGP**: Exterior gateway protocol exchanging reachability information between autonomous systems; uses path attributes and policy filtering.

*Complexity*: Naïve linear search is O(n) per packet. Practical routers use tries (Patricia, radix) or hash tables to achieve O(1)‑ish lookups with memory trade‑offs.

**Edge Cases**  
- **Default route** (`0.0.0.0/0`) catches all unmatched packets.  
- **Route leaks / misconfigurations** cause loops; ECMP and poison reverse mitigate them.  
- **IPv6**: larger address space demands more compact tries (e.g., bloom filters).

**Optimize & Communicate**  
Explain that we trade off memory for speed: a multi‑level trie reduces lookup time to ~10‑20 µs, acceptable for 10 Gbps links. Also highlight how software routers can use TCAM or hardware ASICs for even faster matching. Wrap up by stressing the importance of consistent routing policies and failover mechanisms in large‑scale deployments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
