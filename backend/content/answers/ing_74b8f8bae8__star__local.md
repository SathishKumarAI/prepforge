---
qid: ing_74b8f8bae8__star__local
question: How do you handle retrieval in a multi-turn conversation?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 319
total_tokens: 555
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:28:03-05:00'
sources: []
---

**Situation** – While leading the chatbot upgrade at FinTechCo, we noticed user satisfaction dropped to 62 % because our system couldn’t retrieve relevant policy documents after a few turns, especially when users shifted topics mid‑conversation.

**Task** – I was tasked with designing a retrieval pipeline that maintained context across up to five turns and returned accurate policy snippets within 300 ms, while keeping the model lightweight for mobile clients.

**Action** – First, I introduced a sliding‑window context buffer that stored embeddings of the last three turns. Using FAISS’s IVF+PQ indexing on a pre‑trained Sentence‑BERT encoder, we could perform approximate nearest neighbor search in sub‑millisecond latency. To handle topic shifts, I added a dynamic re‑ranking step: after retrieving top‑k passages, a lightweight transformer (DistilBERT) scored them against the current user query and the aggregated context vector. If the score dropped below 0.45, we expanded the window to include earlier turns. Finally, I integrated this pipeline into our Flask API with async workers to keep latency low.

**Result** – Retrieval accuracy jumped from 48 % to 87 %, reducing average turn time by 40 %. User satisfaction rose to 85 % and churn fell by 12 %. I learned that balancing contextual depth with efficient indexing is key in real‑world multi‑turn retrieval.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
