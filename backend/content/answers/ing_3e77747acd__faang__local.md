---
qid: ing_3e77747acd__faang__local
question: 'Q: Why is "Prompt Sanitization" harder than "SQL Sanitization"?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 475
total_tokens: 713
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:09:20-05:00'
sources: []
---

**Clarify**  
The interviewer asks why sanitizing a user‑supplied prompt for an LLM is more difficult than escaping SQL input. I’ll confirm the scope: *prompt* = natural language text fed to a generative model; *SQL* = structured query string executed by a DBMS. Assume we care about preventing injection of malicious intent or unwanted content, not just syntax errors.

**Approach**  
1. List attack vectors for each domain.  
2. Contrast the underlying data models and safety guarantees.  
3. Highlight practical mitigation gaps.

**Depth**  
| Domain | Attack surface | Underlying model | Mitigation difficulty |
|--------|----------------|------------------|-----------------------|
| SQL | Injection of arbitrary statements, schema changes | Relational algebra, deterministic parser | Escaped by prepared statements; syntax is strict. |
| Prompt | Coercing the LLM into harmful outputs (e.g., disallowed content, policy violations) or leaking private data | Probabilistic language model with no explicit safety state | No hard boundary; prompt can steer sampling in subtle ways; context length limits visibility of constraints. |

- **Expressiveness**: Prompts are free‑form and can embed complex instructions, whereas SQL has a fixed grammar.  
- **Side effects**: An LLM may generate code or policy‑violating text even if the prompt looks benign; small wording changes alter probability mass non‑linearly.  
- **Feedback loop**: LLMs often use self‑generated content as future input (chain of thought), amplifying errors—SQL lacks this recursive effect.

**Edge Cases**  
*Obfuscated prompts* that trigger jailbreak behavior, *prompt chaining* that bypasses filters, *model updates* changing token semantics. Test by fuzzing prompt permutations and monitoring policy compliance metrics.

**Optimize & Communicate**  
Explain that mitigation requires layered defenses: input normalization, token‑level filters, reinforcement learning from human feedback (RLHF), and runtime safety nets (e.g., content classifiers). Contrast with the relatively deterministic “escape” strategy in SQL. Conclude by stressing that prompt sanitization is a moving target because language models evolve, whereas SQL injection fixes are largely static once the parser is hardened.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
