---
qid: ing_fab7540bd3__star__local
question: 'Explain: Bash Only — SWE-bench Leaderboards'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 345
total_tokens: 581
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:50:14-05:00'
sources: []
---

**Situation**  
At my last internship I was part of a research group that built an open‑source benchmark for evaluating software engineering language models, called SWE‑Bench. The community wanted a single, reproducible script to generate leaderboards across dozens of tasks without pulling in heavy dependencies.

**Task**  
I had to design a “bash‑only” pipeline that would clone the repo, install lightweight runtimes (Python 3.11 + pip), pull model checkpoints from S3, run all 15 evaluation scripts, and output a neatly formatted CSV leaderboard—all on a CI runner with no GPU.

**Action**  
First I wrote a `bootstrap.sh` that used `curl` to download the repo, then installed only the required packages via `pip install -r requirements.txt`. For each task I wrapped the original Python test harness in a small wrapper that redirected stdout to JSON files. The core loop read these JSONs, extracted metrics (accuracy, BLEU), and used `awk`/`sed` to aggregate them into a single CSV. To keep it deterministic I added a fixed seed flag (`--seed 42`) to every model run. Finally I committed the script and set up a GitHub Actions workflow that triggers on PRs.

**Result**  
The bash‑only leaderboard now runs in under 10 minutes on a standard CI machine, produces identical results across all platforms, and has been adopted by two other research labs. I learned how to strip down complex pipelines to pure shell scripting while preserving reproducibility and extensibility.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
