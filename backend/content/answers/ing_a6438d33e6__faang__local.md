---
qid: ing_a6438d33e6__faang__local
question: 'Explain: Some REST API implementations might break them'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 575
total_tokens: 807
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:11:32-05:00'
sources: []
---

**Clarify**  
We’re being asked why *some* REST‑API designs can invalidate the assumptions of a typical ML service (e.g., idempotency, statelessness, request size limits). I’ll assume the context is an online inference endpoint that receives JSON payloads and returns predictions.  

**Approach**  
1. Identify core ML‑service invariants.  
2. Map common REST pitfalls to each invariant.  
3. Illustrate with concrete examples.  

**Depth**  
| Invariant | Typical REST pitfall | Why it breaks the ML service |
|-----------|----------------------|------------------------------|
| **Statelessness** | Session cookies or hidden auth tokens that influence model state | A model that caches intermediate results per session can leak data or create inconsistent predictions across requests. |
| **Idempotency** | POST used for inference but treated like a database write (e.g., logging every call as a new record) | Excessive I/O slows throughput; duplicated logs may skew monitoring metrics. |
| **Payload size limits** | Large binary blobs sent via multipart/form‑data or base64 in JSON | Base64 inflates payload by ~33 %; servers with 2 MB max body will reject valid images, causing client errors. |
| **Content‑type negotiation** | Accept header misused to return raw bytes instead of structured JSON | Consumers expect a predictable schema; binary blobs break downstream pipelines and violate API contract. |
| **Rate limiting / throttling** | Global bucket that penalizes all users equally | ML inference is latency‑sensitive; aggressive limits can trigger timeouts for low‑volume but high‑priority clients. |

**Edge Cases**  
* A client sends an empty JSON object → the model may throw a null‑pointer error if not validated.  
* Malformed UTF‑8 in text input can corrupt tokenization, leading to unpredictable outputs.  
* Switching between HTTP/1.1 and HTTP/2 changes keep‑alive behavior; some frameworks close idle connections prematurely, causing retries that double‑process the same request.

**Optimize & Communicate**  
- Enforce strict JSON schema validation at entry point (O(1) per field).  
- Use `application/json` only for inference; reserve multipart for auxiliary artifacts.  
- Implement per‑client rate limits and graceful degradation (e.g., return “busy” with retry‑after header).  
- Log request IDs but keep side‑effects minimal to preserve statelessness.  

By aligning the API contract with these invariants, we avoid the pitfalls that make some REST implementations “break” an ML inference service.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
