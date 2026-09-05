---
qid: ing_38fb3c45f9__think__local
question: The model streams JSON that your UI renders as live components (generative
  UI). How do you handle parsing while the JSON is incomplete?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 205
output_tokens: 394
total_tokens: 599
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:40:33-05:00'
sources: []
---

**1️⃣ Clarify assumptions & scope**  
- Assume a streaming API that emits partial JSON fragments (e.g., `{"title":"Hello", "body":` …).  
- UI renders “live components” as soon as enough data arrives to build a component tree.  
- Goal: parse incrementally without blocking or corrupting state.

**2️⃣ Adopt a stream‑aware parsing model**  
- Treat the incoming buffer like a *token stream*: use a lexer that emits tokens (braces, strings, commas).  
- Maintain a lightweight syntax stack (current object/array depth, expected key/value).  
- When the stream ends abruptly, keep the partial parse state for resumption.

**3️⃣ Reason step‑by‑step**  
1. Buffer incoming bytes.  
2. Feed to incremental lexer → tokens.  
3. Push tokens onto a parse stack; once a complete node is built (e.g., a full object), emit it as a component update.  
4. If the stream pauses, keep the buffer and stack intact; resume when more data arrives.  
5. On error, attempt to recover by discarding until next `{` or `[` that can start a valid sub‑object.

**4️⃣ Avoid common pitfalls**  
- Don’t assume line breaks indicate completion—JSON may be minified.  
- Avoid naïve “split on `}`” logic; nested objects break this.  
- Do not discard partial data—store it for later continuation.

**5️⃣ Sanity‑check & communicate**  
- Log the depth and last token to ensure progress.  
- Expose a “buffer status” in dev tools so developers see incomplete vs complete chunks.  
- Test with intentional truncations, network jitter, and large nested structures to confirm resilience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
