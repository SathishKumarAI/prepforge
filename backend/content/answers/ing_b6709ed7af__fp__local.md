---
qid: ing_b6709ed7af__fp__local
question: 'Explain: 💬 Support — GitHub - langwatch/langwatch: The platform for LLM
  evaluations and AI agent testing \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 190
output_tokens: 374
total_tokens: 564
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:31:50-05:00'
sources: []
---

### Why *langwatch* Exists

In the age of prompt‑tuned large language models (LLMs), a single model can behave like many different “agents” depending on its instruction set and environment.  
The **fundamental problem** is that developers have no systematic way to:

1. **Quantify** how an LLM’s internal policy changes when you modify prompts or add auxiliary tools.
2. **Track** these changes over time as the model weights evolve (e.g., new checkpoints, fine‑tunes).
3. **Guarantee** reproducibility across heterogeneous testbeds (local GPUs, cloud APIs, custom wrappers).

*langwatch* turns this problem into a *controlled experiment*.  
It treats an LLM + prompt + tool set as a black‑box agent and records:

- **Observations**: the raw tokens or embeddings produced.
- **Actions**: API calls, tool invocations, or self‑generated responses.
- **Rewards**: task‑specific metrics (accuracy, cost, latency).

By framing evaluation as a **Markov Decision Process**, it can apply reinforcement‑learning diagnostics—policy gradients, value estimation—to detect drift or brittleness.  

### Core Insight

Most people think an LLM’s output is purely deterministic given the same prompt. *langwatch* shows that **stochasticity in token sampling, coupled with subtle changes in context window ordering, produces a *distributional shift* that can be detected only by observing *action sequences*, not just final answers**. This shift explains why a model may pass a single‑shot test but fail under continuous interaction—an insight often missed when evaluation is limited to static benchmarks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
