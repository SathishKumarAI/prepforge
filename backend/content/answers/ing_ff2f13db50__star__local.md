---
qid: ing_ff2f13db50__star__local
question: 'Explain: Retrieval Augmented Generation: Vector search is not enough'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 285
total_tokens: 522
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:59:05-05:00'
sources: []
---

**Situation** – While leading a product‑launch for an AI‑powered FAQ bot at my previous company, we noticed that the model’s answers were often accurate but occasionally included irrelevant or outdated information from the knowledge base.

**Task** – I needed to improve answer relevance and factual correctness without sacrificing response speed, ensuring users could trust the bot in real‑time conversations.

**Action** – First, I kept the vector search for quick retrieval of candidate passages. Then I added a lightweight “retrieval augmentation” pipeline: each retrieved chunk was fed into a fine‑tuned BERT encoder to generate contextual embeddings; we scored candidates not only by cosine similarity but also by a relevance classifier that weighed entity matches and timestamp freshness. Finally, the top‑k passages were concatenated with a prompt template and passed to GPT‑4 for generation, allowing the model to synthesize an answer while grounding it in the most relevant evidence.

**Result** – The bot’s precision on user queries rose from 68 % to 93 %, and average latency stayed under 300 ms. I learned that vector search alone is great for speed but needs contextual filtering and generation integration to produce truly trustworthy AI responses.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
