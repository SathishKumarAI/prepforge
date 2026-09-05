---
qid: ing_97b7325b76__eli5__local
question: 'Explain: Disadvantages — Remote Procedure Call (RPC) in Operating System
  - GeeksforGeeks'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 348
total_tokens: 516
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:38:12-05:00'
sources: []
---

Imagine a family where every time someone wants a new toy, they must call the parents through a walkie‑talkie (the “remote procedure call”). The walkie‑talkie works fine for simple requests—“give me a ball”—but it has several drawbacks.

**1. Extra waiting time:**  
The call has to travel from the child’s room to the parents’ office and back, so each request takes longer than if the toy were already in the pantry. In an OS, this extra round‑trip adds latency to every operation that uses RPC.

**2. Fragile connections:**  
If the walkie‑talkie battery dies or a channel is jammed, the child can’t get any toys at all. Similarly, network failures or misconfigured ports make the whole remote call fail, and the program must handle these errors gracefully.

**3. Limited speed for large data:**  
Sending a big toy (e.g., a dollhouse) over the walkie‑talkie would be slow; you’d rather hand it directly. In computing, transferring large blobs of data via RPC is inefficient compared to local memory access.

**4. Extra overhead for every call:**  
Each time the child speaks, the parents have to interpret the request, find the toy, and report back—this extra “translation” cost slows everything down, especially when many calls happen in quick succession.

So while RPC lets different parts of a system talk without being physically close, it adds latency, can break easily, is slow for large payloads, and introduces overhead that makes programs less responsive.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
