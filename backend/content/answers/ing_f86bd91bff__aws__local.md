---
qid: ing_f86bd91bff__aws__local
question: 'Explain: improvements and how these improvements are made'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 409
total_tokens: 638
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:40:06-05:00'
sources: []
---

**Situation & Task**  
In my last role at a fintech startup we had an ML‑driven fraud detection model that was 80 % accurate but lagged in real‑time inference (≈2 s latency). The business needed <500 ms to flag transactions on the edge. I owned this end‑to‑end improvement.

**Action**  
1. **Dive Deep into data & architecture** – profiled feature pipelines, identified 4 × slow serialization and a single monolithic GPU worker.  
2. **Refactor with AWS services** – moved training to **Amazon SageMaker** for hyper‑parameter tuning (using Spot instances to cut cost by 30 %) and deployed the model as a **SageMaker Real‑Time Endpoint** behind an **Application Load Balancer**.  
3. **Edge inference** – used **AWS Greengrass** on POS devices, caching recent predictions in **DynamoDB Local** for sub‑50 ms lookups.  
4. **Bias for Action & Ownership** – wrote CI/CD pipelines (CodePipeline + CodeBuild) to auto‑deploy model updates with A/B testing; set up CloudWatch alerts for latency >600 ms.

**Result**  
Latency dropped from 2 s to 450 ms, accuracy improved to 92 % after adding a new “transaction velocity” feature. The cost of inference fell by 40 % due to Spot usage and Greengrass edge caching. This directly reduced false positives, saving the company ~$1.2M annually in chargeback fees.

**Learning & Bar‑raiser focus**  
I demonstrated ownership (full lifecycle), deep technical dive (profiling, AWS service fit), quantified impact (latency, accuracy, cost), and iterative learning—deploying a rollback plan that never triggered because metrics stayed above thresholds.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
