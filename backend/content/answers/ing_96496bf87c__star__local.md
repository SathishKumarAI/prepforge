---
qid: ing_96496bf87c__star__local
question: 'Explain: to see now it will respond the — Coding Adventure: Chess'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 323
total_tokens: 563
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:33:25-05:00'
sources: []
---

**Situation:**  
During my senior thesis I was tasked with building an AI that could play chess at a grandmaster level while running on a Raspberry Pi for a community robotics club demo.

**Task:**  
I needed to design a lightweight neural network that could evaluate board positions in real time, generate legal moves, and choose the best one within 0.5 seconds per turn.

**Action:**  
I started by encoding the board into an 8×8×12 tensor (12 piece types) and trained a convolutional network with residual blocks on the Kaggle “Chess Openings” dataset. To keep inference fast I pruned weights that contributed less than 0.01 % to the loss, then quantized to int8 using TensorFlow Lite. During play I combined the model’s evaluation score with a shallow minimax search (depth 3) and alpha‑beta pruning to handle tactical blunders. I also implemented move ordering based on the model’s top‑k predictions to reduce node expansions.

**Result:**  
The final system evaluated 200,000 positions per second on the Pi, achieving an ELO of 2100 against Stockfish 8‑light. The demo drew a crowd of 120 at the club fair, and I published a paper that was later cited in a robotics conference proceeding. I learned how to balance model accuracy with hardware constraints and the importance of hybrid search–learning pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
