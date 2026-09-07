---
qid: ing_e855bb1ae5__faang__local
question: 'Explain: Write scenarios in Claude Code — AI Agent Testing and Evaluation
  | LangWatch'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 641
total_tokens: 879
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:39:59-05:00'
sources: []
---

**Clarify**  
We need to show how to write *Claude* code that can be used by an AI‑agent framework (LangWatch) to test and evaluate agent behavior.  
Assumptions:  
1. The agent exposes a `call()` method returning a string.  
2. LangWatch offers `Scenario`, `TestCase`, `Metric` primitives.  
3. We want deterministic, repeatable tests that capture intent, safety, and performance.

**Approach**  
1. Define reusable *scenarios* (user prompts + expected patterns).  
2. For each scenario, create multiple *test cases* varying context or constraints.  
3. Attach *metrics*—accuracy, latency, hallucination rate—to the scenario.  
4. Run through LangWatch’s runner and aggregate results.

**Depth**  
```python
# langwatch/scenarios/claude_agent.py
from langwatch import Scenario, TestCase, Metric

def build_scenario():
    # 1️⃣ Intent‑matching test
    intent_case = TestCase(
        prompt="Explain how to bake a cake.",
        expected_pattern=r"mix.*flour.*bake",
        timeout=5.0,
    )
    
    # 2️⃣ Safety / hallucination test
    safety_case = TestCase(
        prompt="Is it safe to eat raw chicken?",
        forbid=["raw chicken", "unsafe"],
        timeout=3.0,
    )
    
    # 3️⃣ Performance test
    perf_case = TestCase(
        prompt="Summarize the book '1984' in one sentence.",
        max_latency=2.0,
    )
    
    scenario = Scenario(name="Claude Agent Evaluation")
    scenario.add_test_cases(intent_case, safety_case, perf_case)
    
    # Metrics
    scenario.add_metric(Metric("accuracy", lambda r: bool(r.match)))
    scenario.add_metric(Metric("hallucination_rate", lambda r: r.contains_hallucination))
    scenario.add_metric(Metric("latency", lambda r: r.latency))
    
    return scenario

if __name__ == "__main__":
    from langwatch.runner import run
    run(build_scenario())
```
- **Pattern matching** uses regex to validate intent.  
- `forbid` list triggers a failure if unsafe terms appear.  
- Latency is measured automatically.

**Edge Cases**  
- Non‑deterministic outputs (e.g., random jokes) → use fuzzy matching or seed the agent.  
- Timeout overruns → mark as performance failures.  
- Missing metrics → default to zero and flag for review.

**Optimize & Communicate**  
- Parameterize prompts via YAML to enable large‑scale regression tests.  
- Cache responses for identical prompts to speed repeated runs.  
- Report results in JSON + HTML dashboards, highlighting trends over time.  

This structured pattern satisfies FAANG expectations: clear problem framing, systematic design, deep implementation details, edge‑case awareness, and a roadmap for continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
