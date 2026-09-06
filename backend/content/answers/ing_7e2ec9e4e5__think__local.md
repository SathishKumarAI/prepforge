---
qid: ing_7e2ec9e4e5__think__local
question: When would you choose RAG vs long-context stuffing vs fine-tuning?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 193
output_tokens: 410
total_tokens: 603
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T09:21:01-05:00'
sources: []
---

**1. Clarify the goal and constraints**  
   - What kind of content is needed (ad‑hoc answers vs consistent brand voice)?  
   - How much training data exists?  
   - Are latency, cost, or regulatory compliance priorities?  

**2. Adopt a decision framework**  
   - *Data volume & quality*: “lots of labeled data → fine‑tune”; “little data but need quick updates → RAG”.  
   - *Context length*: “need > 8k tokens in one prompt → long‑context stuffing”.  
   - *Dynamic knowledge*: “information changes daily → RAG”.

**3. Reason through each option**  
   1. **Fine‑tuning**: Good for stable, domain‑specific style; requires compute and data.  
   2. **RAG (Retrieval Augmented Generation)**: Adds a retrieval step to pull in up‑to‑date facts; cheaper but adds latency.  
   3. **Long‑context stuffing**: Simply pad the prompt with past dialogue or documents; simplest, no extra models, but can hit token limits and degrade quality.

**4. Avoid common traps**  
   - Don’t pick RAG just because it “sounds modern”; if your data is static, fine‑tuning may be simpler.  
   - Don’t over‑pad prompts expecting the model to remember everything—token budgets matter.  
   - Remember that fine‑tuned models are harder to update; consider a hybrid (fine‑tune + RAG).

**5. Sanity‑check & communicate**  
   - List each requirement and map it to an option’s strengths/weaknesses.  
   - Explain trade‑offs: cost vs accuracy, latency vs freshness.  
   - Conclude with the recommendation that matches the highest‑priority constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
