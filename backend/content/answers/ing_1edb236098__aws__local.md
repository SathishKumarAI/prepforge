---
qid: ing_1edb236098__aws__local
question: 'Explain: Smaller, Cheaper, Faster — Research Radar'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 406
total_tokens: 636
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:37:05-05:00'
sources: []
---

**Situation / Task**  
While leading a cross‑functional AI team for a media‑streaming platform, I noticed that our recommendation engine’s inference latency (≈ 800 ms) was hurting user engagement by 4 % and our GPU fleet cost $12k/month.

**Action**  
I championed the *Smaller, Cheaper, Faster* “Research Radar” initiative.  
1. **Architectural dive‑deep**: Migrated the inference pipeline to a stateless Lambda layer using ONNX Runtime, eliminating the need for persistent GPU nodes.  
2. **AWS services**: Employed **Amazon SageMaker Edge Manager** for model packaging, **ECR** for container storage, and **SQS + Step Functions** for orchestration.  
3. **Scalability & cost**: Leveraged Lambda’s pay‑per‑invocation pricing; achieved 70 % reduction in GPU usage while maintaining a 99.9 % SLA.  
4. **Bias for Action / Invent & Simplify**: Introduced automated A/B testing via CloudWatch metrics, enabling rapid iteration on model versions.

**Result**  
Inference latency dropped to 120 ms (an 85 % reduction), user engagement rose by 6 %, and monthly infrastructure spend fell from $12k to $3.5k— a 71 % cost saving. The project also established a reusable “AI‑Ops” framework that other teams adopted, amplifying the impact across the org.

**Reflection**  
I learned that true ownership means questioning every assumption (GPU vs serverless) and iterating until the data proves success. This experience reinforced my commitment to *Customer Obsession* and *Ownership*, key Amazon Leadership Principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
