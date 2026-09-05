---
qid: ing_7255e7187d__star__local
question: 'Explain: Back of the Envelope Calculation in System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 342
total_tokens: 579
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:15:55-05:00'
sources: []
---

**Situation** – In my last role I was tasked with estimating how many GPU hours a new recommendation model would need for training on our production data set of 120 million user interactions.

**Task** – The interview panel wanted to see if I could quickly assess feasibility: “Give me an order‑of‑magnitude estimate and explain your reasoning.”

**Action** – I broke it down into three simple steps. First, I estimated the dataset size: each interaction record is ~200 bytes, so 120 M × 200 B ≈ 24 GB. Next, I looked at our baseline model: a transformer with 12 layers and 32 k parameters takes about 2 hours to train on 10 GB of data on an NVIDIA A100 (≈ 40 TFLOPs). Scaling linearly, 24 GB would need roughly 6 hours. Then I added a safety factor for hyper‑parameter sweeps and model complexity increases—multiplying by 1.5 gives ~9 GPU hours. Finally, I compared that to our budget of 8 GPU hours per week, concluding we’d need to extend the schedule or use distributed training.

**Result** – The interviewers appreciated the clear logic; I was asked to provide a more detailed estimate later and ultimately secured a spot on the team. I learned that framing the problem into data size → compute per GB → safety margin lets me deliver quick, credible numbers without deep profiling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
