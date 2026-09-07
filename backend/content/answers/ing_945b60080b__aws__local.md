---
qid: ing_945b60080b__aws__local
question: Our chatbot gives a different answer every time. How do you test something
  non-deterministic?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 458
total_tokens: 696
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:01:19-05:00'
sources: []
---

**Situation / Task**  
I led the quality‑engineering of an LLM‑powered customer‑service chatbot that had a *non‑deterministic* response engine (different replies on identical prompts). The product launch deadline was 4 weeks and we needed to guarantee **99.9 % accuracy in intent matching** while preserving the model’s creativity.

**Approach / Action**  
1. **Determinism baseline** – I built a *deterministic wrapper* that hashes each prompt, seeds the LLM with that hash, and records the generated response.  
2. **Test harness** – Using AWS CodeBuild + GitHub Actions I ran 10 k *prompt‑response* pairs nightly, capturing output vectors in DynamoDB (partition key: `prompt_hash`, sort key: `run_id`).  
3. **Statistical drift analysis** – With Python’s SciPy and a custom Lambda function, I computed Jensen–Shannon divergence between successive runs; any value > 0.05 triggered an alert via SNS.  
4. **Chaos testing** – Deployed the chatbot behind an Application Load Balancer with weighted routing to two model versions (A/B). CloudWatch metrics tracked response latency and error rates; a CloudWatch anomaly detector flagged 3‑sigma spikes.  
5. **Cost control** – Leveraged spot instances for GPU inference, auto‑scaling on CPU usage, and reserved capacity for the nightly test queue.

**Result**  
- Reduced *response variance* from 0.37 to 0.02 (Jensen–Shannon divergence).  
- Cut *latency* by 18 % while keeping cost < $200/day.  
- Achieved a **99.94 % intent‑match accuracy**, surpassing the SLA, and enabled an automated regression pipeline that runs nightly for continuous delivery.

**Reflection (Bar‑raiser)**  
I owned the entire QA loop, dove deep into statistical metrics, quantified impact with clear KPIs, and learned that deterministic seeding coupled with drift alerts is a scalable solution for non‑deterministic AI services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
