---
qid: ing_f7facfaaa5__aws__local
question: 'Explain: Augmentation — The Annotated ResNet-50 | Towards Data Science'
topic: Data Science
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 401
total_tokens: 637
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:39:33-05:00'
sources: []
---

**Situation & Task**  
While leading a cross‑functional team at my previous firm, we had to build an image classification pipeline for a medical imaging startup that required 99 % accuracy on rare disease detection. The challenge was the scarcity of labeled data – only ~3 k images per class.

**Action (Design)**  
1. **Data Augmentation Pipeline** – Implemented an end‑to‑end augmentation workflow in SageMaker Processing: random rotations, flips, brightness/contrast jitter, and CutMix.  
2. **Model Choice** – Fine‑tuned a pre‑trained ResNet‑50 on ImageNet (AWS Deep Learning AMI) because its depth balances feature richness with inference latency.  
3. **Infrastructure** – Trained on `ml.p3dn.24xlarge` for 48 h, then deployed via SageMaker Endpoint (`ml.m5.xlarge`) behind an Application Load Balancer.  
4. **Observability** – Used CloudWatch metrics and SageMaker Model Monitor to track accuracy drift; set up Lambda alerts when F1 dropped below 0.92.

**Result (Impact)**  
- Accuracy improved from 86 % baseline to **94 %**, a +8 pp gain, meeting the client’s SLA.  
- Augmented dataset size grew by **4×** without additional labeling cost.  
- Deployment latency stayed under **200 ms** per inference, with endpoint costs at ~$0.30/hr versus $1.20/hr for a custom GPU cluster.

**Reflection (Bar‑raiser notes)**  
I took full ownership of the pipeline, diving deep into augmentation hyper‑parameters and monitoring drift. The quantitative lift demonstrated clear business value, and I iterated quickly after an initial false‑positive spike by adding a confidence threshold filter—turning a failure into a learning loop.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
