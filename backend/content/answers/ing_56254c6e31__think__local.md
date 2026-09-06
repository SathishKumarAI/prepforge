---
qid: ing_56254c6e31__think__local
question: When should you use synchronous vs. asynchronous replication?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 188
output_tokens: 438
total_tokens: 626
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T06:40:57-05:00'
sources: []
---

**1️⃣ Clarify the context & assumptions**  
- Identify what “replication” refers to (e.g., database rows, logs, files).  
- Assume you’re deciding between *synchronous* (writes must be confirmed by replicas before returning) and *asynchronous* (writes return immediately while replication occurs in the background).  
- Recognize constraints: latency tolerance, data consistency needs, network reliability, workload patterns.

**2️⃣ Apply a decision framework**  
- **Consistency vs. Availability trade‑off** (CAP theorem): synchronous → stronger consistency, potentially lower availability under failure; asynchronous → higher availability, weaker consistency.  
- **Latency sensitivity**: operations that can afford delay vs. those requiring instant acknowledgment.  
- **Recovery & durability requirements**: critical data that must survive failures quickly vs. less critical data.

**3️⃣ Step‑by‑step reasoning**  
1. List business rules (e.g., “orders must be visible everywhere before confirmation”).  
2. Map each rule to consistency level needed.  
3. For each, weigh the cost of waiting for all replicas vs. risk of stale reads.  
4. Consider network characteristics: high‑latency links favor asynchronous; low‑latency, reliable links can support synchronous.  
5. Decide if a hybrid approach (e.g., primary‑replica sync, secondary async) fits.

**4️⃣ Avoid common traps**  
- Don’t assume “async is always faster”; network contention or write amplification can negate benefits.  
- Beware of “eventual consistency” pitfalls: users may see stale data if not handled correctly.  
- Ignore failure modes: synchronous can block entire system under a single replica outage.

**5️⃣ Sanity‑check & articulate**  
- Re‑explain the choice to a colleague: “We use synchronous for order placement because customers need immediate confirmation across all services; we use asynchronous for log shipping because eventual visibility is acceptable.”  
- Verify that latency targets, failure scenarios, and consistency guarantees align with the explanation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
