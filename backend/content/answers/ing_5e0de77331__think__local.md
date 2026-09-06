---
qid: ing_5e0de77331__think__local
question: How does prompt injection show up in a mobile app, and what does the client
  own?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 196
output_tokens: 450
total_tokens: 646
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T07:13:16-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
- *Prompt injection* here means malicious input that tricks an LLM inside a mobile app into misbehaving (e.g., leaking data or executing unintended actions).  
- Assume the app uses a remote‑hosted model (API) or an on‑device model, and the client is the mobile developer/owner of the code.  

**2️⃣ Mental model / framework**  
- Treat the mobile app as *client* + *service* layers:  
  - **Client side**: UI, local data store, request builder.  
  - **Service side**: LLM API or on‑device engine.  
- Prompt injection attacks target the *input → prompt construction → model execution* chain.  

**3️⃣ Step‑by‑step reasoning**  
1. Identify all user‑controllable inputs that feed into a prompt (text fields, voice, camera OCR).  
2. Map where those inputs are concatenated or templated before being sent to the LLM.  
3. Check if any input can alter control flow (e.g., adding “/system: …”).  
4. Evaluate if the app sanitizes or escapes special tokens (quotes, delimiters).  
5. Determine whether the model is “prompt‑only” (no hidden instructions) or uses system prompts that could be overridden.  

**4️⃣ Common traps to avoid**  
- Assuming on‑device models are immune; they can still misbehave if prompts are manipulated.  
- Overlooking indirect inputs (e.g., file names, metadata).  
- Believing that API keys alone prevent injection—keys only authenticate, not sanitize content.  

**5️⃣ Sanity‑check & communicate**  
- Run a quick “prompt fuzz” test: feed malformed strings and observe model output.  
- Document each input path, sanitization step, and the security boundary.  
- Communicate findings to stakeholders by summarizing: *“All user‑editable fields that become part of prompts must be escaped or validated; otherwise the client (app) is exposed to prompt injection.”*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
