---
qid: ing_6a324b5dd1__eli5__local
question: 'Explain: RAGAS Framework and Metrics — Rag Evaluation Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 240
total_tokens: 399
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:24:24-05:00'
sources: []
---

Think of a recipe book that tells you how to cook a dish (the AI model) but also lets you look up fresh ingredients in the pantry whenever you need them (retrieval‑augmented generation, or RAG). The **RAGAS framework** is like a set of kitchen rules that judges whether your dish turns out well. It breaks evaluation into three simple patterns:

1. **Relevance** – Do the retrieved ingredients actually fit the recipe?  
2. **Accuracy** – Are the final notes (the model’s answer) correct and trustworthy?  
3. **Coherence** – Does the whole meal taste smooth, with no abrupt flavor jumps?

For each pattern, RAGAS supplies a metric—think of it as a scorecard: relevance = how many pantry items match the dish; accuracy = percentage of facts that are true; coherence = how well the story flows. By checking all three, you can see if your AI “cooking” is not only tasty but also reliable and consistent.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
