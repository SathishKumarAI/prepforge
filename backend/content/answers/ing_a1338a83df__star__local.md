---
qid: ing_a1338a83df__star__local
question: 'Explain: Component-Level Evaluation — Rag Evaluation Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 332
total_tokens: 566
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:55:04-05:00'
sources: []
---

**Situation:**  
At my last company we launched a chatbot that used Retrieval-Augmented Generation (RAG) to pull up-to-date policy documents for customer support. Within two weeks, our internal audit flagged that the model’s answers were sometimes citing outdated sections, hurting compliance scores.

**Task:**  
I had to design a component‑level evaluation framework that would let us isolate and validate each part of the RAG pipeline—retrieval, ranking, and generation—so we could quickly pinpoint failures before they reached users.

**Action:**  
First, I set up automated unit tests for the retriever using BM25 on an Elasticsearch index, measuring Recall@10 against a curated gold‑standard query set. For ranking, I introduced a lightweight neural reranker (BERT‑based) and evaluated it with Mean Reciprocal Rank (MRR). Finally, I wrapped the generator in a prompt‑template checker that scored factual consistency using OpenAI’s GPT-4 “truthfulness” API. All tests ran nightly on our CI/CD pipeline; any drop below 95 % recall or 0.8 MRR triggered an alert.

**Result:**  
After two iterations, recall rose from 88 % to 96 %, and the generator’s factuality score improved by 12 %. The compliance audit passed with no infractions, and we reduced support tickets related to misinformation by 35 %. I learned that breaking down RAG into testable micro‑components gives you granular visibility and faster remediation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
