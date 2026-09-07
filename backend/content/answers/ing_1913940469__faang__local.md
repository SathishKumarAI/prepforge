---
qid: ing_1913940469__faang__local
question: How would you evaluate an agentic coding model on SWE-bench and TAU-bench
  style benchmarks without fooling yourself?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 540
total_tokens: 787
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:43:15-05:00'
sources: []
---

**Clarify**

You’re asked to *evaluate a self‑driving code generator* (an “agentic” model) on two benchmark suites: **SWE‑Bench** (software‑engineering tasks from GitHub, requiring correct function implementation) and **TAU‑Bench** (tests for algorithmic correctness).  
Key assumptions I’d confirm:

1. The model can receive the task prompt and return a single source file or patch.  
2. Evaluation is deterministic—no stochastic sampling in the final submission.  
3. Benchmarks provide ground‑truth tests and execution environments.

---

**Approach**

1. **Create an isolated evaluation harness** that runs each generated solution in a sandbox, captures stdout/stderr, exit codes, and test coverage.  
2. Run the same harness on *baseline* solutions (e.g., human‑written or existing models) to confirm it works.  
3. Use a **strict pass/fail metric**: all tests must succeed with no side effects.  
4. Log raw outputs, diffs, and resource usage for audit.

---

**Depth**

- For each benchmark task, generate the solution once (no random restarts).  
- Execute in Docker/Firecracker containers to isolate environment.  
- Capture metrics: **accuracy** (% tasks passing), **runtime**, **memory**, and **code quality** (e.g., cyclomatic complexity).  
- Store provenance: prompt version, model checkpoint, seed.

Complexity: \(O(T \times E)\) where \(T\) is number of tasks and \(E\) the average execution time per task.  
Trade‑offs: deterministic runs reduce variance but may miss rare bugs; sandboxing adds overhead but prevents self‑fooling.

---

**Edge Cases**

- Tasks with hidden tests or nondeterministic outputs (e.g., random seeds).  
- Solutions that crash silently or hang—time out after a safe limit.  
- Models that “cheat” by embedding benchmark knowledge; detect via fingerprint analysis of code patterns.

Test these by injecting malformed inputs, varying time limits, and comparing against known cheat‑patterns.

---

**Optimize & Communicate**

After the baseline run, iteratively refine prompt engineering or fine‑tuning until accuracy plateaus.  
Report results in a dashboard: bar charts per benchmark, heatmaps of failure modes, and narrative on any systematic biases found.  

This structured pipeline guards against self‑fooling by ensuring reproducibility, strict pass/fail criteria, and transparent logging—exactly the rigor expected at FAANG interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
