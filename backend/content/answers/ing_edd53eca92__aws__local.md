---
qid: ing_edd53eca92__aws__local
question: 'Explain: ML Coding From Scratch (Asked at AI Labs)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 460
total_tokens: 692
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:16:02-05:00'
sources: []
---

**Situation** – While leading a cross‑functional squad at AWS AI Labs, we were tasked with prototyping an image‑classification model for a new consumer IoT device that had no pre‑trained weights and limited edge compute.

**Task** – Build the entire ML pipeline “from scratch” (data ingestion → feature engineering → training → inference) while meeting < 10 ms latency on the device, < 1 % battery drain, and 99.9 % availability in production.

**Action**  
* **Ownership & Dive Deep** – I scoped the problem, gathered telemetry from the device’s camera, and benchmarked several CNN back‑ends (ResNet‑50, MobileNet‑V2).  
* **Technical design** –  
  * **Data pipeline**: S3 + Glue for ETL; SageMaker Ground Truth for labeling.  
  * **Training**: Distributed training on SageMaker with Spot Instances (cost ≈ $0.05/hr) and automatic hyper‑parameter tuning.  
  * **Model compression**: Quantization‑aware training → 8‑bit INT model, reducing inference size to < 1 MB.  
  * **Edge deployment**: AWS IoT Greengrass + TensorFlow Lite; we wrapped the inference in a Lambda function that triggers on new frames.  
* **Bias for Action & Invent & Simplify** – I prototyped the inference wrapper in 3 days, iterating with OTA updates via CodeDeploy.

**Result** – The final model achieved 92 % top‑1 accuracy, < 9 ms latency, and reduced battery consumption by 18 % compared to the baseline. In production we saw a 35 % drop in customer complaints (NPS +12) within two weeks of rollout.  

*Bar‑raiser check*: I owned every layer, dove into the math behind quantization, quantified the impact on latency & cost, and documented lessons from an initial over‑parameterized trial that taught us to prioritize edge constraints early.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
