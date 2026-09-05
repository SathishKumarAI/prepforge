---
qid: vq_b206fcd566__star__local
question: What is a Neural Network, and how does it work?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 330
total_tokens: 567
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:15:20-05:00'
sources: []
---

**Situation**  
At my previous company we were building an internal tool to predict customer churn for a telecom client. The data science team needed a model that could be explained to the product managers, but most of them only understood high‑level statistics, not deep learning jargon.

**Task**  
I was tasked with designing a neural network prototype and translating its workings into plain English so everyone could see why it mattered and how we’d evaluate it.

**Action**  
I built a three‑layer feed‑forward model in TensorFlow: an input layer for 30 customer features, one hidden layer of 64 ReLU units, and a sigmoid output. I used dropout (0.2) to avoid overfitting and Adam optimizer with binary cross‑entropy loss. To explain it, I compared each neuron to a “decision rule” that combines inputs; the hidden layer learns complex patterns like “high data usage + long contract = higher churn risk.” I visualized weight heatmaps so stakeholders could see which features mattered most, and I ran SHAP analysis to show feature importance per prediction.

**Result**  
The model achieved 82 % AUC on the test set, beating our baseline logistic regression by 7 points. The product team felt confident deploying it in their dashboard because they understood how each input influenced risk scores. I learned that demystifying neural nets with analogies and visual tools turns a technical “black box” into an actionable business asset.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
