---
qid: ing_91983954dd__star__local
question: 'Explain: LLM-based evals (slower, but handles nuance)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 291
total_tokens: 531
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:23:52-05:00'
sources: []
---

**Situation:**  
In my last role at a fintech startup, we had to evaluate our newly released chatbot for compliance with regulatory language. The existing rule‑based engine flagged too many false positives and missed subtle phrasing that could trigger legal issues.

**Task:**  
I was tasked with designing an evaluation framework that would accurately capture nuance in user queries while staying within our nightly batch processing budget of 4 hours.

**Action:**  
I chose a hybrid approach: first, I ran all conversations through a lightweight keyword matcher to filter obvious violations. For the remaining 30% of cases, I deployed a fine‑tuned GPT‑4 model on a GPU cluster, using prompt engineering to focus on context and intent. To keep it within time limits, I set a per‑query token cap of 512 and implemented batch inference with 16‑worker pipelines. I also built an automated metric that compared the LLM’s flagged outputs against human‑annotated ground truth, logging precision/recall for continuous improvement.

**Result:**  
The hybrid system reduced false positives by 45% and increased compliance detection accuracy from 78% to 92%. The nightly run stayed under the 4 hour window. I learned that slower, context‑aware LLM evaluations can be practical when combined with efficient pre‑filtering and careful resource management.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
