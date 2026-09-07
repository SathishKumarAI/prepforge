---
qid: ing_71cf775960__aws__local
question: 'Explain: Content delivery — Peer-To-Peer Networks: Features, Pros, and
  Cons - Spiceworks'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 408
total_tokens: 648
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:42:44-05:00'
sources: []
---

**Situation & Task**  
At my previous role I was asked to evaluate a new content‑delivery model for a media startup that wanted real‑time video streaming at scale. The manager expected an analysis of Peer‑to‑Peer (P2P) networks versus traditional CDN solutions, and a recommendation that would keep latency low while staying cost‑effective.

**Action**  
I started by **diving deep** into P2P characteristics: *dynamic node discovery*, *distributed caching*, and *self‑healing* of bandwidth. I built a proof‑of‑concept on AWS using **Amazon EC2** for seed nodes, **AWS Lambda** to orchestrate handshakes, and **S3** for immutable asset storage. I compared it against an Amazon CloudFront + Elastic Load Balancing baseline.

Key findings:
| Metric | P2P (average) | CDN |
|--------|---------------|-----|
| Avg. latency (ms) | 120 | 90 |
| Cost per GB delivered | $0.012 | $0.015 |
| Peak bandwidth usage | 70 % lower on origin | 100 % |

**Result**  
The P2P prototype reduced our origin cost by **30 %** while maintaining acceptable latency for 80 % of users in high‑traffic regions. I presented the data to stakeholders, and we decided to roll out a hybrid model—CloudFront for global reach, with P2P for localized bursts.

**Learning & Ownership**  
I documented trade‑offs (e.g., increased complexity in node churn handling) and set up automated monitoring with CloudWatch to catch any degradation. This experience reinforced my commitment to *Ownership* and *Customer Obsession*, ensuring we deliver high performance at a lower cost while keeping user experience front‑and‑center.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
