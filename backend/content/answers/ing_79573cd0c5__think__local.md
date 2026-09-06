---
qid: ing_79573cd0c5__think__local
question: 'Explain: Week 2 - Context: prompting, RAG, fine-tuning'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 513
total_tokens: 707
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T09:02:10-05:00'
sources: []
---

**1️⃣ Clarify the scope and assumptions**  
- *Audience*: beginners in NLP/AI who know basic LLMs but not deeper techniques.  
- *Goal*: explain “Week 2 – Context: prompting, RAG, fine‑tuning” as a learning chunk, not a full course.  
- Assume they’re familiar with the term “prompt”, but not the nuances of retrieval‑augmented generation (RAG) or model fine‑tuning.

**2️⃣ Adopt a mental framework**  
Use the **“Input → Process → Output” triangle**:  
1. *Contextual input* (prompting, external docs).  
2. *Model processing* (how LLM uses that context).  
3. *Resulting output* (response quality).  
Map RAG and fine‑tuning onto this flow: both modify the “input” or the model’s internal weights to improve the final answer.

**3️⃣ Step‑by‑step reasoning**  
- **Prompting**: show how wording, length, chain‑of‑thought affect LLM behavior. Illustrate with examples (e.g., “Explain…”, “List steps…”).  
- **Fine‑tuning**: explain that it retrains the base weights on a domain‑specific corpus; highlight when it’s useful (domain jargon, style). Mention data requirements and overfitting risk.  
- **RAG**: describe retrieving external documents at inference time, embedding‑based similarity, feeding retrieved passages into the prompt. Contrast with fine‑tuning: RAG keeps base weights unchanged but enriches context on demand.

**4️⃣ Common traps to avoid**  
- Confusing *prompt engineering* with *fine‑tuning*.  
- Assuming RAG always outperforms fine‑tuning; in practice, it depends on data size and latency.  
- Overlooking the need for a robust retrieval index (vector DB) when explaining RAG.

**5️⃣ Sanity‑check & verbalize**  
- Verify that each concept links back to “improving answer relevance”.  
- Use analogies: prompt = recipe, fine‑tuning = chef’s personal seasoning, RAG = chef pulling fresh ingredients from a pantry.  
- End with a quick recap: “Prompt → immediate tweak; Fine‑tune → long‑term model shift; RAG → on‑the‑fly knowledge injection.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
