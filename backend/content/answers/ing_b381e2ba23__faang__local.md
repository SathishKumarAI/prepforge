---
qid: ing_b381e2ba23__faang__local
question: 'Explain: You inherit an 800-line pipeline script from a previous deployment.
  It''s slow and occasionally produces wrong numbers. The original author is gone.
  Go.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 253
output_tokens: 488
total_tokens: 741
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:41:18-05:00'
sources: []
---

**Clarify**

> *What exactly is “slow” (latency, throughput?)*  
> *Which metrics are wrong—output values or intermediate states?*  
> *How often does the failure occur and under what load?*  
> *Is this a batch job, streaming pipeline, or multi‑stage ETL?*  
> *What technologies/libraries/frameworks are involved (Python/Java, Spark, Airflow, etc.)?*  

**Approach**

1. **Reproduce** the issue locally with a small dataset.  
2. **Instrument**: add timestamps and logs around every stage to locate bottlenecks.  
3. **Validate** correctness by comparing against known good outputs or unit tests.  
4. **Refactor incrementally**—split the monolithic script into modular, testable functions.  
5. **Profile** CPU/memory usage; identify hot spots (e.g., nested loops, expensive I/O).  

**Depth**

- Use a profiler (cProfile/line_profiler for Python) to quantify time per function.  
- Replace O(n²) patterns with vectorized operations or Spark DataFrame APIs where possible.  
- Cache intermediate results that are reused; avoid recomputing the same join multiple times.  
- Ensure deterministic behavior: seed random generators, avoid in‑place mutations that depend on order.  
- Add unit tests for each refactored component and regression tests against a golden dataset.  

**Edge Cases**

- Empty or null inputs causing division by zero or type errors.  
- Large cardinality columns leading to memory exhaustion.  
- Race conditions if the script is run concurrently (e.g., shared temp files).  
- Data drift: schema changes that silently alter join semantics.

**Optimize & Communicate**

- Present a **bottleneck heatmap** and a list of optimizations with expected speed‑ups.  
- Show before/after runtimes in a table; quantify correctness improvements via test coverage.  
- Highlight trade‑offs (e.g., caching increases memory usage but halves runtime).  
- Explain how modularization improves maintainability, enabling future contributors to avoid “inherited bugs.”  

This structured process demonstrates clear communication, deep technical insight, and a data‑driven approach—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
