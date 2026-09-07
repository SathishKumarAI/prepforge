---
qid: ing_4197524a49__faang__local
question: 'Explain: Retries — What is an API? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 493
total_tokens: 729
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:16:28-05:00'
sources: []
---

**1️⃣ Clarify**  
The interviewer asks for a concise explanation of “what is an API?” *and* how we’d handle **retries** when calling that API in a distributed system. I’ll assume: (a) the API is HTTP/REST, (b) it can return transient errors (5xx, time‑outs), and (c) we need idempotency to avoid double work.

---

**2️⃣ Approach**  
*Define* an API as a contract exposing endpoints with request/response schemas.  
For retries: implement **exponential back‑off + jitter**, limit the number of attempts, and use **idempotency keys** for state‑changing calls.

---

**3️⃣ Depth**  

| Component | Detail |
|-----------|--------|
| *API contract* | URI, HTTP method, headers (auth, content‑type), request/response JSON schema, status codes. |
| *Retry policy* | `maxRetries = 5`, delay = `base * 2^attempt + random(0, jitter)`. |
| *Idempotency* | Client sends a unique `Idempotency-Key` header; server stores the result and returns it on repeat requests. |
| *Failure handling* | If retries exhausted → surface error to caller or fallback (e.g., cache). |

**Complexity**: Each retry adds latency but avoids unnecessary load spikes. The back‑off keeps system load manageable.

---

**4️⃣ Edge Cases**  
- **Permanent errors** (4xx) should not be retried.  
- **Long‑running operations** may require a polling endpoint instead of retries.  
- **Race conditions** if idempotency key isn’t enforced server‑side.  

Test with: 5xx responses, network timeouts, duplicate keys, and mixed success/failure sequences.

---

**5️⃣ Optimize & Communicate**  
Explain trade‑offs: fewer retries reduce latency but risk missing transient failures; more retries improve reliability but can overload the service. Show how to expose metrics (retry count, back‑off duration) for observability. Conclude by summarizing that a well‑defined API contract plus a robust retry strategy with idempotency ensures resilience and correctness in distributed systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
