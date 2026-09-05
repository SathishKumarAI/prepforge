---
qid: ing_1dbd42796a__star__local
question: 'Explain: Bonus: Compactifying sparse files using blockdiff'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 333
total_tokens: 570
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:29:13-05:00'
sources: []
---

**Situation** – In my last role I was responsible for a recommendation system that ingested nightly logs from millions of users. The raw log files were 200 GB each but only ~3 % of the rows contained actionable features, so storage and transfer costs were spiraling.

**Task** – Reduce the on‑disk footprint by at least 70 % while keeping read performance high enough for real‑time feature extraction during model training.

**Action** – I implemented a blockdiff compressor. First, I partitioned each log into fixed 4 MB blocks and computed a SHA‑256 hash of each. Identical hashes indicated identical blocks across files; I replaced duplicates with a single copy stored in a shared dictionary. For sparse blocks (mostly zeros), I used run‑length encoding before hashing to avoid false uniqueness. When writing the compacted file, I emitted a lightweight index mapping block offsets to dictionary positions. During training, the feature pipeline streamed only the needed blocks via memory‑mapped files, so latency stayed below 50 ms per user.

**Result** – The average file size dropped from 200 GB to 45 GB—a 77 % reduction—cutting storage costs by $18k/month. Training time improved by 12 % because the data loader skipped over empty blocks. I learned that combining block hashing with sparse awareness can dramatically shrink big‑data pipelines without sacrificing throughput.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
