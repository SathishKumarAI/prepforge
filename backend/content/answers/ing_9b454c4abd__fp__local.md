---
qid: ing_9b454c4abd__fp__local
question: 'Explain: How Engineers Use an API — What is an API? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 367
total_tokens: 543
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:35:44-05:00'
sources: []
---

**Why an API Exists**

In a distributed machine‑learning system the *function* you want (e.g., “classify image”) is just a piece of code that transforms input into output.  
To make this function usable by many developers, it must be **encapsulated**: hidden state, resources, and security are managed behind a well‑defined contract.  
This contract is the API—an interface that specifies *what* can be called and *how*, but not *how* it’s implemented.

**From Optimization to Interface**

Every ML model is an optimizer that has converged on parameters θ.  Deploying θ at scale requires:

1. **Isolation** – each request must see a deterministic θ; otherwise, concurrent training or inference corrupts the state.
2. **Resource control** – GPU memory and CPU time are precious; an API can throttle, batch, or cache requests to maximize throughput (a classic queuing‑theory problem).
3. **Security & observability** – you need audit trails and rate limits; these are enforced at the boundary.

Thus the API is a *resource‑aware abstraction* that turns an opaque optimizer into a reusable service.

**Non‑Obvious Insight**

Most engineers treat APIs as simple “function calls.”  In ML, however, the **latency budget** of the API often dictates model choice: if inference must finish in <10 ms, you may need to trade accuracy for a lightweight architecture.  
So the API is not just an access point—it *guides* architectural decisions by turning performance constraints into design parameters.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
