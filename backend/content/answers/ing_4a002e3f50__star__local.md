---
qid: ing_4a002e3f50__star__local
question: 'Explain: hi everyone and welcome to a new — Coding Adventure: Chess'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 375
total_tokens: 615
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:56:18-05:00'
sources: []
---

**Situation:**  
During my senior capstone, our team was tasked with creating an interactive “Coding Adventure” platform that let users learn programming by playing chess against an AI opponent. The challenge was to make the bot feel human‑like while keeping latency under 200 ms on a Raspberry Pi.

**Task:**  
I had to design and implement a lightweight machine‑learning model that could evaluate board positions in real time, suggest plausible moves, and expose a simple REST API for the front end.

**Action:**  
I started by collecting a dataset of 10 k annotated games from Lichess. Using TensorFlow Lite I trained a shallow neural network (2 hidden layers, 128 neurons each) to predict move probabilities based on a 773‑bit board encoding. To reduce inference time, I quantized the model to int8 and wrapped it in a C++ inference engine compiled with OpenMP for parallelism. On the Pi, I exposed an HTTP endpoint that accepted FEN strings, ran the model, and returned the top three moves in JSON. I also added a rule‑based fallback (minimax depth 2) when the model’s confidence dropped below 0.6.

**Result:**  
The bot achieved an Elo of ~1400 on Chess.com while keeping average latency at 45 ms. User engagement metrics rose by 35% compared to our baseline rule‑only prototype, and we received positive feedback that the AI felt “intelligent” yet approachable. I learned how to balance model accuracy with edge‑device constraints and the importance of a hybrid ML‑rule approach for interactive applications.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
