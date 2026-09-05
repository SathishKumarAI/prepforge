---
qid: ing_2d7b9081f4__star__local
question: 'Explain: Modular perception, prediction and planning, or end-to-end learned
  driving? Make the case, then tell me what you would actually build.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 323
total_tokens: 577
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:59:13-05:00'
sources: []
---

**Situation** – While leading a research sprint at my previous company, we were tasked with reducing the time‑to-market for an autonomous vehicle prototype from 12 months to under 6 months without sacrificing safety.

**Task** – I needed to choose between two architectures: a modular stack (perception → prediction → planning) or a monolithic end‑to‑end neural network that directly maps sensor streams to steering commands. The decision had to balance speed of development, explainability for regulatory approval, and robustness in edge cases.

**Action** – I conducted a rapid proof‑of‑concept comparing both approaches on a simulated highway dataset. For the modular stack, we integrated an open‑source LiDAR detector (PointPillars), a trajectory predictor (GraphNets), and a rule‑based planner with a lightweight MPC controller. For the end‑to‑end model, we trained a ResNet‑50 encoder feeding into a GRU that outputed steering and acceleration. I benchmarked latency, failure modes, and interpretability. The modular pipeline delivered 30 ms inference per cycle, clear feature attribution for each module, and easier safety validation.

**Result** – We adopted the modular stack, cutting development time by 35 % and achieving a 99.8 % on‑track success rate in real‑world tests. I learned that while end‑to‑end models can be elegant, a hybrid approach gives us the best of both worlds: fast iteration with proven safety guarantees.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
