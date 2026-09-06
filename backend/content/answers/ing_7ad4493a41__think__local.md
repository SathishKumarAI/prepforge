---
qid: ing_7ad4493a41__think__local
question: How would you build an execution-based eval for a code-generation feature?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 192
output_tokens: 513
total_tokens: 705
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T09:09:14-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
   * What “execution‑based eval” means in this context (runtime correctness, performance, side‑effects?).  
   * Which languages / runtimes are supported (Python, JavaScript, SQL, etc.).  
   * Constraints on resources (time limits, sandboxing, security).  
   * Whether the evaluator has access to expected outputs or only a specification.

**2️⃣ Adopt a layered mental model**  
   1. **Specification layer** – formal description of desired behavior (unit tests, type signatures, contracts).  
   2. **Sandbox layer** – isolated execution environment that prevents malicious code from harming the host.  
   3. **Instrumentation layer** – hooks to capture stdout/stderr, return values, memory usage, and time.  
   4. **Comparison layer** – deterministic diffing or metric computation against reference results.

**3️⃣ Step‑by‑step reasoning**  
   * Parse user code + any provided test harness.  
   * Spin up a sandbox (Docker/Firecracker/VM) with the necessary runtime and dependencies.  
   * Inject instrumentation (e.g., wrappers around `print`, custom `assert`).  
   * Execute within time/memory limits, capturing all outputs.  
   * Run reference implementation or expected‑output suite in the same environment.  
   * Compute metrics: exact match, similarity score, latency, resource usage.  
   * Aggregate into a verdict and explain discrepancies (e.g., “failed assertion on line 12”).

**4️⃣ Common traps to avoid**  
   * **Security blind spots** – never run untrusted code without isolation; remember that even sandboxed processes can escape via kernel bugs.  
   * **Non‑determinism** – random seeds, timestamps, or external I/O must be controlled or normalized.  
   * **Over‑penalizing performance** – distinguish correctness failures from slow runs; use separate metrics.  
   * **Assuming a single test case suffices** – cover edge cases and boundary conditions.

**5️⃣ Sanity‑check & communicate clearly**  
   * Verify that the sandbox actually isolates (run known malicious snippets).  
   * Cross‑validate instrumentation by comparing captured outputs with manual runs.  
   * When explaining results, separate “why it failed” from “how long/large it was”, so users understand both correctness and efficiency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
