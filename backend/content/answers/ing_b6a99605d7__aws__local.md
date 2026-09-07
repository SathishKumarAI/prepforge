---
qid: ing_b6a99605d7__aws__local
question: 'Explain: The Limits of Test-Time Compute — Research Radar'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 413
total_tokens: 643
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:16:58-05:00'
sources: []
---

**Situation – Task**  
While leading a cross‑functional AI squad at a fintech startup, we were asked to deploy a transformer‑based fraud detector in real time. The regulator demanded *sub‑100 ms* latency and *99.9% uptime*. Our initial pilot used a single EC2 instance with the full model; inference hit 250 ms, and cost ballooned to $3k/month.

**Action – Technical & Leadership**  
I applied **Ownership** and **Dive Deep**:  

1. **Model pruning + quantization** (int8) reduced parameters by 70% → 50 MB vs 200 MB.  
2. Deployed on **AWS Inferentia** via **SageMaker Edge Manager**, which delivers ~10× inference speed for the same model size.  
3. Leveraged **Auto Scaling** and a **global CloudFront distribution** to keep latency <90 ms globally.  
4. Implemented **CloudWatch anomaly detection**; if latency >120 ms, traffic automatically routes to a *fallback* lightweight rule‑engine on **Lambda@Edge**, ensuring 99.9% availability.

**Result – Quantified Impact**  
- Latency dropped from 250 ms → 85 ms (≈66% reduction).  
- Monthly inference cost fell from $3k to $800 (≈73% savings).  
- SLA compliance improved: uptime rose from 97.5% to 99.95%.

**Learning – Bar‑Raiser Insight**  
I documented the failure modes of over‑parameterized models, built a “Compute‑Efficiency” checklist now used in all new projects, and presented it at our quarterly tech review. This iterative learning loop embodies **Bias for Action** while safeguarding future product launches.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
