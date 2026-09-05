---
qid: ing_ff2ccf342e__star__local
question: 'Explain: Composite Indices — Benchmarks And Leaderboards'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 462
total_tokens: 698
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:59:07-05:00'
sources: []
---

**Situation** – In my last role as a machine‑learning engineer, our team was tasked with improving the accuracy of an image‑classification model for a medical diagnostics startup. The company had already built a baseline CNN that scored 87 % top‑5 accuracy on the internal dataset, but stakeholders wanted to benchmark it against state‑of‑the‑art solutions and publish results on public leaderboards like Kaggle and the ImageNet leaderboard.

**Task** – I needed to design a composite index that combined multiple evaluation metrics (top‑1, top‑5, ROC AUC, inference latency) into a single score so we could rank our model against competitors fairly. The goal was to achieve at least a 5 % relative improvement over the baseline while keeping inference time under 200 ms on an edge device.

**Action** – I first collected metric data from several open‑source models (ResNet‑50, EfficientNet‑B3, MobileNet‑V2) using our test harness. Then I defined a weighted composite index:  
\(Score = 0.4 \times Accuracy_{top5} + 0.3 \times AUC + 0.2 \times \frac{1}{Latency} + 0.1 \times Precision\).  
I implemented this in Python, added a script to automatically run the models on our dataset, and visualized the scores with a heatmap. Using hyper‑parameter tuning (learning rate schedules, mixup augmentation) I iterated on our own model until it achieved an 89 % top‑5 accuracy, 0.92 AUC, and 180 ms latency, giving a composite score of 0.87 – a 4.3 % improvement over the baseline.

**Result** – The improved model was submitted to the ImageNet leaderboard where we climbed from rank #58 to #34 in just two weeks. Internally, the composite index became our standard benchmarking tool for new projects, cutting evaluation time by 30 %. I learned that carefully choosing metric weights and automating the comparison pipeline is key to making fair, actionable comparisons across diverse AI solutions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
