---
qid: ing_e8e5c58d43__eli5__local
question: 'Explain: ​ Evaluation types — Evaluation concepts - Docs by LangChain'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 239
total_tokens: 399
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:43:56-05:00'
sources: []
---

Think of an AI model as a recipe‑book that can cook dishes (answers) for you. **Evaluation** is like a food critic tasting the dish and giving feedback so the chef can improve.

There are two main kinds of evaluation:

1. **Automatic (objective) tests** – The critic uses a set of standard questions (like a checklist). For each answer, a computer compares it to the “perfect” answer you already have and scores how close it is. This is fast but only checks what the test can measure.

2. **Human (subjective) reviews** – Real people read the AI’s answers and judge quality: are they clear, helpful, or even safe? They write notes that the model can learn from. This takes longer but captures nuance that a computer can’t see.

LangChain’s “Evaluation concepts” library bundles these tools so developers can plug in either type (or both) when building chatbots, summarizers, or any AI‑powered app. It’s like giving your recipe book both a standardized taste test and a friendly feedback loop from diners.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
