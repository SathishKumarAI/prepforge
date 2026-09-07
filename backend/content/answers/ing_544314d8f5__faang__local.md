---
qid: ing_544314d8f5__faang__local
question: 'Explain: Types of RPC — Remote Procedure Call (RPC) in Operating System
  - GeeksforGeeks'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 525
total_tokens: 769
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:59:58-05:00'
sources: []
---

**Clarify**

The interviewer wants a concise explanation of the *types of Remote Procedure Call (RPC)* used in operating‑system–level IPC, as described on GeeksforGegs.  
Assumptions:  
* We’re talking about the classic “two flavors” of RPC—**synchronous vs. asynchronous**.  
* The audience has basic OS and networking knowledge.

---

**Approach**

1. Restate the two categories.  
2. Define each with its communication pattern, use‑cases, and pros/cons.  
3. Mention how modern frameworks (gRPC, Thrift) embody these patterns.  
4. Keep the answer ~200 words for brevity while hitting depth.

---

**Depth**

| Type | How it works | Typical use‑case | Pros | Cons |
|------|--------------|-----------------|------|------|
| **Synchronous RPC** | Client calls a remote function and blocks until the server returns a reply. The call is serialized; network latency directly affects client latency. | Tight coupling, where the caller needs immediate data (e.g., local filesystem operations). | Simple to reason about; deterministic control flow. | High latency; poor scalability if many clients block on slow servers. |
| **Asynchronous RPC** | Client initiates a call and immediately continues execution. A callback or future receives the result later, often via an event loop or message queue. | Decoupled services, high‑throughput APIs (e.g., microservices). | Non‑blocking; better resource utilization; can batch responses. | Requires handling callbacks or promises; harder to debug order of operations. |

Modern RPC libraries expose both modes: gRPC’s `Unary` calls are synchronous, while its `Streaming` and `Future` APIs provide asynchronous behavior.

---

**Edge Cases**

* **Deadlocks** in synchronous RPC if the server waits on the client.  
* **Callback hell** or race conditions in async RPC.  
* Network partitions can leave pending futures unresolved.

Test by simulating high‑latency links, verifying that async clients recover gracefully while sync clients timeout appropriately.

---

**Optimize & Communicate**

Explain that choosing between them depends on latency tolerance and coupling requirements. Emphasize that a hybrid design—use sync for critical, low‑volume calls and async for bulk or batch operations—often yields the best performance in distributed systems. Conclude by noting how understanding these patterns informs both system architecture and code quality.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
