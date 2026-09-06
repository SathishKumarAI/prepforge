---
qid: ing_f4bc139ea5__think__local
question: 'Explain: Query Classification with TransformersTextRouter and TransformersZeroShotTextRouter'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 193
output_tokens: 449
total_tokens: 642
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T17:09:34-05:00'
sources: []
---

**1️⃣ Clarify the problem & set assumptions**  
- *What is “query classification” in this context?* Assume we’re mapping free‑text user queries to a small set of intent labels (e.g., “OrderStatus”, “ProductInfo”).  
- *What are TransformersTextRouter and TransformersZeroShotTextRouter?* Treat them as two routing layers that use pretrained transformer encoders; one fine‑tuned on labeled data, the other zero‑shot via prompt engineering.  

**2️⃣ Adopt a layered mental model**  
1. **Encoding layer** – convert text to contextual embeddings (BERT/Roberta).  
2. **Scoring layer** – compute similarity or logits against label prototypes.  
3. **Decision layer** – pick the highest‑scored intent, optionally thresholding for “unknown”.  

**3️⃣ Step‑by‑step reasoning**  
- *TransformersTextRouter*: fine‑tune on a labeled corpus → embeddings are directly trained to separate intents → fast inference, high accuracy if data is sufficient.  
- *TransformersZeroShotTextRouter*: no fine‑tuning; craft label prompts (e.g., “Is this about product info?”) → feed query + prompt into the transformer → cosine similarity between query embedding and prompt embeddings → classify without labeled examples.  

**4️⃣ Avoid common pitfalls**  
- Don’t assume zero‑shot will always outperform fine‑tuned models—prompt wording matters a lot.  
- Beware of label imbalance in fine‑tuning; use class weights or oversampling.  
- Remember that transformers can be large; consider distillation if latency is critical.  

**5️⃣ Sanity‑check & verbalize**  
- Verify with a toy example: give a query, show its embedding, compute similarity to each label prompt, and explain the chosen intent.  
- Highlight trade‑offs (accuracy vs data requirement) so the audience grasps why one router might be preferred over the other in different deployment scenarios.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
