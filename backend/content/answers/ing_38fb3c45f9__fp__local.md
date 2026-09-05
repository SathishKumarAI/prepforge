---
qid: ing_38fb3c45f9__fp__local
question: The model streams JSON that your UI renders as live components (generative
  UI). How do you handle parsing while the JSON is incomplete?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 186
output_tokens: 489
total_tokens: 675
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:06:02-05:00'
sources: []
---

**Streaming‑JSON UI rendering**

When an LLM emits a JSON stream, the bytes arrive in order but not all at once.  
The fundamental problem is to *extract semantic units (objects, arrays, values) as soon as they are complete* so that the UI can update without waiting for the entire payload.

1. **Token‑level incremental parsing** – Treat the stream as a sequence of JSON tokens ( `{`, `}`, `[`, `]`, `:`, `,`, string/number).  
   A state machine keeps a stack of open containers. Each token is processed immediately; when a closing bracket or comma signals that an object/value has finished, the partial data on the stack can be emitted to the UI.

2. **Buffering incomplete tokens** – If the current byte ends in the middle of a string or number, keep the fragment in a buffer until more bytes arrive. This avoids corrupt parsing and preserves the ability to resume once the token is complete.

3. **Back‑pressure & chunk size** – The decoder can expose how many bytes it consumed; the producer may throttle accordingly, ensuring the UI never receives an overwhelming flood of partial updates.

4. **Non‑obvious insight**: *You don’t need a full JSON grammar to stream.*  
   By exposing the stream as an event sequence (e.g., “startObject”, “key”:“foo”, “value”:42, “endObject”), you can render components in lockstep with data arrival, effectively turning the UI into a lazy evaluator of the same state machine that parses the JSON. This decouples parsing from rendering and guarantees that every incremental update is valid, no matter how fragmented the network packets are.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
