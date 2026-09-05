---
qid: ing_d7024268df__eli5__local
question: 'Explain: Reduce Global Dependencies — 10 Good Coding Principles to Improve
  Code Quality'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 346
total_tokens: 509
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:15:11-05:00'
sources: []
---

Imagine a kitchen where every recipe book is glued to the wall and everyone must walk over to read it. If one book gets stuck or someone rearranges the wall, all cooks are affected—this is like *global dependencies* in code: a single change can ripple through everything.

**10 simple rules that keep your “kitchen” tidy**

1. **Keep ingredients local** – put variables inside functions so they don’t spill over.  
2. **Use helpers (utility modules)** – small, focused files instead of one giant script.  
3. **Pass the right tools as arguments** – don’t let a function fetch data on its own; give it what it needs.  
4. **Return only what’s needed** – avoid returning large hidden objects that other parts will touch later.  
5. **Avoid hard‑coded paths** – use configuration files so changes stay isolated.  
6. **Don’t rely on global flags** – pass mode (train/test) explicitly.  
7. **Wrap side effects in context managers** – e.g., file handles, GPU allocation.  
8. **Write unit tests that mock dependencies** – ensures a change here doesn’t break elsewhere.  
9. **Document public interfaces clearly** – others know exactly what they can use.  
10. **Review for accidental imports** – remove unused or circular imports that create hidden links.

By treating each function like a self‑contained dish, you keep the whole codebase stable, easier to understand, and ready for future tweaks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
