---
qid: vq_e0e46d0cbf__faang__local
question: Can we pass RECORD GROUP between FORMS ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 419
total_tokens: 651
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:39:28-05:00'
sources: []
---

**Clarify**  
You want to know if a *record group* (a repeating block of fields) can be shared across multiple forms in your application.  
Assumptions:  
- Forms are separate UI screens that may run on the same or different processes.  
- The record group is a data structure (array/collection).  
- “Pass” means make the same instance visible, not just copy values.

**Approach**  
1. **Identify scope** – determine whether forms share the same process or communicate via IPC.  
2. **Choose sharing mechanism** – shared memory, singleton service, dependency injection, or serialization over a channel.  
3. **Implement lifecycle management** – ensure the group is created once and disposed when no longer needed.

**Depth**  
- *In‑process*: expose the record group through a thread‑safe singleton or an observable service; forms subscribe to changes. Complexity: O(1) access, O(n) for updates if notifications propagate.  
- *Out‑of‑process*: serialize the group (JSON/ProtoBuf), send over sockets/WCF/RPC, and deserialize in the target form. Overhead: O(n) serialization + network latency; trade‑off is isolation and security.

**Edge Cases**  
- Concurrent modifications → race conditions; use locks or immutable snapshots.  
- Form lifecycle mismatches → dangling references if a form closes before cleanup.  
- Size limits on IPC channels → large record groups may exceed buffer sizes.

**Optimize & Communicate**  
Explain that for high‑frequency updates, an event‑driven pattern (Observer) reduces copying. For large static data, use shared memory with reference counting to avoid deep copies. Conclude by summarizing the trade‑offs and recommending a singleton service for in‑process scenarios and a lightweight serialization protocol for cross‑process communication.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
