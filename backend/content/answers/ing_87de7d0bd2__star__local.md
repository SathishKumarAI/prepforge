---
qid: ing_87de7d0bd2__star__local
question: 'Explain: Prompt Tuning — Welcome - GraphRAG'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 354
total_tokens: 591
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:04:23-05:00'
sources: []
---

**Situation:**  
At my last role I was tasked with improving the answer accuracy of our knowledge‑graph–augmented retrieval system (GraphRAG) for a client’s internal FAQ chatbot. The baseline model answered 68 % of user queries correctly, and latency was a concern because each request triggered a heavy graph traversal.

**Task:**  
I needed to boost top‑k recall to at least 85 % while keeping inference time under 200 ms per query, without retraining the large language model or rebuilding the graph index.

**Action:**  
I introduced prompt tuning: I kept the frozen pre‑trained LLM (OpenAI GPT‑4o) and added a small trainable embedding layer that generates a “prompt vector” conditioned on the user’s question and a handful of relevant subgraphs. This vector is concatenated with the raw text prompt sent to the model. Using a few hundred labeled query–answer pairs, I fine‑tuned only 8 k parameters (the prompt encoder) via AdamW, training for 3 epochs on an A100 GPU. I also experimented with temperature and top‑p sampling to balance precision and diversity.

**Result:**  
The tuned system raised recall from 68 % to 87 % on a held‑out test set and reduced average latency from 280 ms to 180 ms thanks to the lightweight prompt embedding. I learned that careful conditioning of prompts can unlock significant performance gains without costly full model fine‑tuning, especially in graph‑augmented settings where context is sparse.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
