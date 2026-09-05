---
qid: ing_6fe61ff86a__star__local
question: 'Explain: A user reports the RAG assistant gave a wrong answer. Walk me
  through your triage.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 294
total_tokens: 540
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:10:40-05:00'
sources: []
---

**Situation:**  
Last month our RAG‑based customer support bot answered a query about data retention policy for a financial client. The user flagged the answer as incorrect because it referenced an outdated regulation that had been superseded.

**Task:**  
I needed to triage the issue, identify whether the fault was in the retrieval step, the generative layer, or our knowledge base, and restore accurate answers while preventing future slips.

**Action:**  
First I logged the user’s exact prompt and retrieved the bot’s response log. Using our logging dashboard I traced back to the vector store hit: a stale policy document still indexed under “retention‑policy-2020”. I updated the index by re‑ingesting the latest 2023 compliance PDF, ensuring the embedding was generated with the same model (OpenAI‑gpt‑4o). Next, I ran a unit test against the same prompt to confirm the new answer matched the current regulation. Finally, I added an automated alert that flags any retrieval hit older than one year for review.

**Result:**  
The corrected answer was returned within 12 minutes, and we logged a 30% reduction in similar complaints over the next month. I learned that maintaining index freshness is as critical as model accuracy, and that proactive audit pipelines can catch these drift issues before users notice.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
