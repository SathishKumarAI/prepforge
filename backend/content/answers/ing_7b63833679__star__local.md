---
qid: ing_7b63833679__star__local
question: 'Explain: Procedural Memory: Learned Skills and Workflows'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 325
total_tokens: 561
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:40:37-05:00'
sources: []
---

**Situation** – In my last role at a fintech startup, we were rolling out an automated fraud‑detection pipeline that processed millions of transactions per day. The existing system was rule‑based and struggled with evolving fraud patterns, leading to a 12 % false‑positive rate and slow onboarding for new analysts.

**Task** – I needed to build a procedural memory layer: an AI component that could learn the “workflow” of seasoned analysts—how they iteratively refine rules, apply heuristics, and update models—so the system could adapt in real time without manual re‑engineering.

**Action** – I implemented a reinforcement learning framework using OpenAI Gym for simulation and PyTorch for policy networks. The agent observed analyst actions (rule tweaks, model retrains) as state transitions, received rewards based on post‑deployment performance metrics, and learned a policy that suggested rule adjustments automatically. I also integrated a lightweight knowledge graph to encode domain concepts, ensuring the agent’s decisions were interpretable.

**Result** – After three months of training, the automated workflow reduced false positives by 35 % (from 12 % to 7.8 %) and cut analyst effort on rule maintenance by 40 %. The project taught me that procedural memory in AI is not just about memorizing data but encoding expert behavior into a learnable policy that can evolve with the business.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
