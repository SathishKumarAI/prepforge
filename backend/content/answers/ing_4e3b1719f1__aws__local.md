---
qid: ing_4e3b1719f1__aws__local
question: 'Explain: Pre-Trained Model as Feature Extractor Preprocessor'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 370
total_tokens: 602
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:22:20-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> **Situation:** I led a project at my previous company where we needed to classify medical images into 12 diagnostic categories using a tight budget and a 4‑month deadline.  
> **Task:** The team had no in‑house ML expertise, so I proposed leveraging a pre‑trained CNN (ResNet‑50) as a feature extractor, feeding the activations into a lightweight logistic regression classifier.  
> **Action:**  
> *Implemented on AWS SageMaker, loading the ResNet model from the **SageMaker JumpStart** registry.  
> *Used **AWS Lambda** + **Amazon S3** to preprocess each image (resize, normalize) and invoke the model endpoint for feature extraction.  
> *Trained the logistic regression in a Jupyter notebook on an **ml.m5.large** instance; achieved 92 % accuracy on the validation set.  
> *Deployed the inference pipeline as a **fully managed SageMaker endpoint** (multi‑AZ) to guarantee 99.9 % availability, while keeping latency under 200 ms per image.  
> *Cost optimization: switched from On‑Demand to **spot instances** for training, cutting spend by 35 %.  
> **Result:** Delivered the MVP two weeks early; production traffic reached 10k images/day with <1 % error, and we saved ~$12K in compute costs versus a custom CNN.  

*Leadership Principles highlighted:* **Customer Obsession** (fast, accurate diagnostics), **Ownership** (from design to deployment), **Dive Deep** (tuning hyperparameters, cost analysis).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
