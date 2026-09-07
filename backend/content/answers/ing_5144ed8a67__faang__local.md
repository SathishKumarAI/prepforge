---
qid: ing_5144ed8a67__faang__local
question: 'Explain: HTTP response status codes — HTTP response status codes - HTTP
  | MDN'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 504
total_tokens: 743
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:53:25-05:00'
sources: []
---

**Clarify**  
The interviewer wants a concise explanation of what HTTP response status codes are and how they’re used in web communication. I’ll assume we’re talking about the three‑digit codes defined by RFC 7231 (and related specs), and that the audience is familiar with basic HTTP request/response flow.

**Approach**  
I’ll break the answer into: 1) purpose & format, 2) major categories, 3) typical examples, and 4) why they matter for client/server logic. I’ll keep it under 200 words and use markdown bullets for clarity.

**Depth**  

| Code Class | Meaning | Common Codes |
|------------|---------|--------------|
| **1xx (Informational)** | Server acknowledges request receipt; processing continues. | `100 Continue`, `101 Switching Protocols` |
| **2xx (Success)** | Request succeeded. | `200 OK`, `201 Created`, `204 No Content` |
| **3xx (Redirection)** | Client must take additional action to complete the request. | `301 Moved Permanently`, `302 Found`, `307 Temporary Redirect` |
| **4xx (Client Error)** | Request malformed or invalid; client should correct it. | `400 Bad Request`, `401 Unauthorized`, `404 Not Found`, `429 Too Many Requests` |
| **5xx (Server Error)** | Server failed to fulfill a valid request. | `500 Internal Server Error`, `502 Bad Gateway`, `503 Service Unavailable` |

Each status code is sent in the first line of an HTTP response (`HTTP/1.1 200 OK`). The numeric class guides client logic: retry on 5xx, redirect on 3xx, or abort on 4xx.

**Edge Cases**  
- Custom codes (e.g., `418 I'm a teapot`) for playful or experimental use.  
- Non‑standard extensions in older protocols (HTTP/0.9).  
- Mixed‑content scenarios where a 200 may still contain errors in the body.

**Optimize & Communicate**  
I’ll finish by stressing that status codes decouple transport from application logic, enabling cache control, load balancing, and graceful degradation. Mention that modern frameworks often map exceptions to appropriate codes automatically, but developers should explicitly set codes for clarity and debugging.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
