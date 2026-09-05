---
qid: ing_6942ce25d8__star__local
question: 'Explain: Avoiding Data Disasters — fast.ai\u2014Making neural nets uncool
  again \u2013 fast.ai'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 311
total_tokens: 561
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:57:40-05:00'
sources: []
---

**Situation** – In my last role, we were training a vision model on a public dataset that contained mislabeled images and a few corrupted files. The initial accuracy plateaued at 68 % and our validation loss spiked every time we added more data.

**Task** – I had to clean the dataset, prevent future corruption, and ensure reproducible training runs without manual oversight.

**Action** – First, I wrote a custom `Dataset` subclass that wrapped fast.ai’s `ImageDataLoaders`. It streamed images through Pillow, caught `IOError`s, and logged any failed loads. I added a checksum verification step using SHA‑256 to detect duplicates or altered files before the first epoch. For mislabeled samples, I implemented an automated active‑learning loop: after each epoch, fast.ai’s `ModelMetrics` flagged low‑confidence predictions; those images were sent to a small annotation team for quick review and relabeling. Finally, I versioned every dataset split with DVC so any rollback was instant.

**Result** – The cleaned dataset lifted validation accuracy to 84 % within two weeks, and the checksum guard reduced data loading errors from 12 % to <0.1 %. We cut manual cleaning time by 70 %, learned that automated integrity checks are essential, and now every training run starts with a verified “clean” data pipeline.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
