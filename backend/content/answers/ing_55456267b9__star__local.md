---
qid: ing_55456267b9__star__local
question: 'Explain: Semantic Memory: The Fact Store — Long Term Memory'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 345
total_tokens: 582
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:18:37-05:00'
sources: []
---

**Situation** – In my last role I was building a chatbot for a large e‑commerce platform that had over 50 000 SKUs and 1 million customer queries per month. The existing NLP pipeline could answer “what is the price?” but struggled with product specifications, brand history, and policy rules.

**Task** – My goal was to design a semantic memory module that would act as a fact store in long‑term memory so the bot could retrieve structured knowledge (e.g., “The Sony WH‑1000XM4 has 30 hours battery life”) without re‑parsing every user request.

**Action** – I first extracted facts from our product catalog, policy documents, and support tickets using spaCy entity extraction. Then I built a vector‑index in Pinecone where each fact was stored as a short text chunk with metadata tags (product ID, category). During inference I used sentence‑transformers to embed the user query, performed a similarity search, and returned the top fact along with confidence scores. To keep it up‑to‑date I set up an incremental pipeline that re‑indexes new facts every 6 hours.

**Result** – The chatbot’s precision on knowledge‑based questions jumped from 68 % to 92 %, cutting manual ticket volume by 35 %. I learned that treating long‑term memory as a structured fact store, coupled with efficient similarity search, is far more scalable than attempting to encode all domain knowledge in the model weights.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
