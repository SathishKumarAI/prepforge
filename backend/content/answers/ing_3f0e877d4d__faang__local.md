---
qid: ing_3f0e877d4d__faang__local
question: How do you implement "Stop generating," and what actually happens end-to-end
  when the user clicks it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 436
total_tokens: 679
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:10:27-05:00'
sources: []
---

**1️⃣ Clarify**  
We’re asked: *When a user clicks “Stop generating” in an LLM UI, how is that implemented and what happens inside the system?*  
Assumptions to confirm:  
- The interface runs in a browser (React/Vue).  
- The backend streams tokens via WebSocket or SSE.  
- We have a stateless inference service behind a request‑per‑token loop.

**2️⃣ Approach**  
1. Capture UI event → send “stop” message over the same channel that streams tokens.  
2. Backend receives stop signal, aborts token generation (cancels the request).  
3. Close the stream cleanly; return any partial content to the client.  
4. Update UI state: disable button, show “Generation stopped”.

**3️⃣ Depth**  
- **Client side:** `onClick` handler emits `{type:"STOP"}` via WebSocket.  
- **Server side:** The inference loop checks a cancel flag each iteration; if set, it breaks the loop and sends a final partial response with `is_complete:false`.  
- **Streaming protocol:** SSE/WS frames are flushed immediately to avoid buffering delays.  
- **Resource cleanup:** Cancel any background GPU tasks, release memory, decrement request counter.  
- **Complexity:** O(1) on stop; generation cost is already paid up to the cancel point.

**4️⃣ Edge cases**  
- Network drop before stop reaches server → token stream continues until timeout.  
- Server crash mid‑generation → client shows partial output + error.  
- Rapid toggling of stop/start → debounce UI and idempotent cancel handling on server.

**5️⃣ Optimize & Communicate**  
- Use a lightweight cancellation token rather than killing the entire process to avoid resource churn.  
- Log stop events for monitoring latency and user satisfaction.  
- Explain to interviewers that this pattern keeps latency low, preserves GPU usage, and is robust across flaky networks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
