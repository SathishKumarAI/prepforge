---
qid: ing_9c9ec4db16__think__local
question: When would you fine-tune a model instead of using prompting or RAG?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 432
total_tokens: 626
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T11:25:26-05:00'
sources: []
---

**1️⃣ Clarify the goal and constraints**  
   - What is the target task (classification, generation, domain‑specific QA)?  
   - Do we have enough labeled data or only a few examples?  
   - Are latency, deployment size, or privacy limits important?

**2️⃣ Choose a mental model**  
   - *Prompting* → lightweight, zero‑shot/few‑shot, no extra training.  
   - *RAG (Retrieval‑Augmented Generation)* → adds external documents at inference time; good for up‑to‑date knowledge.  
   - *Fine‑tuning* → adapts the entire model to a distribution shift or specialized language.

**3️⃣ Step‑by‑step reasoning**  
   1. **Data availability**: if > ≈10k high‑quality labeled examples, fine‑tuning is viable.  
   2. **Domain specificity**: highly technical jargon or company policy → fine‑tune to embed it internally.  
   3. **Performance needs**: if prompting/RAG fails to hit the required accuracy/fluency, consider fine‑tuning.  
   4. **Latency & resource budget**: fine‑tuned smaller models can run on edge devices; large LLMs + RAG may be too heavy.

**4️⃣ Common traps**  
   - Assuming “more data = better” – noisy or biased data can degrade performance.  
   - Forgetting that fine‑tuning locks in the knowledge at training time, making updates costly.  
   - Overlooking privacy: fine‑tuning on sensitive corpora may inadvertently leak info.

**5️⃣ Sanity check & communicate**  
   - Verify that the chosen approach meets accuracy targets and respects constraints.  
   - Explain to stakeholders: “Fine‑tuning is ideal when we have ample domain data, need consistent internal behavior, and can tolerate the training cost; otherwise prompting or RAG offers quicker, lower‑cost solutions.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
