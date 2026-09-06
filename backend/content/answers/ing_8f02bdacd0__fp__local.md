---
qid: ing_8f02bdacd0__fp__local
question: Eval suites are slow, cost real money, and are noisy. How do you put one
  in CI without making everyone hate you?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 185
output_tokens: 467
total_tokens: 652
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:09:24-05:00'
sources: []
---

### Why the problem exists

Evaluation suites for AI models are **expensive** because they run many large‑batch inference jobs on GPU clusters; they are **slow** because each job must load the full model and data pipeline; and they are **noisy** due to stochastic training dynamics, nondeterministic hardware scheduling, and variable queue times. When you put such a suite in CI, every commit triggers hours of billable compute and flakey failures that frustrate developers.

### First‑principles solution

1. **Decompose the cost into *essential* vs. *redundant***.  
   - *Essential*: sanity checks (shape, memory usage), unit tests on a small synthetic dataset, and a single representative inference run with a fixed random seed.  
   - *Redundant*: full‑scale performance benchmarks that can be run offline.

2. **Cache the heavy components**.  
   - Store the pre‑compiled model binaries and any large data artifacts in a content‑addressable cache (e.g., GitHub Actions artifact store).  
   - On subsequent runs, only rebuild if the source or hyperparameters change; otherwise reuse the cached artefacts.

3. **Parallelize intelligently**.  
   - Run the *essential* tests on cheap CPU runners and reserve GPU runners for the *redundant* part in a separate workflow that is triggered less frequently (e.g., nightly or on release).

4. **Quantify noise and filter it**.  
   - Record multiple runs of each essential test, compute confidence intervals, and fail only if the interval exceeds an acceptable threshold.  
   - This turns random jitter into a statistically meaningful metric.

### Non‑obvious insight

Most teams treat CI as “run everything now.” The deeper principle is **separation of concerns**: CI should guarantee *functional correctness* quickly, while *performance regression* can live in a slower, more isolated pipeline. By treating the heavy benchmarks as an orthogonal optimization loop rather than a core test, you keep developers happy and still catch costly regressions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
