---
qid: ing_f503d0fea8__faang__local
question: How do you get reliable structured output (JSON) from a model, and what
  happens when it fails anyway?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 428
total_tokens: 672
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:09:39-05:00'
sources: []
---

**Clarify**  
You want a deterministic JSON payload from an LLM while keeping the system robust if the model slips into free‑form text or malformed syntax. Key assumptions:  
* The model is stateless and can be prompted repeatedly.  
* You control the prompt, token budget, and have post‑processing hooks.  
* Failure modes are acceptable but must not crash downstream services.

**Approach**  
1. **Prompt engineering** – explicitly ask for a JSON schema (e.g., “Respond only in the following JSON format: …”).  
2. **Post‑validation** – parse with a strict JSON parser; on error, trigger a fallback.  
3. **Fallback strategy** – either retry with a stricter prompt or fall back to a safe default/empty structure.  
4. **Monitoring & alerts** – log parsing failures and model confidence scores.

**Depth**  
- Use *structured completion* APIs (OpenAI’s `json` response_format) that enforce schema validation at the token level.  
- Complexity: O(n) for parsing, negligible overhead compared to token cost.  
- Trade‑off: stricter prompts reduce creative flexibility but increase reliability; optional confidence thresholds can decide when to retry.

**Edge Cases**  
- Model returns partial JSON (e.g., missing closing brace).  
- Unexpected data types or extra fields.  
- Extremely large outputs that hit size limits.  
Test with unit cases for each scenario and simulate token‑limit boundaries.

**Optimize & Communicate**  
Improve reliability by:  
* Adding a “stop” sequence (`\n---END---`) to signal completion.  
* Using a lightweight schema validator (e.g., `pydantic`) for richer type checks.  
Explain the flow in interviews: “I first constrain the model, then validate, and finally have a graceful degradation path.” This demonstrates structured thinking, clear communication, and depth—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
