---
qid: ing_fb24ce4215__think__local
question: 'Q: With every AI lab shipping its own agent SDK (Claude Agent SDK, OpenAI
  Agents SDK, Google ADK), how do you avoid vendor lock-in?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 211
output_tokens: 421
total_tokens: 632
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T17:34:27-05:00'
sources: []
---

**1️⃣ Clarify the core issue and set assumptions**  
   - *Vendor lock‑in* means future work is tied to one provider’s APIs, data formats, or pricing.  
   - Assume you need to build agents that can run on any of Claude, OpenAI, Google, etc., but still use their advanced capabilities.

**2️⃣ Adopt a layered architectural model**  
   - *Domain layer*: business logic and agent “story” (states, goals).  
   - *Adapter layer*: thin wrappers translating domain calls to each vendor SDK.  
   - *Infrastructure layer*: deployment details (cloud, containers).  
   This mirrors hexagonal architecture or the Ports‑and‑Adapters pattern.

**3️⃣ Build a unified interface**  
   - Define your own `Agent` abstraction (`prompt()`, `respond()`, `get_state()`).  
   - Implement concrete adapters for each SDK that satisfy this contract.  
   - Use dependency injection so you swap adapters without touching core code.

**4️⃣ Avoid vendor‑specific features unless essential**  
   - Stick to the common subset of capabilities (e.g., LLM inference, memory).  
   - If a provider offers a unique tool, encapsulate it behind another adapter layer that can be dropped or replaced.

**5️⃣ Manage data & costs separately**  
   - Store prompts and logs in a neutral format (JSON/Parquet) outside vendor storage.  
   - Use abstraction for token counting to keep cost calculations portable.

**6️⃣ Sanity‑check with “what if” tests**  
   - Write unit tests that mock each adapter; ensure the same business logic passes all.  
   - Run integration tests switching adapters at runtime to confirm no hidden dependencies.

**7️⃣ Communicate clearly**  
   - Document the contract and mapping of vendor features.  
   - Keep an “adapter migration guide” so future teams know how to swap or add providers without rewriting core logic.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
