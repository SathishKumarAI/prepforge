---
qid: ing_1a15571bd2__star__local
question: 'Explain: Evaluating and Debugging Generative AI - DeepLearning.AI'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 344
total_tokens: 584
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:21:32-05:00'
sources: []
---

**Situation:**  
In a product‑safety audit for our chatbot, the generated responses were drifting toward disallowed content and occasional hallucinations, violating our compliance SLA of <0.5% unsafe outputs.

**Task:**  
I had to evaluate the model’s output quality, isolate failure modes, and implement fixes so that the safety metric dropped below 0.1% while keeping latency under 200 ms per request.

**Action:**  
First, I built a test harness that ran 10k prompts from our production queue through the current transformer (GPT‑3.5‑Turbo) and logged token‑level confidence scores and toxicity flags. Using perplexity analysis, I pinpointed high‑entropy regions where the model was most prone to hallucinate. Then I added a two‑stage filtering pipeline: a lightweight LSTM classifier for early detection of low‑confidence outputs, followed by a rule‑based post‑processor that replaced or re‑generated flagged tokens. I also fine‑tuned a small BERT model on our own safety dataset to calibrate the confidence thresholds. Finally, I deployed A/B tests in staging and monitored the safety metric via Grafana dashboards.

**Result:**  
The unsafe output rate fell from 0.47% to 0.08%, a 83% improvement, while inference latency increased by only 15 ms on average. I learned that combining statistical confidence with lightweight classifiers can efficiently surface hallucinations without heavy model retraining, and that continuous monitoring is essential for maintaining safety in generative systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
