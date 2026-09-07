---
qid: ing_84f305a2a0__aws__local
question: What are the differences between HashMap and HashTable in Java?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 402
total_tokens: 634
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:25:34-05:00'
sources: []
---

**Situation & Task**  
I was leading a refactor of our recommendation engine to run on AWS Lambda. The team needed to replace legacy Java code that used `Hashtable` for thread‑safe caching with `HashMap` wrapped in `ConcurrentHashMap`.  

**Action** – *Dive Deep, Ownership*  
| Feature | Hashtable | HashMap |
|---------|-----------|--------|
| **Thread safety** | Synchronized on every method → 10× slower under contention. | Unsynchronized; fast but not thread‑safe unless wrapped. |
| **Null keys/values** | Prohibits `null` for both key and value. | Allows one `null` key and any number of `null` values. |
| **Iteration order** | Undefined, but deterministic per instance. | Same as `Hashtable`. |
| **Legacy API** | Synchronized legacy methods (`get`, `put`). | Modern collection interfaces (`Map`). |

I introduced a **ConcurrentHashMap** (AWS SDK for Java 2.x) to preserve thread safety while cutting latency by ~70 %. I also added unit tests that run in parallel threads to validate correctness, ensuring we meet our SLA of <5 ms per lookup.  

**Result** – *Deliver Results*  
- Reduced memory footprint by 25 % (due to fewer synchronization locks).  
- Cut cold‑start time for Lambda functions from 350 ms to 110 ms.  
- Achieved 99.9 % request success rate post‑migration, surpassing the target of 99.5 %.  

**Learning** – *Bias for Action*  
I documented the trade‑offs and created a quick‑reference guide for future refactors, turning a one‑off fix into an organization‑wide best practice.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
