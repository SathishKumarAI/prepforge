---
qid: ing_2cb403654c__star__local
question: 'Explain: String — Topleetcodeproblems'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 444
total_tokens: 679
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:57:20-05:00'
sources: []
---

**Situation** – During my final semester project I had to build a sentiment‑analysis model on Twitter data. The raw tweets were noisy: emojis, URLs, mentions, and hashtags cluttered the text. When I benchmarked the preprocessing pipeline, it was taking over 30 seconds per batch, which stalled hyperparameter tuning.

**Task** – I needed to clean and normalize the strings efficiently so that the feature extraction step (TF‑IDF + word embeddings) could run under a minute for each epoch while preserving linguistic nuance.

**Action** – I scoped the most common LeetCode string problems—“Longest Substring Without Repeating Characters,” “Regular Expression Matching,” and “Wildcard Matching”—to inspire solutions. Using Python’s `re` module, I built a single-pass tokenizer that:  
1. Stripped URLs via a regex pattern borrowed from the “URL Parser” problem.  
2. Replaced emojis with descriptive tokens using a lookup table (akin to solving “Replace All Digits”).  
3. Normalized hashtags and mentions by removing the `#`/`@` prefix but retaining the word, mirroring the “Remove Duplicates” strategy.

I then profiled the pipeline; the total preprocessing time dropped from 30 s to 4 s per batch—a 87% speed‑up—while the downstream model’s F1 score improved by 3 points due to cleaner inputs.

**Result** – The project finished two weeks early, and I learned that mapping classic string‑algorithm patterns onto real‑world text preprocessing can dramatically cut latency without sacrificing accuracy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
