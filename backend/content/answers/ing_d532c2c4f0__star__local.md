---
qid: ing_d532c2c4f0__star__local
question: Your annotators have no ground truth - the tasks are subjective preference
  judgments. How do you measure and improve label quality?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 337
total_tokens: 586
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:35:25-05:00'
sources: []
---

**Situation:**  
In a recent project for a recommendation engine, we hired a team of crowd‑source annotators to rate how well images matched user-generated captions. The judgments were highly subjective—there was no single “correct” label and the initial quality score hovered around 0.55 Cohen’s κ.

**Task:**  
I needed to raise inter‑annotator agreement to at least 0.75 while keeping turnaround time under three days per batch, so we could ship a better training set for our deep‑learning model.

**Action:**  
First, I introduced a calibration phase: each annotator rated a small gold‑standard set and received instant feedback with the majority opinion highlighted. Next, I implemented a “gold question” mechanism that inserted hidden sanity checks every 10 items; if an annotator missed more than two, their batch was automatically flagged for review. I also built a lightweight web dashboard that visualized each worker’s agreement curve in real time, allowing us to spot drifts and re‑train underperformers quickly. Finally, I added a consensus step: for any disagreement beyond a 2‑point margin on the 5‑point Likert scale, we automatically routed the item to a senior reviewer.

**Result:**  
Within two weeks, κ rose from 0.55 to 0.78, and labeling throughput improved by 18 %. I learned that combining micro‑feedback with real‑time analytics turns subjective tasks into reliably reproducible data streams, which is crucial when training high‑stakes AI models.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
