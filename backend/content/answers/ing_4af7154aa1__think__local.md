---
qid: ing_4af7154aa1__think__local
question: 'Explain: DNS — TCP vs UDP | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 189
output_tokens: 487
total_tokens: 676
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:19:56-05:00'
sources: []
---

**Thought‑process for explaining “DNS – TCP vs UDP” in a system‑design interview**

1. **Clarify scope & assumptions**  
   - Confirm the interviewer wants an architectural view (e.g., why DNS uses both protocols, trade‑offs).  
   - Assume they know basic networking but not deep DNS internals.  

2. **Mental model**  
   - Treat DNS as a *lookup service* that needs low latency and high throughput for small queries, yet must also support large responses or zone transfers.  
   - Map each protocol to the required properties: UDP → “fast, stateless” vs TCP → “reliable, ordered, larger payloads”.

3. **Step‑by‑step reasoning**  
   1. Start with the *client‑side* flow: a resolver sends a query over UDP because it’s cheap and fast; if no answer or truncated flag set, retry over TCP.  
   2. Explain *server side*: most authoritative servers listen on both ports; for normal queries they reply via UDP; for zone transfer or large answers (EDNS0) they switch to TCP.  
   3. Highlight *fail‑over* logic: the resolver’s fallback mechanism, how TTLs and caching mitigate repeated lookups.  
   4. Discuss *security*: DNS over TLS/UDP (DoT/DNS‑SEC), implications for stateful vs stateless transport.

4. **Common traps to avoid**  
   - Don’t conflate “DNS uses UDP by default” with “all DNS traffic is UDP”; remember zone transfers and large records use TCP.  
   - Avoid oversimplifying reliability: UDP is not “unreliable” in the sense of lost packets at the application layer—most resolvers handle retransmission.  

5. **Sanity‑check & verbalize**  
   - Verify you’ve covered *why* (latency, overhead), *how* (fallback logic), and *what* (edge cases).  
   - Summarize: “DNS uses UDP for speed; it falls back to TCP when needed—this dual‑protocol design balances performance with robustness.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
