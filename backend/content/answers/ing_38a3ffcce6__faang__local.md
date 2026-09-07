---
qid: ing_38a3ffcce6__faang__local
question: 'Explain: See also — HTTP response status codes - HTTP | MDN'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 456
total_tokens: 693
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:56:04-05:00'
sources: []
---

**Clarify**  
You’re asking for a concise explanation of the most common HTTP response status code families (1xx–5xx) and why they matter when building machine‑learning APIs or services.

**Approach**  
* Map each class to its semantic meaning.  
* Highlight examples that surface in ML pipelines (e.g., model inference, data upload).  
* Note how clients should react programmatically.  

**Depth**  
| Code | Meaning | Typical ML use | Client action |
|------|---------|----------------|---------------|
| **1xx – Informational** | Request received, continuing process | Progress on long‑running training jobs | Ignore or log |
| **2xx – Success** | Action completed | Predict request (`200 OK`), model upload (`201 Created`) | Proceed; parse payload |
| **3xx – Redirection** | Resource moved | Versioned endpoint (`301/302`) | Follow `Location` header |
| **4xx – Client error** | Bad request | Invalid JSON schema (`400`), unauthorized data access (`401`) | Fix input / re‑auth |
| **5xx – Server error** | Failure on server side | GPU out of memory during inference (`500`), internal crash (`503 Service Unavailable`) | Retry with back‑off or alert |

**Edge cases**  
* `204 No Content`: Successful inference but no payload (e.g., status check).  
* `429 Too Many Requests`: Rate‑limit a high‑volume prediction service.  
* `422 Unprocessable Entity`: Data validation failure for training datasets.

**Optimize & communicate**  
Explain that clear, consistent status codes reduce client-side error handling complexity and improve observability. In production ML services, instrument logs with the code and message to surface telemetry quickly. This structured approach aligns with FAANG expectations: clarity of problem, systematic plan, depth of technical detail, awareness of edge cases, and communication of trade‑offs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
