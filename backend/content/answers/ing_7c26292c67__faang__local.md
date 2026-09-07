---
qid: ing_7c26292c67__faang__local
question: 'Explain: Types of Guardrails — GitHub - NVIDIA-NeMo/Guardrails: NeMo Guardrails
  is an open-source toolkit for easily adding programmable guardrails to LLM-based
  conversational systems. \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 268
output_tokens: 548
total_tokens: 816
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:32:55-05:00'
sources: []
---

**Clarify**  
You’re asking about the *types of guardrails* in NVIDIA‑NeMo’s Guardrails toolkit—i.e., how the library enforces safety, compliance, and intent control in LLM‑based chat systems. I’ll assume you want an overview of the main categories (policy enforcement, content filtering, intent routing) and a quick glimpse at their implementation.

**Approach**  
1. List each guardrail type.  
2. Explain its purpose and typical API hooks.  
3. Note how they compose in a pipeline.  
4. Touch on performance and extensibility.

**Depth**  

| Guardrail | What it enforces | Key components | Typical usage |
|-----------|-----------------|----------------|---------------|
| **Policy Enforcement** | Legal/ethical rules (e.g., no hate speech, no disallowed content). | *PolicyEngine* + JSON policy files; matches against token‑level or chunked text. | Load at init; call `enforce_policy(text)` before reply. |
| **Content Filtering** | Sensitive data leakage, profanity, or user‑specified blacklists. | Regex/ML classifiers wrapped in *FilterModule*. | Apply post‑generation to strip or redact tokens. |
| **Intent Routing / Dialogue Management** | Directing conversation flow (e.g., FAQ vs. open‑domain). | Intent classifier + slot filler; triggers *RouteHandler* that swaps LLM prompts. | Use `route_intent(text)` to pick a sub‑prompt or fallback policy. |
| **Safety Post‑processing** | Mitigating hallucinations, disallowed claims. | *Self‑consistency* checks, sanity‑score thresholds. | Wrap final answer in `safety_postprocess(answer)`. |

These modules are composed as a middleware stack: input → intent router → policy engine → content filter → output.

**Edge Cases**  
- Over‑filtering may suppress legitimate answers.  
- Policy conflicts (two rules disallow same phrase).  
- Latency spikes if each guard is run sequentially on long text.  

Test by feeding adversarial prompts, measuring false positives/negatives, and profiling per‑module latency.

**Optimize & Communicate**  
- Batch policy checks to reduce token overhead.  
- Cache intent predictions for repeated user turns.  
- Expose a simple decorator API (`@guarded`) so developers can sprinkle guardrails without boilerplate.  

Explain that NeMo Guardrails is intentionally modular, allowing teams to plug in custom policies or replace the default ML models, striking a balance between safety and developer flexibility.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
