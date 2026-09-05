---
qid: ing_c627bebf4f__star__local
question: 'Explain: Title: Applying Deep Learning To Airbnb Search'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 312
total_tokens: 547
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:06:17-05:00'
sources: []
---

**Situation** – At a mid‑size travel tech startup I joined the search team when our click‑through rate for property listings had plateaued at 3.2 %. The recommendation engine was rule‑based and couldn’t adapt to evolving user preferences, especially during peak seasons.

**Task** – My goal was to boost CTR by 15 % while keeping latency under 200 ms on a production environment that served 1M requests/day.

**Action** – I designed a hybrid model: a lightweight transformer encoder fed with user session embeddings and property metadata (price, amenities, review sentiment). We trained it on a 10‑million query–listing pair dataset using PyTorch Lightning, employing mixed‑precision to cut GPU memory by 40 %. For inference, I distilled the transformer into a single dense layer and deployed it via TensorRT on our Kubernetes cluster. To monitor drift, I set up an online A/B test with a real‑time feedback loop that retrained the model weekly.

**Result** – The new engine lifted CTR to 3.7 % (+15 %), reduced page load time by 25 ms, and cut server costs by 12 % thanks to the distilled model. I learned how to balance sophisticated deep learning with strict production constraints and the importance of continuous evaluation in a live search system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
