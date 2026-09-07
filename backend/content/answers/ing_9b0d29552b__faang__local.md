---
qid: ing_9b0d29552b__faang__local
question: A user closes the tab halfway through a streamed response. What happens
  on the server, and what should happen?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 472
total_tokens: 716
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:44:45-05:00'
sources: []
---

**Clarify**  
We’re asked: *When a browser tab is closed mid‑stream (e.g., an AI chatbot sends a long answer via SSE/HTTP2 or WebSocket), what does the server see, and how should it react?*  
Assumptions to confirm: 1) streaming protocol (SSE, HTTP/2 push, WebSocket). 2) stateless vs stateful session. 3) resource cleanup requirements.

**Approach**  
1. Detect client disconnect via socket closure or keep‑alive timeout.  
2. Gracefully terminate the current stream, releasing buffers and locks.  
3. Persist partial results if needed (e.g., for “resume” feature).  
4. Log event for monitoring & billing.  

**Depth**  
- **SSE/WebSocket**: The underlying TCP socket emits a `close` or `error` event; frameworks expose callbacks (`onClose`, `onDisconnect`).  
- **HTTP/2**: A `RST_STREAM` frame is sent by the client; server receives it and stops writing.  
- **Graceful shutdown**: Cancel any async generation (e.g., stop token‑generation loop). Use context cancellation in Go or abort controllers in JS.  
- **Resource cleanup**: Free memory, close DB cursors, decrement reference counts.  
- **Partial persistence**: Store the last chunk and a flag “incomplete” so the next request can resume.  
- **Billing**: Increment usage only for completed requests; partial streams may be charged proportionally.

**Edge Cases**  
- Network blips vs intentional close → differentiate via timeout.  
- Long‑running models may hold GPU memory; must release promptly.  
- Multiple clients share a model instance – ensure one client’s disconnect doesn’t abort others.  

**Optimize & Communicate**  
Explain that handling disconnects is low‑cost (just a callback) but critical for resource hygiene and user experience. Mention fallback: if the server can’t cancel quickly, it should buffer minimal data and then close to avoid “zombie” tasks. Conclude with a concise flow diagram or pseudocode snippet.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
