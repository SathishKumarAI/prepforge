---
qid: ing_afbdd67eef__eli5__local
question: 'Explain: Q: Compare MHA, GQA, and MQA. — Attention Mechanisms'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 274
total_tokens: 440
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:15:52-05:00'
sources: []
---

Think of a classroom where the teacher (the model) wants to answer a student’s question.  
**Multi‑Head Attention (MHA)** is like the teacher asking several helpers at once—each helper looks at the question from a different angle (e.g., grammar, context, tone). All their answers are combined so the final reply feels richer and more nuanced.

**Global Query Attention (GQA)** is when the teacher focuses on one particular student’s question but lets every other part of the class contribute. It gathers information from *all* sentences in the passage to answer that single query, giving a broad view of the whole text.

**Masked Query Attention (MQA)** works like the teacher only listening to the parts of the conversation that come before the current sentence, ignoring anything that follows. This is useful when you want to predict the next word or keep earlier context in mind without being distracted by future words.

So MHA spreads attention across many “heads” for depth, GQA pulls in all information for a single query, and MQA keeps the focus on past context while answering.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
