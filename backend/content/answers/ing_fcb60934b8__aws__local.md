---
qid: ing_fcb60934b8__aws__local
question: You're adapting a pretrained model to a new task. What do you freeze, what
  do you train, and how do you decide?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 598
total_tokens: 843
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:49:11-05:00'
sources: []
---

**Situation** – In my last role I led the migration of an on‑prem GPT‑style model to a production‑grade service for a fintech client that needed sentiment analysis on 10 M customer reviews per day. The goal was to reduce inference latency by 40% while keeping accuracy above 92%.

**Task** – Adapt the pretrained transformer to the new domain, decide which layers to freeze, and tune only what matters so we could ship within two sprints.

**Action**  
1. **Identify reusable knowledge** – I inspected the layer‑wise activations with *TensorBoard* and found that the first 10 encoder blocks captured generic language patterns (high cosine similarity across domains). Those were frozen to preserve transfer learning benefits.  
2. **Fine‑tune domain‑specific heads** – The last two transformer layers, the classification head, and a lightweight adapter module (≈ 0.3 M params) were left trainable. I used *Amazon SageMaker* for distributed training on 4 g5.xlarge GPUs; hyper‑parameter tuning via SageMaker Experiments automatically found lr=2e-5, batch size=32 with the best dev‑set F1 of 93.8%.  
3. **Decision framework** – I applied a *“freeze‑if‑stable”* rule: any layer whose weight variance < 0.01 during initial epochs was frozen; otherwise it stayed trainable. This kept training time down to 12 h versus the 48 h baseline.

**Result**  
- Inference latency dropped from 280 ms to 170 ms per request (≈ 40% improvement).  
- Accuracy remained at 93.8%, above the 92% target.  
- Cost per inference on SageMaker reduced by ~30 USD/month due to fewer GPU hours.

---

### AWS Services Used
| Service | Purpose |
|---------|---------|
| **SageMaker** | Managed training, hyper‑parameter tuning, and deployment |
| **S3** | Storing checkpoints, datasets, and logs |
| **CloudWatch** | Monitoring latency and error rates in real time |
| **Step Functions** | Orchestrating the freeze‑train pipeline |

### Bar‑Raiser Checklist
- **Ownership** – Took end‑to‑end responsibility from data prep to deployment.  
- **Dive Deep** – Quantified layer stability, used cosine similarity for decision making.  
- **Quantified Impact** – Delivered measurable latency and cost savings.  
- **Learning from Failure** – Initial experiments with full fine‑tuning overfitted; the freeze rule avoided that.

This approach balances *Customer Obsession* (fast, accurate service) with *Ownership* and *Dive Deep* to ensure sustainable, scalable AI solutions on AWS.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
