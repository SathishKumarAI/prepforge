---
qid: ing_f79aeb6c51__faang__local
question: What Are Code-Based Evals? — Ai Evals Comprehensive Study Guide
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 621
total_tokens: 857
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:15:53-05:00'
sources: []
---

**Clarify**  
You’re asking about *code‑based evals*—the automated tests that run user‑written code against hidden inputs to gauge correctness, performance, and edge‑handling in an AI evaluation framework (e.g., OpenAI’s Eval). I’ll assume:  

- The eval runs on a sandboxed environment.  
- It measures both functional output and resource usage.  
- It supports multiple languages.

**Approach**  
1. Explain what a code‑based eval is.  
2. Describe the typical workflow (submission → compilation → execution → scoring).  
3. Highlight key metrics and constraints.  
4. Mention common pitfalls and mitigation strategies.

**Depth**  

| Component | What it does |
|-----------|--------------|
| **Input Generation** | Hidden test cases (synthetic or real) that cover edge, average, and worst‑case scenarios. |
| **Sandboxing** | Isolated container with CPU/memory limits to prevent malicious code from affecting the host. |
| **Compilation/Interpretation** | Supports multiple runtimes; errors are captured and reported back. |
| **Execution & Timing** | Runs the solution under a strict time budget; any overflow triggers failure. |
| **Output Validation** | Diff‑based comparison, tolerance thresholds (e.g., for floats), or custom validators. |
| **Scoring** | Weighted sum of correctness, speed, and resource efficiency; often with penalty curves for over‑optimization hacks. |

Complexity:  
- **Time**: O(T × C) where *T* is number of test cases and *C* the average cost per run.  
- **Space**: Linear in max memory allocated plus sandbox overhead (~50 MB).  

Trade‑offs: Faster runtimes (e.g., compiled languages) give more throughput but may obscure language‑specific bugs; slower interpreters are safer but limit scalability.

**Edge Cases**  

| Issue | What breaks it | Mitigation |
|-------|----------------|------------|
| Infinite loops | CPU quota exhausted | Strict timeouts + kill signal |
| Memory leaks | OOM kills sandbox | Enforce memory caps, monitor allocation |
| Non‑determinism | Flaky tests | Use seedable RNGs or deterministic validators |
| Language incompatibility | Missing runtime | Provide minimal language support or fallbacks |

**Optimize & Communicate**  

- **Parallelization**: Run multiple submissions concurrently using a job queue; reduces wall‑clock time.  
- **Caching**: Memoize compilation artifacts for repeated test runs.  
- **Feedback Loop**: Aggregate failure modes to improve hidden case coverage.

When explaining, start with the high‑level purpose (“to objectively measure AI code quality”), then drill into the workflow, and finish by discussing robustness. Keep language concise (≈200 words) and structure it so interviewers see clear problem understanding, a solid plan, technical depth, edge‑case awareness, and optimization insight.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
