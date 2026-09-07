---
qid: ing_f56ef0a731__aws__local
question: Design the guardrail layer for an LLM product. How do you manage the latency
  and false-positive costs?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 448
total_tokens: 689
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:31:45-05:00'
sources: []
---

**Situation / Task**  
I led a cross‑functional team building a guardrail layer for our new LLM‑based customer support product. The goal was to filter toxic or policy‑violating outputs while keeping latency under 200 ms and keeping false‑positive costs below $0.01 per request.

**Action**  
*Built a two‑stage pipeline:*  
1. **Pre‑filtering with Amazon Comprehend Custom Classification** – runs in parallel on the same EC2 spot fleet that hosts the LLM, adding <20 ms latency.  
2. **Post‑filtering with a lightweight AWS Lambda function** that uses a Bloom filter of known disallowed tokens (≈10 MB) and a small BERT fine‑tuned model hosted on SageMaker Edge Manager.  

*Implemented dynamic throttling:* When the pre‑filter’s false‑positive rate exceeded 5 %, we temporarily routed traffic to an older, cheaper LLM version until the model drift was corrected.

**Result**  
- Latency stayed at **≈180 ms** (95th percentile) across 1M requests/day.  
- False positives dropped from 12 % to **3 %**, saving ~$15k/month in manual review costs.  
- The system used only **10 % of the baseline compute budget** by leveraging spot instances and Lambda’s pay‑per‑invocation model.

**Reflection (Bar‑raiser focus)**  
I owned the entire lifecycle—data labeling, model training, deployment, monitoring—and dove deep into cost curves to trade a slight increase in per‑request latency for a substantial reduction in review overhead. After an early spike in false positives, I iterated on the Bloom filter size and re‑trained the classifier, learning that a hybrid approach often beats a single monolithic guardrail. This aligns with *Ownership* (owning end‑to‑end impact) and *Dive Deep* (quantifying trade‑offs).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
