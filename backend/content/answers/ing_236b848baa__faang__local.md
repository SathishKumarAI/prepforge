---
qid: ing_236b848baa__faang__local
question: A generation fails halfway through the stream. What does good error and
  retry UX look like?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 463
total_tokens: 703
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:06:25-05:00'
sources: []
---

**Clarify**  
We’re asked to design a *user‑experience* for an AI generation (e.g., text or image) that stops mid‑stream because of a network hiccup or backend fault.  
Assumptions:  
1. The user has already seen part of the output and may want to keep it.  
2. The system can resume from the last token/segment if the model state is preserved.  
3. Latency is important; we don’t want a 30‑second “retry” button that feels like a dead end.

**Approach**  
1. Detect failure early and surface an unobtrusive *“Connection lost – resuming…”* banner.  
2. Offer two actions: **Continue** (auto‑resume) or **Abort & Retry** (restart from scratch).  
3. Persist the partial stream so that, on success, it appends seamlessly to what was already shown.

**Depth**  
- Use WebSocket ping/pong to monitor connection health; on failure, trigger a reconnection loop with exponential backoff up to 5 attempts.  
- While reconnecting, keep the UI responsive: display a subtle spinner next to the partial content.  
- If reconnection succeeds within the threshold, automatically stream the remainder without user intervention.  
- If all retries fail, show an error card that says *“Unable to continue generation.”* and provide a single **Retry** button that clears the partial state (to avoid duplicate content).  

Complexity: O(1) per retry attempt; overall latency bounded by backoff schedule.

**Edge Cases**  
- User scrolls away while reconnecting → keep the banner sticky.  
- Partial content becomes stale if the model’s internal state changes between attempts → enforce a fresh restart after 3 failed retries.  

**Optimize & Communicate**  
Explain that this UX balances *in‑situ recovery* (no loss of progress) with graceful degradation when failures persist. Highlight that we’re using backoff to avoid hammering the server, and that the UI stays informative yet non‑intrusive—exactly what a FAANG product manager would expect.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
