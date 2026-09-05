---
qid: ing_231289ae48__eli5__local
question: 'Explain: Custom Evaluator Pattern — Rag Evaluation Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 291
total_tokens: 448
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:31:53-05:00'
sources: []
---

Think of a **Custom Evaluator** as the *judge* in a courtroom that decides whether an answer is good enough.  
In Retrieval‑Augmented Generation (RAG), the system first pulls documents from a knowledge base, then asks a language model to write an answer. The judge’s job is to look at both the answer and the documents it was built on, and say “Yes, this matches what the evidence says” or “No, it misses something.”

A **Rag Evaluation Pattern** is just a set of rules that tells the judge how to weigh things:

1. **Relevance check** – does the answer cite facts found in the retrieved docs?  
2. **Accuracy check** – are those facts correct (e.g., no invented dates)?  
3. **Completeness check** – did it cover all parts of the question?

You can hand‑craft these rules yourself, or let the system learn them from examples—this is the “custom” part. The judge then returns a score (or pass/fail) that tells developers how well the RAG model is doing.

So imagine building a smart assistant: you give it documents, ask it to answer, and a custom evaluator watches over the process like a careful referee, ensuring every answer is grounded in reliable evidence before it reaches the user.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
