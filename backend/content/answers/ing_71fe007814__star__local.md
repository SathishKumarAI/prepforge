---
qid: ing_71fe007814__star__local
question: Why do you deduplicate fine-tuning data, and how would you actually do it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 364
total_tokens: 607
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:15:19-05:00'
sources: []
---

**Situation** – In my last role at a fintech startup, we were building an AI‑driven fraud detection model. The training set consisted of over 12 million transaction logs scraped from our internal ledger and third‑party feeds. Early experiments showed a plateau in accuracy after the first 3 million examples, and perplexity spikes during validation.

**Task** – I needed to clean the dataset so that each unique transaction pattern contributed only once, thereby reducing noise, preventing overfitting to repetitive patterns, and keeping training time manageable.

**Action** – First, I hashed the concatenated fields (merchant ID, amount bucket, timestamp bucket, device fingerprint) using SHA‑256 and stored them in a Redis set for O(1) lookup. While streaming data into our preprocessing pipeline, I dropped any row whose hash already existed. To handle near‑duplicates (e.g., identical amounts but different timestamps), I applied a locality‑sensitive hashing (LSH) scheme on the feature vectors to catch 95 % of similar records within a 0.1 Hamming distance threshold. The deduplication step ran in under 4 hours on an EC2 m5.large instance.

**Result** – After deduplication, the training set shrank to 7.8 million unique samples, reducing GPU memory usage by ~30 %. Validation accuracy jumped from 87.3 % to 92.1 %, and inference latency dropped 12 %. I learned that careful hashing plus LSH can efficiently prune redundant data without manual curation, a technique I now apply to every new model pipeline.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
