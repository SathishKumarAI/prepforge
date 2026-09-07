---
qid: ing_f7e7cbb4fc__faang__local
question: How would you build an abstraction over multiple LLM providers, and what
  breaks?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 478
total_tokens: 716
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:16:34-05:00'
sources: []
---

**Clarify**  
We need a unified API that lets us pick an LLM provider (OpenAI, Anthropic, Cohere, etc.) and swap them without changing client code. Assumptions:  
* All providers expose similar capabilities (chat/completion, embeddings).  
* We’ll use HTTP/JSON endpoints; no custom SDKs required.  
* Credentials are stored securely per provider.

**Approach**  
1. **Define a common interface** (`LLMClient`) with methods like `complete(prompt)`, `embed(text)`.  
2. **Provider adapters** that implement this interface, translating the generic request into the provider’s specific payload and parsing the response.  
3. **Factory/Registry** to register providers and instantiate the right adapter based on a config key.  
4. **Circuit breaker / retry layer** to handle transient errors uniformly.  
5. **Metrics & logging** per provider for observability.

**Depth**  
* Adapter uses `requests` or an async HTTP client; timeouts are configurable.  
* Error handling maps provider‑specific error codes to a common enum (`LLMError`).  
* Rate‑limit logic: read the “Retry-After” header, back off exponentially.  
* Complexity: O(1) for request dispatch; adapters add negligible overhead.  

**Edge Cases**  
* Provider changes schema → adapter breaks (needs versioning).  
* Credentials missing or revoked → fail fast with clear error.  
* Inconsistent token limits or pricing tiers → hidden costs if not checked.  
* Network partitions: fallback to a cached response or secondary provider.

**Optimize & Communicate**  
Add a **dynamic discovery layer** that queries each provider’s `/v1/models` endpoint at startup, caching supported capabilities so the client can adapt (e.g., use GPT‑4 only when available). Explain trade‑offs: more API calls vs. higher resilience. Narrate by walking through “When I call `complete()`, the factory picks the OpenAI adapter, which formats the request, sends it, and normalizes the response back to my app.” This showcases clear problem‑solving, structured design, and depth expected in a FAANG interview.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
