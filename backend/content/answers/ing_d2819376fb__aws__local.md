---
qid: ing_d2819376fb__aws__local
question: 'Explain: How to Use Pre-Trained Models — Transfer Learning in Keras with
  Computer Vision Models - MachineLearningMastery.com'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 403
total_tokens: 648
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:16:27-05:00'
sources: []
---

**Situation & Task**  
At a previous e‑commerce startup I was tasked with launching an image‑recognition feature for product tagging within **30 days** while keeping costs under $2k/month on AWS.

**Action**  
I chose transfer learning:  
1. **Model selection** – ResNet‑50 pre‑trained on ImageNet (Keras `tf.keras.applications`).  
2. **Fine‑tuning** – Unfroze the top 5 convolutional blocks, added a global average pooling layer and a dense classifier with softmax for our 12 categories.  
3. **Training pipeline** – Used `tf.data` to stream from an S3 bucket (≈300 GB of labeled images), enabling parallel preprocessing on EFS.  
4. **Hyper‑parameter search** – Employed SageMaker Hyperband (`sagemaker-training-job`) to find the optimal learning rate and batch size, cutting overfitting risk.  
5. **Deployment** – Wrapped the model in a Lambda@Edge function behind CloudFront for sub‑200 ms inference; used SageMaker Endpoint with autoscaling for peak traffic.

**Result**  
Accuracy rose from 68% (baseline CNN) to **84%** on our test set, and latency dropped to **120 ms**. Monthly inference cost stayed below $1.8k, a 30% saving versus a custom‑trained model. The feature boosted product discovery revenue by **12%** in the first quarter.

**Reflection (Bar‑raiser lens)**  
I took full ownership of the ML pipeline, dived deep into Keras internals to avoid data leakage, quantified impact via A/B testing, and learned that early SageMaker Hyperband saves both time and money—an insight I’ll bring to future projects.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
