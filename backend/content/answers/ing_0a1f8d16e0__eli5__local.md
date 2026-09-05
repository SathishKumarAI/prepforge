---
qid: ing_0a1f8d16e0__eli5__local
question: How would you evaluate multilingual retrieval quality - a customer's employees
  query in French and Korean over mostly-English documents?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 261
total_tokens: 429
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:51:40-05:00'
sources: []
---

Imagine your company’s knowledge base is a huge library that mostly holds English books, but some shelves are marked “French” and others “Korean.” A customer employee (the reader) wants to find the right book in their own language, even though most of the text inside is English.  

To judge how well the AI can do this, first let the reader ask a question in French or Korean. The AI must *retrieve* (find) all relevant passages from the library and then *translate* them into the user’s language so the answer makes sense.  

**Evaluation steps**

1. **Relevance check** – Does the set of retrieved passages cover the facts needed to answer the question?  
2. **Language fidelity** – Are the translations accurate enough that a native speaker would understand them without confusion?  
3. **Coverage balance** – Does the AI lean too heavily on English passages that may miss cultural nuances in French or Korean?

A simple test: give the same question in both languages, then compare the two answer sets. If they’re almost identical in meaning and feel natural to speakers of each language, your multilingual retrieval is working well.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
