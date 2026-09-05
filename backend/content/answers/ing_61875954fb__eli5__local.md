---
qid: ing_61875954fb__eli5__local
question: 'Explain: RAGAS Metrics — Llm Evaluation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 274
total_tokens: 431
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:11:07-05:00'
sources: []
---

Think of an **LLM (large language model)** as a chef who has to cook dishes (answers) from a recipe book (training data).  
When we want to know how good the chef is, we don’t just taste one dish; we run a *menu* of tests that check different parts of cooking: flavor, presentation, timing, and consistency.  

**RAGAS** is such a menu for LLMs. It stands for **Retrieval‑Augmented Generation Assessment Suite**, a set of simple scores that look at three things:

1. **Relevance** – Does the answer actually address the question? (Like checking if the dish uses the right ingredients.)  
2. **Accuracy** – Is the information factually correct? (Like verifying the recipe’s measurements.)  
3. **Faithfulness** – Does the model stay true to its source material and not hallucinate? (Like ensuring the chef didn’t add extra spices that weren’t in the recipe.)

Each score is a quick, easy‑to‑understand number between 0 and 1. By combining them, we get a clear picture of whether an LLM is a reliable, honest, and useful “chef” for real‑world tasks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
