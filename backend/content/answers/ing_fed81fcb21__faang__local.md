---
qid: ing_fed81fcb21__faang__local
question: 'Explain: Code-based evals (fast, cheap, deterministic)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 436
total_tokens: 671
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:32:39-05:00'
sources: []
---

**Clarify**  
You’re asking about *code‑based evaluations* of language models—quick, inexpensive tests that run the model’s output as code and check for correctness. Confirm assumptions: (1) the target is a generative model that can emit syntactically valid code; (2) we have an execution sandbox; (3) correctness is judged by passing unit tests or sample inputs.

**Approach**  
1. Generate candidate code snippets from the model.  
2. Compile/interpret them in a safe sandbox.  
3. Run a battery of deterministic test cases.  
4. Record pass/fail and any runtime errors.  

Repeat for many prompts to aggregate statistics (accuracy, error rates).

**Depth**  
- **Determinism**: The same prompt yields the same code each run (unless sampling).  
- **Speed & Cost**: Execution is O(1) per test; no large‑scale inference needed beyond generation.  
- **Complexity**: For *n* prompts and *m* tests, overall cost ≈ O(n·m).  
- **Trade‑offs**:  
  - *Coverage*: Limited by the test suite—may miss edge cases.  
  - *Safety*: Requires robust sandboxing to prevent malicious code.  

**Edge Cases**  
- Syntax errors → immediate fail; may mask semantic issues.  
- Infinite loops or resource exhaustion → need timeouts.  
- Non‑deterministic behavior (e.g., random seeds) breaks repeatability.

**Optimize & Communicate**  
- **Parallelize** sandbox executions to reduce wall‑time.  
- **Curriculum‑style tests**: start with simple cases, progressively harder ones to surface learning curves.  
- **Reporting**: present pass rates per prompt category; highlight failure modes for targeted fine‑tuning.

By framing evaluation as a deterministic, low‑cost test harness, we get rapid feedback on code quality while keeping compute budgets minimal—exactly what FAANG teams need when iterating on large language models.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
