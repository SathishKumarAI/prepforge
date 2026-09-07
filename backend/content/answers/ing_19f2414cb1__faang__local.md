---
qid: ing_19f2414cb1__faang__local
question: What type of object is returned by httpClient?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 462
total_tokens: 695
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:45:36-05:00'
sources: []
---

**1️⃣ Clarify**  
The interview asks: *“What type of object is returned by `httpClient`?”*  
Assumptions I’d confirm:  
- Which HTTP library are we using (e.g., Axios, Fetch API, HttpClient in Angular)?  
- Is the question about a synchronous call or an asynchronous promise/observable?  
- Are we looking for the runtime type (`Promise<Response>` vs `Observable<HttpResponse>`) or the compile‑time generic (`T`)?

**2️⃣ Approach**  
1. Identify the library’s API contract.  
2. Inspect its return signature (e.g., method docs, typings).  
3. Map that to a concrete JavaScript/TypeScript type.  
4. Explain any indirection (wrappers, adapters).

**3️⃣ Depth**  
- **Axios:** `axios.get(url)` returns a `Promise<AxiosResponse<T>>`. The resolved value is an object containing `data`, `status`, `headers`, etc., but the promise itself is the returned entity.  
- **Fetch API:** `fetch(url)` yields a `Promise<Response>`. The `Response` exposes methods like `.json()`, `.text()` to access body payloads.  
- **Angular HttpClient:** Methods like `get<T>()` return an `Observable<HttpResponse<T>>` (or just `T` if you use the shorthand). The observable is lazy and emits once when the HTTP call completes.

**4️⃣ Edge Cases**  
- Errors: Promises reject, Observables emit errors.  
- CORS / network failures: still a promise/observable but with error state.  
- Streaming APIs: Response body can be a `ReadableStream`.  

**5️⃣ Optimize & Communicate**  
State the exact type you’d use in code (e.g., `Promise<AxiosResponse<User>>`). Highlight that understanding the return shape is critical for proper error handling and response parsing. If the interviewer wants the *payload* type, clarify that it's generic (`T`) and depends on request context. This shows both depth and clear communication—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
