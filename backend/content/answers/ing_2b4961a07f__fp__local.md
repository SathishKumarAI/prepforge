---
qid: ing_2b4961a07f__fp__local
question: 'Explain: IPv4 — IP Address | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 449
total_tokens: 619
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:36:41-05:00'
sources: []
---

### Why an IPv4 address is a 32‑bit number

A computer network must identify every host uniquely **within the global routing fabric**.  
The simplest scheme is to assign each node a distinct integer, but we also need to
route packets efficiently—routers should be able to forward “most of the traffic” with a single table entry.

* **Compactness**: 32 bits gives \(2^{32}\approx4.3\times10^9\) addresses, enough for early Internet growth and still manageable in routing tables.
* **Bitwise aggregation**: If two hosts share the same high‑order bits, their routes can be merged into one prefix. This is a direct manifestation of *prefix‑based hashing*: the longer the common prefix, the more precise the route; the shorter, the coarser.

### Subnetting and CIDR

A subnet mask (or CIDR notation `/n`) selects the first `n` bits as network ID, the rest as host ID.  
This yields a **geometric hierarchy**: each increment in `n` halves the number of hosts per subnet while doubling the number of subnets. The routing table size is therefore logarithmic in the address space.

### Non‑obvious insight

Most designers think “more bits = more addresses”. In practice, the *distribution* of those bits matters.  
The Internet’s growth pattern (many small ISPs, few large backbone routers) forces us to use **variable‑length prefixes**: a single router can advertise a /12 for a large ISP while still handling many /24 subnets underneath. This variable granularity is what keeps routing tables tractable; without it, the table would grow linearly with the number of hosts.

In short, IPv4’s 32‑bit structure was chosen to balance address scarcity against the need for efficient, prefix‑based routing—an elegant solution grounded in information‑theoretic compression.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
