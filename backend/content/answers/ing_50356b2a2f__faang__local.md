---
qid: ing_50356b2a2f__faang__local
question: 'Explain: Assertions and Constraints — Dspy'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 533
total_tokens: 763
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:51:09-05:00'
sources: []
---

**Clarify**  
We’re asked to explain *Assertions* and *Constraints* in **dspy**, a Python framework for building LLM‑driven applications.  
Assumptions:  
1. The audience knows basic LLM usage but not dspy internals.  
2. They want both conceptual clarity and practical code snippets.

**Approach**  
1. Define each concept in plain terms.  
2. Show how they fit into a dspy module’s workflow.  
3. Provide minimal examples that compile.  
4. Discuss trade‑offs (runtime cost vs. safety).  

**Depth**  
- **Assertions**: runtime checks on the model’s output. A `dspy.Assertion` is an object with a callable `check(output) -> bool`. When an assertion fails, dspy raises `AssertionError`, halting the pipeline or triggering retries. Example:

  ```python
  class PositiveNumber(dspy.Assertion):
      def __call__(self, out: str) -> bool:
          return float(out.strip()) > 0

  @dspy.lm("gpt-4")
  def ask_for_number():
      return dspy.Predict(
          input="What is the smallest positive integer?",
          output=dspy.OutputField(assertions=[PositiveNumber()])
      )
  ```

- **Constraints**: compile‑time specifications that restrict *how* a module can be composed. They are subclasses of `dspy.Constraint` and enforce rules such as “this field must not be empty” or “this predictor cannot depend on another specific predictor”. Constraints run during the build phase, preventing invalid pipelines from being instantiated.

  ```python
  class NoCircularDependency(dspy.Constraint):
      def __call__(self, module: dspy.Module) -> bool:
          # simple DFS to detect cycles
          return not has_cycle(module)
  ```

**Edge Cases**  
- Assertions that are too strict can cause frequent failures; loosen thresholds or use probabilistic checks.  
- Constraints that are overly restrictive may block legitimate designs—provide configurable “allow‑list” patterns.  

**Optimize & Communicate**  
- Cache assertion results when the same input reappears to avoid redundant LLM calls.  
- Expose a verbose mode where failed assertions log diagnostic traces, aiding debugging.  
- When explaining, start with a high‑level analogy (assertions = runtime sanity checks; constraints = design contracts) before diving into code, ensuring interviewers see clear reasoning and depth.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
