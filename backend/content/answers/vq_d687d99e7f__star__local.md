---
qid: vq_d687d99e7f__star__local
question: What is the difference between the Sigmoid and Softmax functions?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 346
total_tokens: 584
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:21:50-05:00'
sources: []
---

**Situation** – In my last role I was building a multi‑label classification model for an e‑commerce recommendation engine. The dataset had 15 product categories per user, and the initial accuracy plateaued around 78 % after we added several dense layers.

**Task** – My goal was to improve the probability calibration of the output layer so that each category’s score reflected a true likelihood rather than just a relative ranking. I needed to decide between using a Sigmoid for each node or switching to Softmax across all categories.

**Action** – I set up a controlled experiment: first, I replaced the final linear layer with 15 independent Sigmoid units and trained on binary cross‑entropy. Then I swapped in a single Softmax over the 15 nodes and used categorical cross‑entropy. I logged per‑class precision/recall and plotted calibration curves (ECE). The key technical insight was that Sigmoid treats each label independently, ideal for multi‑label problems, while Softmax enforces a probability simplex, which can distort scores when labels are not mutually exclusive.

**Result** – After the switch to Sigmoid with an additional focal loss term, we lifted top‑1 accuracy to 84 % and reduced ECE from 0.12 to 0.04. The experiment taught me that choosing between Sigmoid and Softmax isn’t just a math trick; it hinges on label independence assumptions and the downstream use of probabilities.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
