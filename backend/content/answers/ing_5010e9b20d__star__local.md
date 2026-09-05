---
qid: ing_5010e9b20d__star__local
question: Why do LLMs use subword tokenization instead of whole words or raw characters?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 299
total_tokens: 542
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:08:28-05:00'
sources: []
---

**Situation:** In my last role as a NLP engineer at a fintech startup, we were integrating an open‑source LLM into our fraud detection system. The model had to process millions of transaction notes per day, and we noticed the inference latency was higher than acceptable.

**Task:** My goal was to reduce tokenization overhead while keeping vocabulary coverage high enough that the model didn’t miss rare fraud patterns hidden in uncommon words.

**Action:** I evaluated whole‑word vocabularies and raw‑character models. Whole words exploded the dictionary to 3 M tokens, causing GPU memory thrashing; character splits produced too many sub‑tokens (≈30 per word), inflating sequence length and latency. I chose a byte‑pair encoding (BPE) subword tokenizer with a 50k token limit. By training BPE on our transaction corpus, we captured frequent morphemes and preserved rare terms as few subwords. This reduced average tokens per note from 25 to 15 and cut inference time by ~35 %. I also added a fallback for unseen n‑grams that recombined into full words during post‑processing.

**Result:** The system processed 10× more notes per second, meeting SLA targets. I learned that subword tokenization balances vocabulary size, coverage, and computational efficiency—critical when scaling LLMs in production.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
