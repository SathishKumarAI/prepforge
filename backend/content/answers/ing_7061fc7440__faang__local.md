---
qid: ing_7061fc7440__faang__local
question: What Are Code-Based Evals? — Ai Evals Complete Guide Langwatch Langfuse
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 510
total_tokens: 750
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:04:30-05:00'
sources: []
---

## 1️⃣ Clarify  
**Question:** *What are code‑based evaluations (code‑based evals) in the context of AI?*  
I’ll assume you’re referring to automated test suites that execute user‑supplied code—common in language‑model evaluation platforms like Langwatch or Langfuse—to measure correctness, efficiency, and robustness.  

**Assumptions to confirm:**  
- Evaluations run sandboxed to prevent malicious code.  
- The target is a deterministic function or small program.  
- Outputs are compared against reference answers or expected behavior.

## 2️⃣ Approach  
1. **Define the evaluation protocol** (input format, execution limits).  
2. **Build a secure sandbox** (Docker/Firecracker).  
3. **Capture stdout/stderr and resource usage**.  
4. **Compare results to ground truth** using tolerances for floating‑point or approximate outputs.  
5. **Aggregate metrics** (accuracy, runtime, memory).

## 3️⃣ Depth  
- *Security:* Use a read‑only filesystem and minimal privileges; enforce timeouts (~1 s) and memory caps (~256 MB).  
- *Correctness:* For deterministic tasks, exact match; for numeric problems, use relative/absolute tolerance.  
- *Scoring:* Binary correctness + weighted penalty for resource overuse → composite score.  
- *Complexity:* O(n) per test case where n = number of lines executed; overall O(m·n) for m cases.

## 4️⃣ Edge Cases  
- **Infinite loops / recursion:** timeout triggers “RuntimeError.”  
- **Floating‑point quirks:** use `math.isclose`.  
- **Multiple correct solutions:** allow a set of acceptable outputs.  
- **Non‑deterministic libraries:** mock or restrict randomness.

## 5️⃣ Optimize & Communicate  
- **Parallel execution** via worker pools to reduce latency.  
- **Cache compiled binaries** for repeated tests.  
- **Explainability:** log diffs, stack traces, and resource stats back to the evaluator.  

Narrate your design by walking through a sample evaluation: input → sandbox → run → capture → compare → score, highlighting safety and fairness at each step. This structured flow demonstrates clear problem‑solving, depth in implementation, and readiness for production systems—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
