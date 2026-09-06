---
qid: ing_ae10ea7bc0__fp__local
question: 'Explain: How the Internet Works — What Happens When You Type a URL Into
  Your Browser? - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 181
output_tokens: 378
total_tokens: 559
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:14:38-05:00'
sources: []
---

**When you type a URL into a browser, the Internet orchestrates a tiny “handshake” between several layers of abstraction—each layer answering a fundamental question: *how do I get from my device to the remote server?***

1. **Application → Transport (TCP)** – The browser turns the URL into an HTTP request and asks TCP for a reliable connection to the host’s IP address.  
2. **Transport → Network (IP)** – TCP hands off to IPv4/IPv6, which breaks the request into packets with source/destination addresses.  
3. **Network → Link (Ethernet/Wi‑Fi)** – Each packet is wrapped in a frame containing MAC addresses for local delivery. The Ethernet switch forwards it toward the next hop.  

**Routing is the core optimization problem:** each router must decide the *shortest* or *least congested* path to the destination. That decision uses link-state tables (OSPF) or distance vectors (BGP). BGP, in particular, solves a global multi‑objective optimization: reachability, policy, and economics—all while preventing routing loops.

**DNS is the lookup layer that translates human names into IPs.** It’s not just a cache; it implements a *distributed hash* over a trust hierarchy (root → TLD → authoritative), ensuring scalability and fault tolerance.

A non‑obvious insight: **every packet carries no knowledge of the entire network topology, yet collectively they converge on an optimal path through local decisions.** This emergent behavior is why the Internet remains robust even when individual links fail—because each node only needs to know its immediate neighbors, not the whole graph.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
