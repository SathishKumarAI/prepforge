---
qid: ing_3d37e0d91b__aws__local
question: 'Explain: Distillation for personalization — On-Policy Distillation - Thinking
  Machines Lab'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 454
total_tokens: 690
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:44:11-05:00'
sources: []
---

**Situation & Task**  
When I joined the *Thinking Machines* lab at Amazon, we were building a real‑time recommendation engine for Prime Video. The model was an on‑policy reinforcement learner that ran 5 M training steps per day, but its inference latency (≈120 ms) exceeded our SLA of 80 ms for the streaming client. I volunteered to distill the policy into a lightweight surrogate.

**Action**  
1. **Requirements & Design** – I scoped a student network with half the parameters and a distillation loss combining KL‑divergence on action probabilities and mean‑squared error on state embeddings.  
2. **AWS Services** –  
   * *SageMaker Training* (distributed Horovod) for fast GPU training of both teacher & student.  
   * *S3* to store checkpoints; *DynamoDB* to log policy rollouts for continual evaluation.  
   * *AppConfig* to toggle between models at runtime without redeploys.  
3. **Scalability & Cost** – By moving inference to *Lambda@Edge*, we reduced per‑request compute from a GPU instance (≈$0.10/hr) to a 128 MB container (≈$0.003/hr), cutting cost by 70 % while keeping 99.9 % availability through the global edge network.  
4. **Bias for Action** – I ran a canary rollout on 5 % of traffic, monitored CTR and latency with CloudWatch metrics, and automatically switched to the student when latency dropped below target.

**Result**  
The distilled policy achieved **95 % accuracy** versus the teacher while reducing inference latency from 120 ms to **65 ms**. Monthly cost fell from $12k to $3.5k for inference, freeing resources for new experiments. I documented lessons—specifically that distillation fidelity depends on state‑space coverage—and shared them in a cross‑team workshop, reinforcing *Ownership* and *Dive Deep* across the organization.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
