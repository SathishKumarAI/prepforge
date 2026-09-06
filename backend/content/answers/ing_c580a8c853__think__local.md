---
qid: ing_c580a8c853__think__local
question: 'Explain: Informational responses — HTTP response status codes - HTTP |
  MDN'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 452
total_tokens: 646
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T14:00:57-05:00'
sources: []
---

**Metacognition for Explaining “Informational Responses” (HTTP 1xx)  
(150–220 words)**  

1. **Clarify the scope & assumptions**  
   * Identify that “informational responses” refers to status codes 100‑199 in HTTP/1.1 and later.  
   * Assume the audience knows basic HTTP request/response flow but may not know why 1xx exists or how they’re used.

2. **Choose a mental model / framework**  
   * Think of the HTTP lifecycle as a handshake: *request → provisional response → final response*.  
   * Map each 1xx code to a step in that handshake (e.g., 100 Continue signals “ready for body”).

3. **Step‑by‑step reasoning**  
   * Start with the purpose: give the client early feedback before sending large payloads or after receiving a request.  
   * List common codes: 100 Continue, 101 Switching Protocols, 102 Processing, 103 Early Hints.  
   * For each, explain the trigger condition (e.g., `Expect: 100-continue` header), the server’s action, and how the client should react (wait for final status or proceed).

4. **Avoid common traps**  
   * Don’t conflate 1xx with “error” codes; emphasize they’re non‑final.  
   * Avoid overloading on obscure codes (102/103) unless the context requires them.  
   * Remember that many HTTP libraries hide 1xx handling, so explain that developers rarely see them directly.

5. **Sanity‑check & communicate**  
   * Verify each code’s RFC reference and real‑world usage (e.g., browsers ignore 101).  
   * Use a simple diagram or timeline to illustrate the flow: request → 100 Continue → body → 200/4xx/5xx.  
   * End with a quick recap of why they matter: performance hints, protocol upgrades, and early resource loading.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
