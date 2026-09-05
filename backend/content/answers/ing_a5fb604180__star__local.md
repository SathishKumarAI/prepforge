---
qid: ing_a5fb604180__star__local
question: 'Explain: closer to my king and now it — Coding Adventure: Chess'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 392
total_tokens: 632
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:04:59-05:00'
sources: []
---

**Situation**  
In a hackathon last fall, my team was tasked with creating an AI that could evaluate chess positions in real time for a mobile game. The judges wanted something that ran on a 2 GHz phone CPU and responded within 200 ms per move.

**Task**  
I had to design a lightweight evaluation function that still outperformed the stock engine built into the app, while keeping memory usage under 30 MB.

**Action**  
I started by pruning the feature set: instead of feeding raw board arrays into a deep net, I extracted handcrafted heuristics (material balance, king safety, pawn structure) and encoded them as a 32‑dimensional vector. Then I trained a gradient‑boosted decision tree on 1 M self‑played games, using XGBoost with early stopping to avoid overfitting. To meet latency constraints, I quantized the model weights to 8‑bit integers and compiled it with TensorFlow Lite, which gave me a 2× speedup on ARMv7 CPUs. Finally, I wrapped the inference in a simple C++ API that cached recent positions to avoid redundant evaluations.

**Result**  
The engine scored an Elo of 2100 against the baseline stockfish‑lite, and average move latency dropped from 350 ms to 140 ms—well under the required threshold. The project was awarded “Best AI Hack” and later integrated into our commercial chess app. I learned that combining domain knowledge with lightweight ML models can deliver high performance on constrained devices.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
