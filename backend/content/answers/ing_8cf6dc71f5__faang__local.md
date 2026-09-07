---
qid: ing_8cf6dc71f5__faang__local
question: 'Explain: Timeouts — What is an API? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 465
total_tokens: 701
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:11:56-05:00'
sources: []
---

**Clarify**  
The interviewer wants a concise explanation of *timeouts* in the context of an **API** within system‑design interviews, and why they matter for scalability and reliability.

**Approach**  
1. Define an API (interface exposing functionality).  
2. Explain what a timeout is—client‑side vs server‑side.  
3. Discuss how timeouts protect resources, enable backpressure, and signal failures.  
4. Mention common patterns: exponential backoff, circuit breakers, rate limiting.

**Depth**  
An **API** (Application Programming Interface) is a contract that lets one service invoke operations on another via HTTP/REST, gRPC, etc. A **timeout** is the maximum duration the caller will wait for a response before aborting.  

*Client‑side timeout*: prevents hanging requests; if the server takes longer than `T_client`, the request fails locally, freeing the client thread and avoiding resource exhaustion.  
*Server‑side timeout*: protects the backend from runaway processing; after `T_server`, the server abandons the task, returns a 504/503, and frees worker slots.

Timeouts are essential for **backpressure**: when downstream is overloaded, clients back off automatically. They also enable **circuit breakers**—if many requests time out, the circuit trips to avoid cascading failures.  

Typical values: client `T_client` ≈ 2–5 × average latency; server `T_server` set by SLA or resource limits.

**Edge Cases**  
- Very short `T_client` causes false positives under network jitter.  
- Long `T_server` can tie up workers, causing queue buildup.  
- Timeouts on idempotent vs non‑idempotent calls: retrying a non‑idempotent call after timeout may duplicate side effects.

**Optimize & Communicate**  
To improve, expose per‑operation timeout policies, use adaptive timeouts based on real‑time latency stats, and combine with *retry* logic that respects idempotency. Explain to the interviewer that proper timeout configuration is a first‑class concern for resilient microservices—balancing responsiveness against resource safety.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
