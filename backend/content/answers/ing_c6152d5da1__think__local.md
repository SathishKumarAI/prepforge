---
qid: ing_c6152d5da1__think__local
question: 'Explain: Critical frontend decision: Streaming — ChatGPT System Design
  - by Neo Kim and Hayk'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 198
output_tokens: 476
total_tokens: 674
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T14:02:57-05:00'
sources: []
---

**1️⃣ Clarify the Scope & Assumptions**  
   • Identify what “critical frontend decision” means in this context (client‑side streaming vs polling).  
   • Assume a typical LLM backend (OpenAI‑style API) and a web app with React/Next.js.  
   • Note that the question focuses on *streaming* as the pivotal choice, not other architecture details.

**2️⃣ Adopt a Design‑Thinking Framework**  
   • Use **Problem–Solution–Trade‑off**: list the problem (latency, UX), propose streaming, then evaluate trade‑offs.  
   • Map to system layers: network protocol (HTTP/1.1 vs HTTP/2), browser support, security, and scalability.

**3️⃣ Step‑by‑Step Reasoning**  
   1. **Latency & UX:** Streaming delivers partial responses instantly, improving perceived speed.  
   2. **Network Efficiency:** Keeps a single open connection; avoids repeated handshakes of polling.  
   3. **State Management:** Frontend must buffer chunks and render incrementally (e.g., React suspense or incremental DOM).  
   4. **Error Handling:** Must detect stream closure, retry logic, and graceful fallback to full response.  
   5. **Compatibility & Security:** Ensure CSP headers allow `Transfer-Encoding: chunked`; use HTTPS and proper CORS.

**4️⃣ Avoid Common Pitfalls**  
   • Don’t assume all browsers support HTTP/2 streaming; provide a fallback.  
   • Mixing streaming with caching can lead to stale data if not invalidated properly.  
   • Over‑optimizing rendering (e.g., too many re‑renders per chunk) can hurt performance.

**5️⃣ Sanity‑Check & Communicate Clearly**  
   • Verify that the explanation covers latency, resource usage, UX, and edge cases.  
   • Use a concise bullet list or diagram to convey trade‑offs quickly.  
   • End with a recommendation: “For ChatGPT‑style interactions, streaming is the critical frontend decision because it balances user experience, bandwidth efficiency, and scalability.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
