---
qid: ing_7bca0f5ef1__star__local
question: 'Explain: Create prompt — Ai Evals Complete Guide Langwatch Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 343
total_tokens: 583
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:41:28-05:00'
sources: []
---

**Situation:**  
At my previous company we launched an internal chatbot that answered employee policy questions. After a few weeks the accuracy rate dropped to 78% because new policies were added, but our training data hadn’t been updated.

**Task:**  
I needed to create a reusable prompt framework that could automatically evaluate and improve the model’s responses using LangWatch for monitoring and LangFuse for dynamic context injection.

**Action:**  
First I built a LangWatch dashboard to capture real‑time metrics (accuracy, latency, sentiment). Then I designed an evaluation prompt template: “Given the policy excerpt below and user query X, produce a concise answer. If unsure, say ‘I’m not certain’.” I wrapped this in a LangFuse flow that pulls the latest policy text from our knowledge base via API calls, injects it into the prompt, and sends it to the LLM. The output is parsed back into LangWatch for scoring against ground‑truth answers stored in a CSV. I added a feedback loop: every low‑score instance triggers an automatic retraining job that augments the fine‑tuning dataset.

**Result:**  
Within two weeks the chatbot’s accuracy rose from 78% to 94%, and response latency stayed under 200 ms. The LangWatch visualizations also revealed that only 3% of queries required a fallback, so we could safely reduce manual review effort by 70%. I learned how tightly coupling evaluation tools with prompt engineering dramatically speeds iteration and ensures measurable quality gains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
