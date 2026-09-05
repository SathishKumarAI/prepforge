---
qid: ing_4a0055358d__star__local
question: 'Explain: Synthetic Test Generation with RAGAS — Rag Evaluation Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 348
total_tokens: 586
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:56:24-05:00'
sources: []
---

**Situation:**  
In my last role at a fintech startup, we were launching an AI-powered customer support chatbot that relied on Retrieval-Augmented Generation (RAG). Our QA team struggled to cover edge cases in the knowledge base because it was constantly evolving with new policy documents and user FAQs.

**Task:**  
I had to build a scalable synthetic test generation pipeline that could automatically produce realistic queries, retrieve relevant passages, generate answers, and evaluate them against ground truth using RAGAS (RAG Evaluation Patterns). The goal was to maintain at least 90 % recall of critical policy information while keeping the test suite under two hours of runtime.

**Action:**  
I scripted a data‑driven generator in Python that sampled from real user logs, added controlled perturbations (typos, synonyms), and fed each prompt into our RAG model. For evaluation I implemented RAGAS’s *retrieval* and *generation* metrics: recall@k for passage hits and BLEU/F1 for answer quality. I also set up a CI job that ran the pipeline nightly, storing results in an InfluxDB dashboard for trend analysis.

**Result:**  
The synthetic suite uncovered 17 previously unseen policy gaps, improving our coverage from 78 % to 92 %. Test runtime dropped by 35 %, and we reduced manual QA effort by 40 %. I learned that coupling realistic query generation with RAGAS’s modular metrics gives a clear, actionable view of both retrieval fidelity and answer quality in dynamic knowledge bases.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
