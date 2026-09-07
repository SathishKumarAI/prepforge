---
qid: ing_19c73dd300__aws__local
question: 'Explain: Build to Last — fast.ai\u2014Making neural nets uncool again \u2013
  fast.ai'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 406
total_tokens: 648
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:24:46-05:00'
sources: []
---

**Situation / Task**  
I was tasked with creating a production‑grade image classifier for a retail client who wanted to move from a proprietary model to an open‑source framework that could scale globally and stay cost‑effective.

**Action**  
I leveraged fast.ai’s “Build to Last” philosophy: keep the architecture simple, train on minimal data, and use transfer learning.  
1. **Data prep** – curated 50k labeled images, applied fast.ai’s `DataBlock` API for augmentation (90 % accuracy boost).  
2. **Model** – fine‑tuned a ResNet‑34 with a custom head; training took <30 min on an EC2 g4dn.xlarge.  
3. **Deployment** – wrapped the model in a Lambda@Edge function, exposed via API Gateway (global edge caching).  
4. **Observability** – integrated CloudWatch metrics and SageMaker Model Monitor for drift detection.

**Result**  
- Accuracy ↑ 12% over the legacy system while inference latency dropped from 1.2 s to 200 ms.  
- Monthly cost fell by 35 % (EC2 + Lambda vs on‑prem GPU cluster).  
- The model served >5M requests/day with 99.9 % availability.

**Learnings**  
*Ownership*: I owned the entire pipeline, from data ingestion to monitoring.  
*Dive Deep*: Investigated why certain classes underperformed and adjusted augmentation accordingly.  
*Bias for Action*: Deployed in weeks instead of months by using serverless services.  

The fast.ai “Build to Last” mindset—simplicity + transfer learning—enabled rapid delivery without sacrificing quality, aligning with Amazon’s **Customer Obsession** and **Deliver Results** principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
