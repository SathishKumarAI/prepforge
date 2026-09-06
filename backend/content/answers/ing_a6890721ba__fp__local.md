---
qid: ing_a6890721ba__fp__local
question: 'Explain: Structure output and tool use — DeepSeek-R1 incentivizes reasoning
  in LLMs through reinforcement learning | Nature'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 183
output_tokens: 432
total_tokens: 615
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:59:48-05:00'
sources: []
---

**Why “structured output + tool use” matters for LLM reasoning**

Large language models (LLMs) are trained to maximize next‑token likelihood. That objective rewards fluent text but says nothing about *correctness* or *intermediate steps*. When a model must solve a multi‑step problem—say, computing the probability of an event given data—it has no incentive to expose its reasoning chain; it can simply emit the final answer and be judged correct.

DeepSeek‑R1 flips this by **requiring a structured output**: each inference step is wrapped in a JSON‑like frame that lists the *action* (e.g., call a calculator API), the *arguments*, and the *result*. The model’s reward signal comes from two sources:

1. **Answer accuracy** – as usual, the final prediction must match ground truth.
2. **Tool‑usage fidelity** – each tool invocation is evaluated for correctness (did it call the right function with valid arguments?) and *necessity* (was the step actually needed to reach the answer?).

By treating the structured trace as part of the reward, we embed an *information‑theoretic penalty* on hallucinated reasoning. The model learns that emitting a useless or incorrect tool call inflates the trace length without improving accuracy, which reduces its expected reward.

**Non‑obvious insight**

The key trick is that **tool calls are themselves differentiable actions in a reinforcement loop**: each call returns observable data that can be fed back into the next token generation. This turns the language model into an *interactive policy* rather than a static predictor, allowing it to learn to ask for external evidence (e.g., querying a database) exactly when its internal uncertainty exceeds a threshold. The reward thus aligns with *optimal stopping theory*: the model learns the precise trade‑off between generating more tokens and invoking a tool, leading to both fewer hallucinations and higher overall accuracy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
