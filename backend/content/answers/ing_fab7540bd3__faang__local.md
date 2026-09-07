---
qid: ing_fab7540bd3__faang__local
question: 'Explain: Bash Only — SWE-bench Leaderboards'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 472
total_tokens: 705
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:22:54-05:00'
sources: []
---

**Clarify**  
The question asks why the *SWE‑Bench* leaderboard has a “Bash Only” track and what it evaluates. I’ll confirm that we’re talking about the benchmark for software‑engineering interview questions, not a general ML task, and that Bash scripts must solve each problem without external libraries.

**Approach**  
Explain the purpose of the track (to measure low‑level scripting skill), outline its constraints, and describe how performance is measured (runtime, memory, correctness). Then connect it to machine‑learning evaluation: data, metrics, leaderboard ranking.

**Depth**  
SWE‑Bench’s Bash Only track forces candidates to solve algorithmic problems using only shell utilities (`awk`, `sed`, `grep`, `sort`, etc.). Each problem is a small dataset (≤ 1 kB) and the evaluator runs a hidden test harness. Metrics are:
- **Correctness**: pass all tests (binary score 0/1 per problem).  
- **Efficiency**: execution time measured in milliseconds; faster scripts get higher points.  
- **Resource usage**: memory footprint is also logged, though less emphasized.  

The leaderboard aggregates scores across ~50 problems. A perfect Bash solution would earn 100 points; any failure drops the score linearly. This mirrors ML leaderboards where models are ranked by accuracy and inference speed.

**Edge cases**  
- Very large input files break the “≤ 1 kB” rule, causing runtime errors.  
- Non‑portable shell syntax (e.g., Bash‑specific globbing) may fail on strict POSIX shells used in evaluation.  
- External commands not listed in the whitelist trigger a hard failure.

**Optimize & communicate**  
Improvements could include allowing GNU extensions for speed or expanding problem size to test scalability. I’d explain that this track is valuable for interview prep because it trains candidates to think algorithmically with minimal tooling—an essential skill before moving to higher‑level ML frameworks. In an interview, I’d highlight the trade‑off between code brevity and readability, just as ML engineers balance model complexity against latency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
