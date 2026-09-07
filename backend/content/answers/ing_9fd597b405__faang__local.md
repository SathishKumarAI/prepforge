---
qid: ing_9fd597b405__faang__local
question: Where does prompt injection touch the frontend, and what can the client
  actually defend against?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 511
total_tokens: 750
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:55:35-05:00'
sources: []
---

**Clarify**  
Prompt injection occurs when an attacker manipulates user‑supplied data that ends up inside a prompt sent to an LLM. The “frontend” is the boundary where the client receives or displays model output and may supply input back to the server. I’ll assume the stack: browser → API gateway → backend → LLM, with no sandboxing of prompts on the client.

**Approach**  
1. Identify all vectors where user data reaches the prompt (form fields, URL params, JSON payloads).  
2. Distinguish *visible* injection (affecting UI) from *hidden* injection (altering downstream logic).  
3. Enumerate mitigations that can be applied on the client: sanitization, whitelisting, output filtering, and defensive UI patterns.

**Depth**  
- **Input sanitization**: escape or strip control characters that can alter prompt syntax (`"`, `{}`, `\n`).  
- **Prompt shaping**: prepend a fixed system message and wrap user input in delimiters (“User says: …”) so the LLM’s instruction hierarchy resists takeover.  
- **Output filtering**: run the response through a regex or policy engine that blocks disallowed content before rendering.  
- **Rate limiting / throttling**: prevent automated injection attempts from flooding the UI.  
These steps keep the client in control of what reaches the model and what is displayed, even if the backend can’t fully trust every prompt.

**Edge cases**  
- Malicious payloads that embed hidden Unicode or zero‑width characters bypass naive escaping.  
- Multi‑step workflows where early sanitized data feeds later prompts—attackers might re‑inject via chained requests.  
- Client‑side caching: stale, malicious responses could be served if not invalidated.

**Optimize & communicate**  
Explain that the frontend’s role is to *shape* and *sanitize* inputs/outputs; it cannot fully defend against sophisticated LLM misbehavior but can reduce surface area. Present a layered defense diagram (input → sanitization → prompt shaping → output filtering) and note trade‑offs: stricter sanitization may degrade UX, while aggressive filtering might block legitimate content. This structured narrative aligns with FAANG expectations for clarity, depth, and pragmatic trade‑off discussion.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
