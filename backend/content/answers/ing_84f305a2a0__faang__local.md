---
qid: ing_84f305a2a0__faang__local
question: What are the differences between HashMap and HashTable in Java?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 492
total_tokens: 727
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:53:46-05:00'
sources: []
---

**Clarify**  
The interview asks for a comparison of `java.util.HashMap` vs. `java.util.Hashtable`. We’ll assume the focus is on API, thread‑safety, null handling, performance, and typical use cases.

**Approach**  
1. List key differences in categories (API & semantics, concurrency, null support, performance).  
2. Explain why each difference matters for real‑world code.  
3. Provide complexity notes and trade‑offs.

**Depth**  

| Feature | `HashMap` | `Hashtable` |
|---------|-----------|-------------|
| **Thread safety** | Not synchronized; safe for single‑thread or external sync. | Synchronized on every method; safe for concurrent use but incurs lock contention. |
| **Null keys/values** | Allows one null key and any number of null values. | Rejects all null keys/values (`NullPointerException`). |
| **Legacy** | Part of Java 1.2 Collections Framework; implements `Map`. | Legacy class (pre‑Collections), extends `Dictionary`. |
| **Iteration order** | Deterministic only if no rehashing; use `LinkedHashMap` for predictable order. | Same as `HashMap`; not ordered. |
| **Performance** | Faster due to lack of synchronization; lower overhead per operation. | Slower; each call acquires a monitor lock. |
| **Fail‑fast iterators** | Yes – throws `ConcurrentModificationException` if modified during iteration. | No built‑in fail‑fast; concurrent modifications may produce unpredictable results. |

**Edge cases**  
- Using a shared map across threads without external sync → race conditions with `HashMap`.  
- Inserting null keys/values into `Hashtable` → runtime exception.  
- Relying on order: neither guarantees insertion or access order unless wrapped.

**Optimize & communicate**  
For most modern Java code, prefer `HashMap` for its speed and flexibility; wrap it in `Collections.synchronizedMap()` or use concurrent maps (`ConcurrentHashMap`) when thread safety is required. Only retain `Hashtable` for legacy APIs that explicitly expect a synchronized dictionary. This choice balances performance with correctness—exactly the trade‑off FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
