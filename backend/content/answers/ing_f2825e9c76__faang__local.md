---
qid: ing_f2825e9c76__faang__local
question: How do you handle streaming when the model is emitting tool calls or structured
  JSON?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 456
total_tokens: 694
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:03:12-05:00'
sources: []
---

**Clarify**  
We’re asked how to stream a language‑model’s output when it emits either *tool calls* (e.g., “call API X”) or structured JSON (e.g., a response schema). Key assumptions:  
1. The model supports incremental token delivery via an event‑streaming API (OpenAI, Anthropic, etc.).  
2. The downstream consumer can parse partial tokens but needs full structures to act on them.  

**Approach**  
1. **Token‑level buffering** – keep a mutable string of all received tokens.  
2. **Delimiter detection** – for JSON, look for `{`/`[` start and matching `}`/`]` end; for tool calls, watch for a pre‑defined marker (“`tool_call:`”).  
3. **Incremental parsing** – run a lightweight parser (e.g., `json.JSONDecoder.raw_decode`) on the buffer whenever new tokens arrive; if it succeeds, emit the parsed object and reset the buffer.  

**Depth**  
- **JSON**: Use incremental JSON parsing to avoid re‑parsing from scratch. Complexity is O(n) per chunk with small constants.  
- **Tool calls**: Treat them as a simple line‑based protocol—once the marker appears, read until newline or closing tag. Once parsed, dispatch immediately.  

Edge cases include malformed JSON (partial token that later becomes valid), tool call syntax errors, and interleaved content. We guard by validating after each parse; if invalid, we keep buffering until a timeout or explicit error signal from the model.

**Optimize & Communicate**  
- **Back‑pressure**: If downstream is slow, pause the stream or buffer up to a threshold before dropping tokens.  
- **Parallelism**: For high‑throughput systems, run parsing in a separate thread so token ingestion stays unblocked.  
Explain that this design keeps latency low (first valid structure often appears after a few tokens) while guaranteeing correctness. This satisfies FAANG interviewers’ focus on clear communication, solid technical depth, and pragmatic edge‑case handling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
