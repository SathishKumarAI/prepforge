---
qid: ing_97ee169c43__star__local
question: 'Explain: Known Biases and Mitigations — Rag Evaluation Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 360
total_tokens: 598
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:36:29-05:00'
sources: []
---

**Situation:**  
When I joined a fintech startup, we were building an AI‑powered customer support bot that used Retrieval Augmented Generation (RAG) to pull policy documents from our internal knowledge base and generate responses in real time. Early user tests revealed that the bot frequently repeated outdated policies and over‑reliance on certain document sources, leading to a 35 % drop in user satisfaction scores.

**Task:**  
My goal was to identify the underlying biases in the RAG pipeline—both retrieval bias toward high‑ranked but stale documents and generation bias where the language model favored familiar phrasing—and implement robust mitigations that would keep the bot’s answers accurate, up‑to‑date, and diverse.

**Action:**  
I first added a recency weighting factor to the BM25 scorer in Elasticsearch so newer documents were prioritized. Then I introduced a diversification step that limited the same source from dominating more than two consecutive retrievals. For generation bias, I fine‑tuned the transformer on a curated corpus of policy updates and applied temperature tuning to encourage varied phrasing. Finally, I set up an automated evaluation script that ran every 24 hours, comparing bot responses against a gold‑standard set and flagging any drift beyond a 2 % threshold.

**Result:**  
Within three weeks, the bot’s accuracy improved from 68 % to 92 %, user satisfaction rose by 27 %, and the number of support tickets decreased by 18 %. I learned that continuous monitoring and dynamic weighting are essential in RAG systems to counter both retrieval and generation biases.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
