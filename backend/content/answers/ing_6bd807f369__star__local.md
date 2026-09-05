---
qid: ing_6bd807f369__star__local
question: 'Explain: Semantic Similarity — Llm Evaluation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 306
total_tokens: 540
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:02:47-05:00'
sources: []
---

**Situation** – In my last role at a fintech startup, we were building an AI‑powered chat assistant for loan applications. Our QA team noticed that the model’s responses varied wildly for semantically identical user inputs, which hurt customer satisfaction scores (down to 68% NPS).  

**Task** – I was tasked with developing a systematic way to evaluate and improve the model’s semantic consistency so that different phrasings of the same intent produced similar, high‑quality answers.  

**Action** – I set up an evaluation pipeline using sentence embeddings from Sentence‑Transformers (model *all-mpnet-base-v2*) to compute cosine similarity between user prompts and their paraphrases. We annotated a 5,000‑sample validation set with ground‑truth intent clusters. The metric “average intra‑cluster similarity” guided hyperparameter tuning of the LLM’s temperature and top‑k settings. I also introduced contrastive loss during fine‑tuning to explicitly penalize low similarity scores.  

**Result** – After two iterative cycles, average intra‑cluster cosine similarity rose from 0.61 to 0.83, and our NPS jumped back to 82%. The experience taught me that embedding‑based semantic metrics are essential for diagnosing and steering LLM behavior in real‑world applications.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
