---
qid: ing_7ad4493a41__faang__local
question: How would you build an execution-based eval for a code-generation feature?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 438
total_tokens: 674
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:29:53-05:00'
sources: []
---

**Clarify**  
You want to evaluate the quality of generated code by actually running it (“execution‑based evaluation”).  
Assumptions I’d confirm:  
* What language(s) and runtime environment are we targeting?  
* Is the input a specification, unit tests, or sample data?  
* How do we measure correctness (pass/fail, performance, security)?  

**Approach**  
1. **Sandbox** – spin up an isolated container/VM per candidate.  
2. **Compile / Lint** – run language‑specific compilers and static analyzers to catch syntax errors early.  
3. **Unit tests** – execute a curated test suite (unit, integration, edge cases).  
4. **Metrics** – record pass/fail, runtime, memory, and any custom assertions.  
5. **Feedback loop** – aggregate results into a score and surface failures back to the model for reinforcement learning.

**Depth**  
* Use Docker + Firecracker for minimal overhead and strong isolation.  
* Leverage `gRPC` or REST API to submit code, stream logs, and receive verdicts.  
* Cache dependencies (pip/apt) to keep startup time low (< 1 s).  
* For safety, enforce a hard timeout (e.g., 2 s) and CPU/memory limits.  
Complexity: O(test‑count × exec‑time); trade‑off between thoroughness and latency.

**Edge Cases**  
* Infinite loops → timeout triggers “RuntimeError”.  
* External network calls → mock or block.  
* Non‑deterministic outputs → use deterministic seeds.  
* Compilation failures → log error stack for debugging.

**Optimize & Communicate**  
Improve throughput by batching submissions, using GPU‑accelerated containers for compiled languages, and caching test results across runs. I’d present the pipeline as a diagram, explain latency budgets, and discuss how this evaluation directly feeds back into model fine‑tuning—showing clear value to product stakeholders.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
