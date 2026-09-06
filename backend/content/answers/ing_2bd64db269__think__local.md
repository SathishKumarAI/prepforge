---
qid: ing_2bd64db269__think__local
question: How should tool errors be surfaced to the model?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 188
output_tokens: 407
total_tokens: 595
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T05:33:34-05:00'
sources: []
---

**1️⃣ Clarify the goal & assumptions**  
- *Goal*: Decide how a downstream system (e.g., chatbot) should present tool‑execution failures back to the LLM so it can recover or ask for clarification.  
- *Assumptions*: The LLM receives structured JSON from the tool; errors are non‑critical (the user may still want an answer); we have control over prompt framing and post‑processing.

**2️⃣ Adopt a “fail‑fast + context” mental model**  
Treat each tool call as an atomic request that can either succeed or fail. When it fails, surface the failure **explicitly** but keep enough context (original intent, relevant inputs) so the LLM can decide on next steps.

**3️⃣ Step‑by‑step reasoning**  
1. Detect error via a status flag in the tool’s JSON response.  
2. Extract human‑readable error message and any diagnostic code.  
3. Construct a concise system instruction: “The tool returned an error: *[message]*. Your task is to…”.  
4. Append minimal context (e.g., the original user query or the prompt that triggered the call).  
5. Optionally offer fallback options (“try again”, “ask for clarification”).

**4️⃣ Avoid common traps**  
- Don’t hide errors behind a generic “unknown error” phrase; the model can’t learn from vague signals.  
- Don’t overload the prompt with raw stack traces—too noisy.  
- Don’t let the LLM assume success; always flag failure explicitly.

**5️⃣ Sanity‑check & communicate**  
Run a quick test: feed the constructed message to the LLM and see if it proposes a retry or clarifying question. If not, tighten the wording. Explain to stakeholders that this pattern improves robustness by making failures transparent and actionable for the model.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
