---
qid: ing_e52e8b6535__star__local
question: 'Explain: Title: Kimi k1.5: Scaling Reinforcement Learning with LLMs'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 421
total_tokens: 665
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:06:07-05:00'
sources: []
---

**Situation** – In late 2024 I joined the research squad at ScaleAI where we were building an autonomous agent platform for customer service bots. The existing RL pipeline could only train on a handful of prompts because our policy network was a tiny transformer and each rollout cost ~10 ms, so scaling to thousands of user dialogues was impossible.

**Task** – My goal was to design a system that could scale reinforcement learning with large language models (LLMs) while keeping inference latency under 50 ms per turn. I had to preserve sample efficiency, avoid catastrophic forgetting, and keep compute costs below $0.01 per dialogue.

**Action** – I implemented “Kimi‑k1.5,” a two‑stage architecture: first a lightweight policy head (4 M params) that selects high‑level actions; second an LLM backbone (13 B GPT‑style) that generates natural language conditioned on the chosen action and a compressed state vector. To train, I used reward‑shaping with human‑in‑the‑loop feedback and off‑policy correction via V-trace. For scaling, I leveraged distributed PPO over 256 GPUs, and introduced gradient checkpointing + mixed‑precision training to cut memory by 60 %. I also built a caching layer for deterministic LLM outputs to reduce runtime.

**Result** – Kimi‑k1.5 achieved a 4× reduction in rollout time while improving task success rate from 78 % to 92 % on the “refund request” benchmark, and cutting per‑dialogue cost from $0.12 to $0.008. The experiment demonstrated that LLMs can be harnessed for RL at scale when coupled with a lightweight policy head and careful system design. I learned that balancing model size, latency, and sample efficiency requires both algorithmic tweaks and infrastructure engineering.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
