---
qid: ing_38fb3c45f9__faang__local
question: The model streams JSON that your UI renders as live components (generative
  UI). How do you handle parsing while the JSON is incomplete?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 538
total_tokens: 787
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:57:05-05:00'
sources: []
---

**Clarify**  
We’re receiving a stream of JSON from an LLM that represents UI state updates. The stream may arrive in chunks that don’t align on syntactic boundaries (e.g., a string or array is split across two packets). We must render components live while handling incomplete fragments, without blocking the UI or corrupting state.

**Approach**  
1. **Incremental parser** – use a streaming JSON parser (e.g., `JSON.parse` in chunks, or libraries like `json-stream`, `clarinet`) that can accept partial data and expose events (`startObject`, `key`, `value`).  
2. **Buffering** – keep a mutable buffer of raw bytes. On each chunk append it to the buffer.  
3. **Error handling** – if the parser throws a syntax error, examine the error position; trim the buffer up to the last valid token and retry parsing from there.  
4. **State merge** – on each parsed event update a shadow state tree. Once a complete component object is received (e.g., `endObject` for a known component id), emit a React context or Redux action to re‑render that component.

**Depth**  
- **Complexity:** O(n) time per character, constant extra memory for the buffer (bounded by chunk size).  
- **Trade‑offs:** A strict streaming parser may be slower than buffering and parsing at line boundaries but guarantees correctness with arbitrary splits.  
- **Implementation detail:** For each component, maintain a “partial” flag; only commit to UI when `isComplete` is true.

**Edge Cases**  
- Nested objects split across many chunks → ensure the stack depth in the parser doesn’t overflow.  
- Binary data inside strings (escaped) → validate UTF‑8 boundaries before feeding to parser.  
- Network hiccups causing duplicate or reordered chunks → deduplicate using sequence numbers embedded in the stream.

**Optimize & Communicate**  
1. **Backpressure:** expose a `write()` method that returns a promise resolved when the buffer size is below a threshold, preventing DOM thrashing.  
2. **Testing:** simulate chunk splits at every byte boundary and verify UI consistency; use Jest + React Testing Library with mocked streams.  
3. **Narration:** “I’ll treat the stream like an async iterator, feeding chunks into a streaming parser that emits fine‑grained events. Each event updates a local state tree; when a component’s JSON is complete I push it to the UI layer. This keeps rendering responsive while gracefully handling incomplete data.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
