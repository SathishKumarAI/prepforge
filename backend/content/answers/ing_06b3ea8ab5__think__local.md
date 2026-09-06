---
qid: ing_06b3ea8ab5__think__local
question: 'Q: A vendor says their model scores 90% on SWE-bench Verified. What questions
  do you ask before believing it predicts your coding-agent quality?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 209
output_tokens: 489
total_tokens: 698
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T03:10:01-05:00'
sources: []
---

**1️⃣ Clarify the claim & scope**

   - *What exactly is “90 % on SWE‑Bench Verified”?*  
     – Is it overall accuracy, pass‑rate for all tasks, or a specific subset?  
   - *Which version of the benchmark was used?*  
     – Did they run on the latest test set or an older release?  
   - *Assumption*: The vendor’s definition matches your use‑case (e.g., same language, problem size).

**2️⃣ Map the mental model to “coding‑agent quality”**

   - Treat the benchmark as a proxy for real‑world code generation.  
   - Recognize that SWE‑Bench measures correctness on curated problems; it may not capture style, maintainability, or integration issues your projects need.

**3️⃣ Step‑by‑step reasoning**

   1. **Reproduce**: Ask for a public evaluation script and data so you can run the same test locally.  
   2. **Inspect**: Request detailed results per task category (e.g., algorithmic vs. API usage).  
   3. **Compare**: Benchmark against other models you’re considering using the same setup.  
   4. **Stress‑test**: Run edge cases or domain‑specific tasks not in the benchmark to see if performance holds.

**4️⃣ Avoid common traps**

   - Don’t assume *high* benchmark score ⇒ *excellent* production quality; benchmarks can be gamed (overfitting, narrow scope).  
   - Beware of *data leakage*: if the model was trained on SWE‑Bench data, the score may be inflated.  
   - Ignore *post‑processing*: some vendors add hand‑crafted wrappers that boost scores but aren’t part of the core model.

**5️⃣ Sanity‑check & communicate**

   - Summarize your findings in a concise report: “Model X achieved 88 % on our subset, matching Y but lagging behind Z on API‑heavy tasks.”  
   - Highlight gaps: “No data on multi‑file projects; we need to test that.”  
   - Present this to stakeholders so they can weigh the benchmark against real‑world needs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
