---
qid: ing_5f3cb1043f__faang__local
question: 'Explain: How Routing Works — IP Address | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 515
total_tokens: 749
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:25:41-05:00'
sources: []
---

**Clarify**  
*Problem:* Describe how IP‑based routing works in a large‑scale network (e.g., Internet backbone).  
*Assumptions to confirm:* We’re focusing on IPv4/IPv6, stateless routers, and the core routing protocols (BGP, OSPF).

---

**Approach**  
1. **Model components:** hosts → edge routers → transit ASes → destination edge router.  
2. **Key data structures:** routing tables (prefix ↦ next‑hop), adjacency graphs, BGP peering sessions.  
3. **Process flow:** packet arrives at edge router → longest‑prefix lookup → forward to next hop.

---

**Depth**  

- *Longest‑Prefix Match:* routers store CIDR prefixes in a trie or radix tree; lookup is O(log N) but practically constant due to limited depth (~32 for IPv4).  
- *Routing Protocols:*  
  - **OSPF/IS-IS:** intra‑AS link‑state; each router builds a full AS graph and runs Dijkstra. Complexity O(|V|²) per update, but updates are infrequent.  
  - **BGP:** inter‑AS path vector; routers maintain routes with attributes (AS_PATH, NEXT_HOP). Route selection follows the BGP decision process; loops prevented by AS_PATH check.  
- *Load Balancing:* ECMP splits traffic across equal‑cost paths using hash of packet header fields.

---

**Edge Cases**  

- **Routing loops:** mitigated by AS_PATH and sequence numbers.  
- **Black holes:** missing next‑hop entry → packet dropped; routers may send ICMP unreachable.  
- **Prefix hijacking:** BGP route validation (RPKI) required to avoid mis‑advertised prefixes.

---

**Optimize & Communicate**  

- Use *compressed tries* or *prefix aggregation* to reduce memory footprint.  
- Employ *hardware TCAMs* for lookup acceleration; trade‑off: cost vs speed.  
- In design interviews, articulate the trade‑offs (e.g., OSPF’s fast convergence vs BGP’s scalability) and justify chosen data structures.  

This structured explanation demonstrates deep technical understanding while keeping communication concise—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
