---
qid: ing_2bd64db269__faang__local
question: How should tool errors be surfaced to the model?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 465
total_tokens: 697
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:24:48-05:00'
sources: []
---

**Clarify**  
We’re asked how a system should surface *tool‑execution* errors back into an LLM’s reasoning pipeline.  
Assumptions I’d confirm:  
1. The model can receive structured feedback (e.g., JSON).  
2. Tools may fail in multiple ways—runtime exceptions, timeouts, or semantic mismatches.  
3. The model must decide whether to retry, fallback, or ask for clarification.

**Approach**  
1. **Standardize error payloads**: each tool returns `{status, code, message, context}`.  
2. **Embed error into the prompt**: prepend a concise “Tool Error” section so the LM sees it as part of its memory.  
3. **Define handling policies**: retry‑able codes (e.g., 429), non‑retryable (semantic errors), and user‑facing fallbacks.  
4. **Use a small internal state machine** to track attempts per tool.

**Depth**  
- *Error payload*:  
```json
{
  "status":"FAIL",
  "code":504,
  "message":"Gateway timeout while fetching weather data",
  "context":{"tool":"weather_api","attempt":2}
}
```
- Prompt injection:  
```
[Tool Error] weather_api failed (504): Gateway timeout. Attempt 2/3.
What should we do next?
```
The LM can now choose “retry” or “use cached data.”  
Complexity is O(1) per error; no extra latency beyond the tool call.

**Edge Cases**  
- Silent failures (no payload).  
- Malformed JSON from a buggy tool.  
- Infinite retry loops—cap attempts and trigger fallback logic.  
Test by mocking tools to emit each failure type.

**Optimize & Communicate**  
- Cache recent successful results to avoid repeated retries.  
- Log errors with stack traces for post‑mortem.  
- Narrate the reasoning: “The tool returned a 504; since it’s retryable, I’ll attempt once more before offering cached data.” This keeps the dialogue transparent and aligns with FAANG expectations of structured problem solving and clear communication.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
