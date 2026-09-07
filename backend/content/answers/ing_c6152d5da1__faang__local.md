---
qid: ing_c6152d5da1__faang__local
question: 'Explain: Critical frontend decision: Streaming — ChatGPT System Design
  - by Neo Kim and Hayk'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 456
total_tokens: 698
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:21:37-05:00'
sources: []
---

**Clarify**  
You’re asked to describe the *critical front‑end decision* in a system that streams ChatGPT responses to users.  
Assumptions:  
- Real‑time, low latency is required.  
- Users see partial text as it’s generated.  
- The back‑end sends tokens via WebSocket/HTTP 2.  

**Approach**  
1. Decide *how* the front end receives and renders data (chunked stream vs. full payload).  
2. Pick a transport that preserves order and can handle bursts.  
3. Implement incremental rendering with minimal reflow.

**Depth**  
- **Streaming API**: Use WebSocket for bi‑directional, low‑latency communication; fall back to Server‑Sent Events if needed.  
- **Tokenization**: Back‑end emits tokens (or small JSON blobs) as they’re produced by the LLM. The front end appends them to a `<textarea>` or virtual list.  
- **Back‑pressure**: Implement a simple windowing protocol – client sends “ready for next token” after rendering, preventing buffer overrun.  
- **Error handling**: If connection drops, show a retry button; keep last received state.

Complexity: O(1) per token on the front end; memory scales with number of tokens displayed. Trade‑off is minimal latency vs. occasional small bursts causing UI jank—handled by throttling or debouncing renders.

**Edge Cases**  
- Network jitter → out‑of‑order tokens (use sequence IDs).  
- Very long responses → memory exhaustion (limit visible window, allow “load more”).  
- Accessibility: screen readers must announce incremental text appropriately.

**Optimize & Communicate**  
Explain that streaming reduces perceived latency by 30–50 ms per token and allows the UI to start rendering before generation finishes. Emphasize that choosing WebSocket over polling eliminates round‑trip overhead, while back‑pressure guarantees stability under load. Conclude with a brief note on monitoring metrics (latency, bytes/sec) to iterate on the design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
