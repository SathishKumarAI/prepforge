---
qid: ing_d175c93373__faang__local
question: What are the most common prompt anti-patterns you'd flag in a code review?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 477
total_tokens: 715
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:47:38-05:00'
sources: []
---

**Clarify**  
We’re reviewing a codebase that builds prompts for an LLM API. The goal is to spot *prompt anti‑patterns*—design choices that make the model behave unpredictably, waste tokens, or create security risks.

**Approach**  
1. Enumerate patterns (e.g., hard‑coded examples, over‑long prompts).  
2. Map each to a risk (bias, cost, inference latency).  
3. Suggest concrete refactors (parameterization, truncation, safety wrappers).

**Depth**  

| Anti‑pattern | Why it hurts | Fix |
|--------------|--------------|-----|
| **Hard‑coded “example‑first” prompts** | Inflates token usage; brittle to schema changes. | Use a template with placeholders and load examples from a config or database. |
| **Unbounded user input concatenated verbatim** | Injection risk, prompt‑jailbreaks, unpredictable token counts. | Sanitize, escape, and enforce length limits before insertion. |
| **Re‑generating the same prompt per request** | O(n) cost; inconsistent context if built inline. | Cache a base prompt and append only dynamic parts. |
| **Verbose “explain step‑by‑step” instructions** | Wastes tokens; may confuse the model. | Keep prompts concise, rely on post‑processing for explanations. |
| **No token budgeting** | API cost spikes when prompts grow unexpectedly. | Measure length before call and truncate or split. |

**Edge cases**  
- Empty or null user input → fallback prompt.  
- Multilingual content → ensure encoding doesn’t inflate tokens.  
- Rapidly changing schema → template regeneration triggers.

**Optimize & communicate**  
Explain to the team how each change reduces token cost (≈ 10‑30%) and improves reliability. Provide a lint rule that flags hard‑coded strings in prompt functions, and a unit test that asserts max token length per request. This keeps prompts safe, efficient, and maintainable—exactly what FAANG teams expect.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
