---
qid: ing_b5e2797220__star__local
question: 'Explain: Roles & titles they hire — Glean'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 356
total_tokens: 591
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:35:03-05:00'
sources: []
---

**Situation** – At Glean’s rapid‑growth phase, we needed to launch a generative‑AI search engine by Q4. Our existing data‑engineering team handled ingestion, but no one had the product or ML expertise to turn raw embeddings into a user‑centric experience.  

**Task** – Build a cross‑functional squad that could design, train, and ship an AI model while keeping latency under 200 ms and accuracy above 90% recall for enterprise queries.  

**Action** – I drafted a hiring matrix:  
- *ML Lead* (senior researcher with TensorFlow & PyTorch experience) to architect the transformer pipeline.  
- *Data Engineer* focused on feature‑store design, leveraging Feast for real‑time updates.  
- *Full‑stack ML Engineer* (Python/React) to build the inference microservice and integrate it into Glean’s UI.  
- *Product Manager* with AI domain knowledge to translate business metrics into model KPIs.  
I used a two‑round interview: first, a technical sprint on a toy dataset; second, a design challenge where candidates mapped user stories to ML features. We also ran an internal “AI‑demo” hackathon to assess collaboration and speed.  

**Result** – The squad launched the search feature 3 weeks ahead of schedule, achieving 92% recall and 180 ms latency in production. Within six months, usage grew 45%, and we cut support tickets by 30%. I learned that precise role titles aligned with concrete deliverables accelerate hiring and reduce onboarding friction.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
