---
qid: ing_19571ad7d8__star__local
question: 'Explain: But what is a neural network? | Deep learning chapter 1'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 300
total_tokens: 540
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:20:03-05:00'
sources: []
---

**Situation**  
At my last internship I was tasked with predicting customer churn for a telecom client whose monthly reports were lagging by two weeks, costing them about $3 M in unnecessary retention spend.

**Task**  
I needed to build a model that could ingest 200+ behavioral features and output a churn probability within 24 hours of data ingestion, so the sales team could act immediately.

**Action**  
I sketched a feed‑forward neural network: an input layer for each feature, two hidden layers with ReLU activations (64→32 neurons), and a sigmoid output. Using TensorFlow I implemented dropout to mitigate overfitting and Adam optimizer with a learning rate of 0.001. I split the data 70/15/15 for train/validation/test, monitored AUC, and early‑stopped after three epochs of no improvement. The network learned non‑linear interactions (e.g., high usage + low plan change) that logistic regression missed.

**Result**  
The model achieved an AUC of 0.87 versus 0.78 for the baseline, reducing churn by 12% in a pilot test—saving roughly $360k annually. I learned that even simple dense nets can capture complex patterns when you carefully design architecture and training strategy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
