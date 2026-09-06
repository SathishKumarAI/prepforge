---
qid: ing_7940daa926__think__local
question: You want to switch model providers and your prompts break. Why, and how
  would you have made them portable?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 200
output_tokens: 477
total_tokens: 677
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T09:01:46-05:00'
sources: []
---

**1. Clarify the problem & assumptions**  
   - *What does “prompts break” mean?*  Likely a syntax or token‑limit mismatch (e.g., GPT‑4 uses `{"role":"user","content":...}` vs older OpenAI API).  
   - *Which providers are involved?*  e.g., OpenAI → Anthropic, Cohere, Azure.  
   - Assume you control the prompt generation code but not the provider’s interface.

**2. Mental model / framework**  
   - Treat prompts as *data* that must be serialized into a provider‑specific request format.  
   - Use an **adapter pattern**: one canonical internal representation → provider adapters.  
   - Keep prompt logic separate from serialization (single responsibility).

**3. Step‑by‑step reasoning**  
   1. Identify all provider‑specific elements: token limits, system/user/assistant roles, temperature, max tokens, stop sequences.  
   2. Define a **canonical prompt schema** (e.g., `{role: "user", text: "..."};` plus metadata).  
   3. Implement adapters that map the canonical schema to each provider’s API payload.  
   4. Abstract token counting via a library or provider‑agnostic estimator.  
   5. Wrap calls in a factory that selects the adapter at runtime.

**4. Common traps to avoid**  
   - Hard‑coding role names (`system`, `assistant`) that some providers don’t support.  
   - Ignoring differences in stop token syntax (e.g., `"stop": ["\n"]` vs `"stop_sequences"`).  
   - Overlooking provider‑specific defaults for temperature or presence penalty.  
   - Mixing prompt content with request parameters, making changes hard to track.

**5. Sanity‑check & communicate**  
   - Run a unit test that sends the same canonical prompt to all adapters and verifies identical semantic output (within tolerance).  
   - Document the adapter interface so future developers know which fields are required per provider.  
   - Communicate the approach in a brief slide: “Canonical prompt → Adapter pattern → Provider‑specific payload.” This shows you’ve isolated change points and made prompts portable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
