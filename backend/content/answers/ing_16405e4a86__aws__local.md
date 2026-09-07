---
qid: ing_16405e4a86__aws__local
question: 'Explain: Onsite – AI Engineer Questions (Deployment and Inference Optimization
  focus)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 527
total_tokens: 762
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:15:53-05:00'
sources: []
---

**Answer (Amazon style)**  

> **Situation:** I led the deployment of a real‑time fraud‑detection model for a payments client that processed ~4 M transactions/day. The model had to infer in <50 ms per request while staying under $0.05/transaction cost.  
> **Task:** Build an inference pipeline on AWS that met latency, throughput, and budget targets, and enable rapid iteration for data scientists.  
> **Action:**  
> 1. **Model packaging** – converted the PyTorch model to ONNX and used SageMaker’s *Inference Toolkit* with a custom `Transformer` image.  
> 2. **Endpoint architecture** – deployed to an *Elastic Inference*‑enabled `ml.m5.large` instance behind a CloudFront edge cache; leveraged *AWS Lambda@Edge* for request throttling.  
> 3. **Scaling & cost** – set up SageMaker endpoint with *auto‑scaling* (min 1, max 12), and used *Spot Instances* to cut inference costs by 35%.  
> 4. **Observability** – instrumented with CloudWatch Metrics (`InferenceLatency`, `Invocations`) and X-Ray for tracing; set up alarms that trigger a Lambda to spin up an extra replica if latency >70 ms.  
> 5. **Continuous improvement** – implemented A/B testing via SageMaker Experiments, automatically promoted the best performing model after 2 weeks of evaluation.  

> **Result:** Achieved 92 % reduction in average inference latency (down to 38 ms), maintained <0.04/transaction cost, and cut operational overhead by 40 % thanks to automated scaling. The pipeline also enabled data scientists to roll out new models in under 48 h.  

**Leadership Principles:**  
- **Customer Obsession & Deliver Results** – Delivered a low‑latency, cost‑efficient service that directly improved fraud detection accuracy for the client.  
- **Ownership & Dive Deep** – Took end‑to‑end ownership of the deployment stack and dove deep into SageMaker, Lambda, and CloudFront trade‑offs to optimize both performance and spend.

*Bar‑raiser cues:* clear ownership narrative, quantitative impact (latency %, cost %), depth of technical reasoning (service choices, scaling logic), and evidence of learning from iterative experiments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
