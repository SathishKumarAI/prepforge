---
qid: ing_38fb3c45f9__star__local
question: The model streams JSON that your UI renders as live components (generative
  UI). How do you handle parsing while the JSON is incomplete?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 340
total_tokens: 592
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:22:44-05:00'
sources: []
---

**Situation:**  
In a recent product launch, we built a generative‑UI feature that streamed JSON from an LLM backend so our React app could render components in real time. The stream arrived as a series of partial chunks—sometimes a component definition was split across multiple packets.

**Task:**  
I had to design a parsing strategy that would allow the UI to display incremental content without blocking or throwing errors, while ensuring that incomplete JSON didn’t corrupt subsequent data or cause re‑renders.

**Action:**  
1. Implemented a *chunk buffer* in the client that concatenates incoming bytes and tracks a simple depth counter for braces/brackets.  
2. After each chunk, I attempted to parse only when the depth returned to zero—meaning we had a complete JSON object.  
3. For safety, wrapped `JSON.parse` in a try/catch; on failure I logged the partial string and awaited more data instead of throwing.  
4. Added a timeout guard: if no new data arrived within 300 ms, I forced a parse of whatever was available to avoid hanging UI.  
5. Used React’s Suspense with an async generator that yielded parsed components as they became ready.

**Result:**  
The stream handled up to 25% more concurrent users with zero UI freezes; latency dropped from 1.2 s to 0.7 s per component, and error logs fell by 92%. I learned that a lightweight depth‑based buffer combined with graceful fallbacks is essential for streaming generative content in production.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
