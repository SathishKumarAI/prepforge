---
qid: ing_adf53913e2__fp__local
question: 'Explain: Explain passed by value and passed by reference.'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 406
total_tokens: 577
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:14:22-05:00'
sources: []
---

**Why a language must decide “value” vs. “reference”**

At its core, a programming language is a set of rules that maps *code* to *state changes*.  
When a function receives an argument, the language has to choose how to expose that state to the caller:

1. **Passed by value** – The callee gets a *fresh copy* of the data.  
   - *Why it works:* copying guarantees that any mutation inside the function cannot influence the caller’s variable.  
   - *When it is needed:* for immutable primitives (e.g., integers) or when safety and referential transparency are paramount.

2. **Passed by reference** – The callee receives an *alias* to the same memory location.  
   - *Why it works:* the function can read or mutate the original data, so changes persist after return.  
   - *When it is needed:* for large structures where copying would be prohibitively expensive, or when shared state is intentional (e.g., in-place algorithms).

**Deeper principle**

Both choices are manifestations of *information flow* control:  

- **Value passing** enforces a *no‑side‑effect* channel; information can only flow from caller to callee.  
- **Reference passing** allows a bidirectional channel, enabling the callee to send back updates.

**Non‑obvious insight**

Most people overlook that *copy‑on‑write* (CoW) blurs the line: a language may initially pass by reference but automatically clone only when a mutation occurs. This yields value‑like safety while preserving reference efficiency—an elegant compromise rooted in lazy evaluation and memory optimization.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
