---
qid: ing_e863dbb1c4__fp__local
question: 'Explain: Q112: Your agent performs well on short tasks but degrades badly
  past 30 minutes of autonomous work. Diagnose and fix it using context engineering.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 191
output_tokens: 514
total_tokens: 705
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:13:04-05:00'
sources: []
---

**Why the 30‑minute cliff occurs**

An autonomous agent consumes *context* (past states, observations, internal memory) to predict future actions.  
In practice every turn adds a token to the prompt; after ≈ 30 min of continuous dialogue the prompt length exceeds the model’s effective context window (~8k–32k tokens). The transformer then has to truncate or slide windows, losing older but still relevant information. This truncation is not random: it preferentially discards earlier observations that anchor the agent’s world‑model, so the policy drifts from its original objective and starts repeating or hallucinating actions.

**Diagnose with a sliding‑window trace**

1. Log token count per turn.  
2. Plot performance metrics (reward, task completion) versus cumulative tokens.  
3. Look for a steep decline around the window boundary.

**Fix via context engineering**

| Strategy | Principle | Implementation |
|----------|-----------|----------------|
| **Hierarchical summarization** | Information bottleneck: compress long histories into a concise vector while preserving salient events. | After every N turns, run a lightweight summarizer (e.g., a small LSTM) that produces a fixed‑size “episode summary” token; replace the raw history with this summary in subsequent prompts. |
| **Explicit memory slots** | Separating short‑term context from long‑term knowledge reduces redundancy. | Maintain a key–value store of critical facts (time, location, goal state). Inject only the most recent slot updates into the prompt, keeping older facts in an external database queried on demand. |
| **Dynamic token budgeting** | Optimization: allocate tokens where they yield highest marginal reward. | Prioritize recent observations and high‑confidence predictions; drop low‑impact past actions based on a learned importance score. |

**Non‑obvious insight**

The degradation is not just “memory loss” but *context misalignment*: the model starts treating its own truncated history as ground truth, leading to self‑reinforcing errors. By explicitly separating “what happened” from “what I remember now”, we give the agent a consistent frame of reference and prevent it from overfitting to an incomplete narrative. This aligns with the principle that learning systems should maintain *stable priors* even when raw inputs are noisy or truncated.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
