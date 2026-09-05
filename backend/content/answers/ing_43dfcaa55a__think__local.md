---
qid: ing_43dfcaa55a__think__local
question: 'Q75: How do SWE-bench Verified and LiveCodeBench differ, and which matters
  more for evaluating a coding agent?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 203
output_tokens: 378
total_tokens: 581
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:05:15-05:00'
sources: []
---

**1. Clarify the ask & set assumptions**  
   - Identify what “SWE‑bench Verified” vs. “LiveCodeBench” actually refer to (benchmark suites, datasets, evaluation protocols).  
   - Assume the audience knows basic coding‑agent concepts but not the nuances of each benchmark.  

**2. Adopt a comparison framework**  
   - *Scope*: tasks covered (e.g., algorithmic problems vs. real‑world repo fixes).  
   - *Data source*: curated test cases vs. open‑source projects.  
   - *Evaluation metric*: pass rate, code quality metrics, human review.  

**3. Step‑by‑step reasoning**  
   1. List key attributes of SWE‑bench Verified (e.g., synthetic tests, automated grading).  
   2. Do the same for LiveCodeBench (real repos, GitHub PR simulation).  
   3. Contrast them on realism, coverage, and reproducibility.  
   4. Argue which dimension is more critical when judging a practical coding agent—usually real‑world applicability.  

**4. Avoid common pitfalls**  
   - Don’t conflate “verified” with “better”; it may mean higher quality data but less realistic.  
   - Resist the trap of treating one benchmark as definitive; highlight context dependence.  

**5. Sanity‑check & verbalise**  
   - Re‑state the core difference in plain terms (“Synthetic vs. real”).  
   - Summarise why realism (LiveCodeBench) often outweighs strict verification for practical deployment.  
   - End with a clear recommendation: “For evaluating a coding agent that will be used by developers, LiveCodeBench matters more.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
