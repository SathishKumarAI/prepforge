---
qid: ing_77303dc9f6__faang__local
question: 'Explain: Client error responses — HTTP response status codes - HTTP | MDN'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 440
total_tokens: 678
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:21:10-05:00'
sources: []
---

**Clarify**  
The interview asks for a concise explanation of *client‑error* HTTP status codes (4xx). I’ll assume the audience knows basic HTTP but not the full taxonomy. I’d confirm they want examples, typical usage patterns, and why clients must handle them.

**Approach**  
1. Define “client error” in HTTP terms.  
2. List common 4xx codes with short semantics.  
3. Explain when each is appropriate (e.g., authentication vs. malformed request).  
4. Mention how servers signal these to guide client retries or debugging.  

**Depth**  
Client‑error responses indicate that the request was syntactically correct but semantically invalid for the server’s state. Typical codes:  

| Code | Meaning | When to use |
|------|---------|-------------|
| 400 Bad Request | Malformed syntax | Missing required field, bad JSON |
| 401 Unauthorized | Authentication missing/invalid | Protected resource without token |
| 403 Forbidden | Authenticated but not allowed | User lacks role |
| 404 Not Found | Resource absent | Wrong URL or ID |
| 405 Method Not Allowed | HTTP method unsupported on endpoint | POST to a read‑only route |
| 409 Conflict | Duplicate or conflicting state | Concurrent updates |
| 422 Unprocessable Entity | Semantic validation failed | Business rule violation |

Clients should parse the body (often JSON) for error details, log them, and decide between retrying, prompting user action, or aborting.

**Edge Cases**  
- Over‑reusing 400 for all errors can hide intent.  
- 404 vs. 410 (gone) – clients may need to cache invalidation logic.  
- Rate limiting uses 429; must honor `Retry-After`.  

**Optimize & Communicate**  
Explain that clear, consistent client‑error handling reduces bandwidth waste and improves UX. I’d conclude by noting that proper status code use is a lightweight contract between API and consumer—essential for scalable, maintainable services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
