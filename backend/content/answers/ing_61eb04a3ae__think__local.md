---
qid: ing_61eb04a3ae__think__local
question: 'Explain: Circuit Breakers — How Uber Serves Over 40 Million Reads Per Second
  from Online Storage Using an Integrated Cache'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 203
output_tokens: 664
total_tokens: 867
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T07:30:01-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
- *Scope*: We’re asked how Uber’s “Circuit Breaker” design lets it read ~40 M requests/sec from online storage with a cache in‑between.  
- *Assumptions*:  
  - The reader knows basic caching concepts (LRU, TTL).  
  - “Online storage” refers to a persistent store (e.g., DynamoDB/Redis cluster).  
  - Circuit Breaker is a pattern that prevents cascading failures by temporarily stopping traffic to an overloaded component.  

**2️⃣ Mental model / framework**  
- Treat the system as a *two‑tier* architecture:  
  1. **Cache tier** (fast, in‑memory).  
  2. **Online storage tier** (slower, durable).  
- The Circuit Breaker sits between them and monitors *latency & error rates*.  
- It “breaks” the circuit when metrics exceed thresholds, redirecting traffic to an alternative path or returning cached data.

**3️⃣ Step‑by‑step reasoning**  

| Step | What happens | Why it matters |
|------|--------------|----------------|
| **a. Incoming read request** | Goes to the cache first. | Cache hit → instant; hit ratio high for hot keys. |
| **b. Cache miss** | Request is forwarded to online storage. | Only a minority of reads incur latency. |
| **c. Circuit Breaker monitors** | Tracks metrics (latency, error rate) on the storage path. | Detects when storage becomes sluggish or overloaded. |
| **d. Threshold breached?** | If yes → *open* circuit: all future requests are short‑circuited to cache or a fallback read path. | Prevents back‑pressure and cascading failures. |
| **e. Circuit closed after recovery** | Once metrics fall below thresholds, the breaker allows traffic again. | Gradual ramp‑up avoids sudden spikes. |
| **f. Result** | The system stays within latency budgets while still delivering 40 M reads/sec because most traffic is served by cache and the breaker protects the slow tier. |

**4️⃣ Common traps to avoid**  
- *Assuming a single cache* will always be enough; in practice, Uber uses a multi‑layered cache (edge → regional).  
- *Ignoring cache invalidation*: stale data can hurt accuracy; they use fine‑grained TTLs + publish/subscribe invalidations.  
- *Over‑tuning thresholds*: too tight → frequent circuit trips; too loose → slow response times.

**5️⃣ Sanity‑check & verbalize**  
- Ask: “If the storage latency spikes, does the system keep serving users?” – yes, via cache or fallback.  
- Explain to a peer: “Think of the Circuit Breaker as a traffic light that stops cars (reads) from entering a congested intersection (storage). While it’s red, all cars are rerouted through a side street (cache), keeping traffic moving.”  

This reasoning framework lets you articulate how Uber balances throughput and reliability with an integrated cache and circuit‑breaking logic.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
