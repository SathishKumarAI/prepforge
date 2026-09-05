---
qid: ing_1032b29390__eli5__local
question: 'Explain: ROUGE (Summarization) — Llm Evaluation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 197
total_tokens: 357
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:00:58-05:00'
sources: []
---

Think of ROUGE like a “taste test” for a recipe book that’s been translated into another language.  
The original summary is the *reference* dish, and the model’s generated summary is the *tasted* version.  
ROUGE counts how many “flavor notes” (words or short phrases) from the reference appear in the tasted version.  
If the tasting contains most of those notes, the recipe was translated well; if it misses many, something went wrong.  

In practice, ROUGE measures overlap of exact word sequences (unigrams, bigrams, etc.) between the two texts. The higher the overlap percentage, the closer the model’s summary is to a human‑written one. It’s simple, fast, and works for any language—just like checking whether a copy still tastes like the original dish.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
