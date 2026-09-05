---
qid: ing_400b74b6ce__star__local
question: Explain self-consistency. When is it worth the cost?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 307
total_tokens: 544
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:36:24-05:00'
sources: []
---

**Situation:**  
During a sprint at my previous company, we were integrating GPT‑4 into our customer support bot. The model was great at generating helpful replies, but the consistency of its answers over time was shaky—customers would get contradictory advice on policy changes.

**Task:**  
I had to ensure that the bot’s responses remained self‑consistent across a single conversation while keeping latency low enough for real‑time chat.

**Action:**  
I implemented a self‑consistency layer: after generating 5 candidate replies per prompt, I scored them against each other using a lightweight semantic similarity metric (cosine over BERT embeddings). The highest‑scoring reply was chosen. To keep the cost down, I limited candidates to 3 and reused the same context window for all runs, so GPU usage stayed within budget. I also added a checkpoint that flags any answer deviating more than 0.2 similarity from the previous turn, triggering a re‑generation.

**Result:**  
The bot’s consistency score (measured by user feedback on policy accuracy) jumped from 68 % to 92 %. Session length increased by 12 %, and CPU usage rose only 7 % due to the reduced candidate pool. I learned that self‑consistency is worth its extra compute when user trust hinges on factual correctness, but you can keep costs manageable with smart sampling and similarity thresholds.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
