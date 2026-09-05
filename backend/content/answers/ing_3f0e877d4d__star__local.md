---
qid: ing_3f0e877d4d__star__local
question: How do you implement "Stop generating," and what actually happens end-to-end
  when the user clicks it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 302
total_tokens: 548
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:34:17-05:00'
sources: []
---

**Situation**  
In my last role, I worked on a conversational AI product that streamed responses to users via WebSocket. Users could click “Stop generating” mid‑response while the model was still running.

**Task**  
I had to add an immediate cancel feature so the UI would halt text output, free GPU resources, and log the event for analytics without corrupting the conversation state.

**Action**  
1. Added a `stop` flag in the client’s WebSocket message payload.  
2. On the server, wrapped the generation loop (using Hugging Face’s `generate` with `do_sample=True`) in an async task that periodically checks `ctx.cancelled`.  
3. When the flag is set, I called `task.cancel()` and caught `asyncio.CancelledError`, then sent a “generation aborted” event back to the client.  
4. Updated the UI to clear the partial text buffer instantly and display a subtle toast.  
5. Logged the cancel event with timestamp, user ID, and token count generated so far.

**Result**  
The feature reduced GPU idle time by ~30% during peak usage and cut latency for subsequent requests by 12 ms on average. I learned that graceful cancellation requires both client‑side signaling and server‑side cooperative interruption; otherwise you risk orphaned processes or corrupted conversation histories.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
