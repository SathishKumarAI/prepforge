---
qid: ing_44bf006cf5__eli5__local
question: 'Explain: State — Client-Server Architecture | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 261
total_tokens: 420
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:25:33-05:00'
sources: []
---

Think of a machine‑learning service like a **restaurant** that serves customized meals (predictions).  
The **client** is the customer who sends an order (“give me a price prediction for this data”).  
The **server** is the kitchen where the cooking happens.

In this system, *state* is what the kitchen keeps between orders—like a recipe book, a list of ingredients already stocked, or the current temperature of the oven. The server stores:

1. **Model parameters** – the “recipe” that turns raw data into predictions.  
2. **Intermediate results** – cached computations so the next customer can get an answer faster (e.g., pre‑computed embeddings).  
3. **Session info** – who is ordering and what they’ve already asked for, to personalize or keep track of usage.

When a new client request arrives, the server pulls this state, runs the model, and returns the dish (prediction) while updating the state for future orders. Thus, “state” in a client‑server architecture is simply the data the server keeps around to process incoming requests efficiently and accurately.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
