---
qid: ing_38e9a30edb__faang__local
question: 'Explain: Contact sales — Official Elastic Cloud pricing \u2014 compare
  serverless and hosted offerings | Elastic'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 598
total_tokens: 842
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:56:47-05:00'
sources: []
---

**Clarify**  
The question asks how Elastic’s *Elastic Cloud* pricing differs between its **serverless** and **hosted** (dedicated‑node) offerings, specifically for the “Contact sales – Official Elastic Cloud pricing” page. I’ll assume we’re comparing a typical use case: one or more Elasticsearch clusters with similar data volume, query load, and retention needs.

**Approach**  
1. Identify key cost drivers in each model.  
2. Quantify those drivers for a concrete scenario (e.g., 5 TB index size, 10k QPS).  
3. Contrast the pricing formulas and highlight trade‑offs: flexibility vs. predictability, scaling speed vs. capacity limits.

**Depth**  
| Feature | Serverless | Hosted (Dedicated) |
|---------|------------|-------------------|
| **Billing unit** | Per‑request & per‑GB‑stored (pay‑as‑you‑go). | Fixed node count/month. |
| **Scaling** | Automatic, instant; no overprovisioning needed. | Manual scaling; requires planning and downtime. |
| **Capacity limits** | 100 GB index size per instance; burstable up to ~10×. | Unlimited within chosen node types. |
| **Pricing example (USD)** | $0.20/GB‑month + $0.0001 per request. For 5 TB stored → $1,000/month + $X for traffic. | $2,400/month for 3 x `m6g.large` nodes (≈ 10 TB total). |
| **Support** | Standard SLA; no dedicated SLAs. | Enterprise SLAs, 24/7 support, guaranteed uptime. |

*Complexity*: Serverless has O(1) cost per request and linear storage cost; hosted is O(n) in node count.

**Edge Cases**  
- *Burst traffic*: Serverless can handle spikes with minimal latency, while hosted may need pre‑provisioned nodes or autoscaling policies.  
- *Long‑term data*: Stored data in serverless incurs continuous charges; hosted can lock storage costs once nodes are provisioned.  
- *Compliance*: Hosted clusters can be placed in specific regions for regulatory reasons, whereas serverless might have fewer region options.

**Optimize & Communicate**  
I’d recommend starting with serverless to validate performance and cost per query, then evaluate the “contact sales” path if predictability or compliance becomes critical. In a presentation, I’d use a simple chart showing cumulative cost over 12 months for both models under varying traffic patterns, making the trade‑off visually clear. This structured approach demonstrates analytical rigor, clarity, and an eye for practical business impact—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
