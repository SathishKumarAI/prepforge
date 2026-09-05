---
qid: ing_727558fa99__star__local
question: Your fine-tune gained 8 points on your benchmark. How do you know the gain
  is real and not contamination?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 344
total_tokens: 593
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:16:18-05:00'
sources: []
---

**Situation** – In a recent project I was fine‑tuning a transformer for medical text classification. After training on the full dataset, my model jumped from 78 % to 86 % F1 on the public leaderboard, an 8‑point gain that sounded too good to be true.

**Task** – I had to verify that this improvement wasn’t simply due to leakage or contamination between training and test data.

**Action** – First, I re‑segmented the corpus using a strict temporal split: all records before January 2024 for training, after for validation. Then I applied a 5‑fold stratified cross‑validation on the training set and logged per‑fold metrics to spot variance spikes. Next, I ran a permutation test by shuffling labels 1,000 times and retraining; none of the shuffled runs reached even 80 % F1. Finally, I inspected token overlaps with an external audit tool to ensure no identical n‑grams existed between splits.

**Result** – The cross‑validated mean stayed at 85.7 ± 0.4 %, and the permutation test gave p < 0.001, confirming the gain was statistically significant. I documented the entire pipeline in a reproducible notebook, learned that rigorous data hygiene is as critical as model tuning, and now always enforce temporal splits before claiming any benchmark jump.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
