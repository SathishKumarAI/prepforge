---
qid: ing_f7e7cbb4fc__think__local
question: How would you build an abstraction over multiple LLM providers, and what
  breaks?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 572
total_tokens: 766
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T17:21:28-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
   * Define “multiple LLM providers” (OpenAI, Anthropic, Azure, open‑source).  
   * Assume we want a single API surface for calling any model, handling token limits, pricing, latency, and safety checks.  
   * Decide whether to support chat or completion semantics only, and if we’ll expose fine‑tuning / embeddings.

**2️⃣ Mental model & framework**  
   * **Adapter pattern**: each provider gets its own adapter translating the generic request into the provider’s SDK/HTTP contract.  
   * **Strategy pattern** for selecting a provider (round‑robin, cost‑based, latency‑aware).  
   * **Decorator layer** to inject cross‑cutting concerns (logging, retry, circuit breaker).  
   * **Policy engine** (e.g., Open Policy Agent) to enforce safety and compliance.

**3️⃣ Step‑by‑step reasoning**  
   1. Define a canonical request/response DTO (`PromptRequest`, `LLMResponse`).  
   2. Implement adapters: map DTO → provider’s request, handle auth & headers.  
   3. Create a registry of adapters; expose a factory that picks one based on config or policy.  
   4. Wrap calls in retry logic with exponential back‑off; log latency and errors.  
   5. Add a safety filter (prompt sanitizer + output moderation) before/after the provider call.  
   6. Build metrics collectors for cost, token usage, SLA adherence.  
   7. Expose unit tests that mock each adapter to validate mapping logic.

**4️⃣ Common traps & wrong turns**  
   * **Hard‑coding endpoints** → break when providers change URLs or auth flows.  
   * **Assuming identical behavior** → e.g., token counting differs; embed a tokenizer per provider.  
   * **Ignoring rate limits** → over‑retries cause bans.  
   * **Mixing sync/async** → leads to thread‑pool exhaustion.  
   * **Over‑engineering the policy layer** → adds latency; start simple and iterate.

**5️⃣ Sanity checks & communication**  
   * Run integration tests against a sandbox for each provider.  
   * Verify that switching adapters doesn’t alter the public API surface.  
   * Present the design as: “We expose `invokeLLM(prompt)`; under the hood, an adapter translates it to the chosen provider’s SDK, a safety layer sanitizes inputs/outputs, and we collect metrics for cost & latency.”  
   * Highlight trade‑offs: more adapters = more maintenance, but you gain flexibility and resilience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
