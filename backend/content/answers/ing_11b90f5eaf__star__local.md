---
qid: ing_11b90f5eaf__star__local
question: 'Explain: TTL and Hop Limit — IP Address | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 316
total_tokens: 554
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:04:10-05:00'
sources: []
---

**Situation** – While architecting a multi‑region microservice mesh for our e‑commerce platform, we noticed a surge in stale cache entries and looping traffic between services across the VPN.

**Task** – I had to design a mechanism that would prevent packets from circulating indefinitely and ensure timely expiration of routing information without adding latency to legitimate traffic.

**Action** – I introduced a two‑layer approach:  
1. **TTL (Time‑to‑Live)** on our custom service discovery messages, setting it to 30 seconds so that if no heartbeat was received the entry would automatically expire.  
2. For IP routing between data centers, we enforced a **Hop Limit** of 12 in the IPv6 headers, matching the maximum hops our SD‑WAN could traverse. I updated the BGP route policies to drop packets exceeding this limit and logged such events for analysis. The configuration leveraged Open vSwitch’s `ip-tables` rules and integrated with Prometheus alerts.

**Result** – Loops dropped from 4 % of traffic, stale cache incidents fell by 78%, and latency increased by only 2 ms on average. I learned that coupling TTL at the application layer with hop limits in IP routing creates a robust defense against both logical and network‑level loops.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
