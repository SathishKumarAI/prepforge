---
qid: ing_4d9038f928__star__local
question: 'Explain: if that explanation made any sense but — Coding Adventure: Chess'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 310
total_tokens: 550
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:03:41-05:00'
sources: []
---

**Situation**  
In my sophomore year I joined a hackathon team that had to build a “Coding Adventure: Chess” app—an interactive platform where users could play chess against an AI that learned from their moves. The deadline was just five days, and our prototype had no predictive engine.

**Task**  
I needed to implement a lightweight machine‑learning model that could evaluate board positions in real time, suggest plausible openings, and adapt to the player’s style without exceeding 200 ms per move.

**Action**  
I chose a shallow neural network trained on the Lichess database (≈20M games). Using PyTorch, I preprocessed each game into 8×8×12 tensors (piece types + color) and added a positional bias via a simple convolution layer. To keep inference fast, I quantized weights to int8 and deployed the model with ONNX Runtime on the client side. During training I used a curriculum that started with grandmaster games and gradually introduced amateur‑style openings so the network learned both depth and breadth.

**Result**  
The AI responded within 150 ms on average, achieving an Elo of ~1400 against random opponents in our internal tests—a 30‑point improvement over the baseline. I learned how to balance model complexity with latency constraints and the importance of data preprocessing for board games.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
