---
qid: ing_43d934f6f2__think__local
question: 'Explain: Server error responses — HTTP response status codes - HTTP | MDN'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 399
total_tokens: 593
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:05:07-05:00'
sources: []
---

**1️⃣ Clarify the scope and assumptions**  
- The user wants an explanation of *server‑side* (5xx) HTTP status codes as described on MDN.  
- Assume they know basic client–server interaction but may not be familiar with each code’s semantics or typical use cases.  
- We’ll focus only on 500–599 series, briefly noting that 4xx are client errors.

**2️⃣ Adopt a mental model: “Error class → cause → recovery”**  
- Group codes by category (generic error, authentication, server configuration, service unavailable).  
- For each code, map the *reason* (what went wrong) to the *recommended action* (client retry, server fix, etc.).

**3️⃣ Step‑by‑step reasoning**  
1. List the 5xx codes: 500, 501, 502, 503, 504, 505, 511.  
2. For each, write a one‑sentence description of its trigger.  
3. Add a practical example (e.g., “503 – Service Unavailable when load balancer is down”).  
4. Mention MDN’s guidance on handling: logging, retry with back‑off, fallback content.

**4️⃣ Common traps to avoid**  
- Mixing up 5xx (server) with 4xx (client).  
- Over‑simplifying codes like 500 (“Internal Server Error”) as “anything bad.”  
- Forgetting that some codes are rarely used (e.g., 511) or are informational only.

**5️⃣ Sanity‑check & communicate**  
- Verify each code’s official meaning via RFC 7231 and MDN.  
- Ensure the explanation stays concise but covers the why, when, and how.  
- End with a quick summary table for easy reference.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
