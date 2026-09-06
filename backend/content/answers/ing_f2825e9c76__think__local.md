---
qid: ing_f2825e9c76__think__local
question: How do you handle streaming when the model is emitting tool calls or structured
  JSON?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 436
total_tokens: 630
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T17:01:04-05:00'
sources: []
---

**1️⃣ Clarify the scenario and assumptions**  
- Identify whether the model is *open‑ended* (e.g., GPT‑4) or a *tool‑aware* system that can issue function calls.  
- Determine if the output format is *plain text*, *structured JSON*, or *interleaved tool calls*.  
- Assume we have access to the API’s streaming endpoint and a way to parse partial responses.

**2️⃣ Adopt a “stream‑parse‑emit” mental model**  
- Treat the stream as a sequence of tokens/bytes.  
- Maintain two buffers: one for raw text, another for accumulating a valid JSON fragment or tool‑call payload.  

**3️⃣ Step‑by‑step reasoning**  
1. **Listen to the stream token by token.**  
2. If the model emits `function_call` metadata (or a specific prefix like `{"tool":"name", ...}`), pause text accumulation and collect the full JSON payload until closing braces or end marker.  
3. Validate the JSON fragment; if malformed, keep buffering until it becomes syntactically complete.  
4. Once valid, *emit* the tool call to your executor, then reset the buffer for subsequent content.  
5. For plain text, forward tokens immediately (or batch them).  

**4️⃣ Avoid common pitfalls**  
- Don’t assume a single token equals a full JSON object; partial braces break parsing.  
- Be wary of overlapping tool calls—ensure you don’t start a new call before the previous one finishes.  
- Remember that streaming can deliver line‑breaks or whitespace that must be preserved for readability.

**5️⃣ Sanity‑check & communicate**  
- Log state transitions: “Text buffer → ToolCall buffer” to trace issues.  
- Test with edge cases: nested JSON, abrupt connection drops, and malformed payloads.  
- Explain the flow to stakeholders: “We stream tokens, detect tool markers, parse until complete, then execute.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
