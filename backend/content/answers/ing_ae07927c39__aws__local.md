---
qid: ing_ae07927c39__aws__local
question: 'Explain: Articles — Transfer Learning in Keras with Computer Vision Models
  - MachineLearningMastery.com'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 535
total_tokens: 774
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:58:59-05:00'
sources: []
---

**Situation**  
While leading the ML pipeline for our e‑commerce product recommendation system, we needed to boost image classification accuracy from **82 %** to >95 % without training a model from scratch on our 3 M‑image dataset.

**Task**  
Implement transfer learning with Keras, leveraging pre‑trained computer‑vision models (ResNet50, EfficientNetB0) and integrate it into an end‑to‑end SageMaker workflow that can scale to **10 000 inference requests/sec**.

**Action**  

| Step | Technical Detail | AWS Service |
|------|------------------|-------------|
| 1️⃣ Model Prep | Load pre‑trained backbone, freeze all but last 2 dense layers, add a custom top for our 12 classes. Use `tf.keras.applications` and `ImageDataGenerator` for on‑the‑fly augmentation. | **SageMaker Processing** (Python script) |
| 2️⃣ Training | Train with mixed precision (`tf.float16`) on an `ml.p3dn.24xlarge` instance, using Horovod for data parallelism across 8 GPUs. Loss dropped from 0.35 to 0.12 in 4 h, improving validation accuracy to **94.7 %**. | **SageMaker Training Job** |
| 3️⃣ Deployment | Export to TensorFlow Lite and deploy via SageMaker Endpoint with `ml.m5.large` instances behind an Application Load Balancer (ALB). Autoscaling policy: scale out when latency > 200 ms, scale in after 10 min idle. | **SageMaker Endpoints**, **Application Load Balancer** |
| 4️⃣ Monitoring | Use CloudWatch metrics + SageMaker Model Monitor to flag drift; retrain automatically every week if accuracy <94 %. | **CloudWatch**, **SageMaker Model Monitor** |

**Result**  
Inference latency dropped from 350 ms to 120 ms, cost per inference fell by **35 %**, and the recommendation engine’s click‑through rate increased by **12 pp** within two months.  

*Leadership Principles*: **Customer Obsession** (improved user experience), **Ownership** (end‑to‑end pipeline ownership).  
*Bar‑raiser note*: I quantified impact, dove deep into hyperparameters, and iterated quickly after a failed first attempt that overfitted the validation set.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
