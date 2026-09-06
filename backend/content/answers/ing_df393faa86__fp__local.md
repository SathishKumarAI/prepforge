---
qid: ing_df393faa86__fp__local
question: 'Explain: Key Metrics — Building Tool Agents'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 547
total_tokens: 714
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:54:17-05:00'
sources: []
---

**Key Metrics for Building Tool‑Agent Systems**

*Problem:* A tool agent must decide *when*, *what*, and *how* to invoke external APIs so that a high‑level task (e.g., scheduling a meeting) succeeds with minimal cost.  
*Why it works this way:* The agent’s policy is a mapping \(π: s \rightarrow a\), where \(s\) encodes the current world state plus the tool’s capability set, and \(a\) selects an API call. We want to optimize expected cumulative reward while keeping **information leakage** (the number of calls that actually change the environment) low.

| Metric | Derivation | Interpretation |
|--------|------------|----------------|
| **Success Rate** \(\mathbb{E}[R]\) | Reward \(R\) is 1 if the final goal state satisfies constraints, 0 otherwise. | Direct measure of task completion. |
| **Call Efficiency** \(\frac{\mathbb{E}[\text{Calls}]}{\mathbb{E}[R]}\) | Ratio of expected number of API invocations to success. Minimizes unnecessary interactions. | Balances speed vs. cost (API rate limits, latency). |
| **Information Gain per Call** \(I(s_{t+1}; a_t \mid s_t)\) | Mutual information between state transition and action. Derived from Shannon’s definition; high values mean each call meaningfully reduces uncertainty. | Captures *action informativeness*: a tool that merely echoes input (low \(I\)) is useless even if it returns instantly. |
| **Latency‑Weighted Utility** \(\sum_t R_t / (1 + λ\,t)\) | Discount factor \(λ\) penalizes delayed rewards; derived from exponential decay in information theory. | Ensures agents prefer quicker solutions, reflecting real‑world deadlines. |

*Non‑obvious insight:* **Information Gain per Call is the true bottleneck, not raw latency.** A slow tool that drastically reduces uncertainty can be preferable to a fast but opaque one, because subsequent decisions rely on accurate state estimates. Thus, when designing or selecting tools, prioritize those that expose *high‑contrast* outputs (e.g., categorical results) over raw speed.

By jointly optimizing these metrics—balancing success probability, call economy, and informational value—one constructs robust tool agents that solve complex tasks efficiently while respecting resource constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
