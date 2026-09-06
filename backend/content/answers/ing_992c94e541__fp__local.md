---
qid: ing_992c94e541__fp__local
question: 'Explain: ​ Online evaluations — Evaluation concepts - Docs by LangChain'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 460
total_tokens: 632
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:31:40-05:00'
sources: []
---

**Why “online” evaluation is needed for LLM agents**

When a language‑model (LLM) agent interacts with the real world, every decision it makes can be *tightly coupled* to downstream consequences (e.g., API calls, database writes).  
If we only measure performance *offline*—by comparing generated text against a static reference—we miss two critical phenomena:

1. **State drift**: The environment may change between turns; an action that was correct yesterday could become invalid today.
2. **Error propagation**: A single poor decision can cascade, making later states unreachable.

Therefore, we must evaluate *online*: let the agent run in a simulated or real environment, observe its actions, and score the trajectory end‑to‑end. This is analogous to reinforcement learning’s return signal but without requiring a reward function; instead, the evaluation metric captures *task success* (e.g., “did the agent book a flight?”).

**How LangChain implements it**

- **Evaluator classes** (`BaseEvaluator`) encapsulate domain logic: they take an `AgentExecutor` and run it against a *scenario* (a pre‑defined sequence of inputs/contexts).
- The evaluator returns a *numeric score* or pass/fail flag, often derived from parsing the final agent output or checking side‑effects.
- By wrapping this in a loop over many scenarios, we obtain a distribution of scores that reflects robustness.

**Non‑obvious insight**

Many people treat evaluation as a one‑shot “accuracy” metric. In online evaluation, *time* becomes part of the loss: an LLM that chooses the right action but does it too slowly (e.g., waiting for a slow API) may still fail a real‑world task. Thus, latency is not merely a nuisance—it should be incorporated into the evaluator’s reward function or penalty, turning time‑cost trade‑offs into explicit design constraints.

In short, online evaluation in LangChain forces us to treat LLM agents as *sequential decision makers* whose quality depends on both correctness and contextual dynamics—exactly the setting where principled optimization (e.g., RL) thrives.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
