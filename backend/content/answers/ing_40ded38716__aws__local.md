---
qid: ing_40ded38716__aws__local
question: Batch vs Stream Processing - What's the Difference?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 404
total_tokens: 633
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:52:39-05:00'
sources: []
---

**Answer – Batch vs. Stream Processing**

**Leadership Principles:**  
*Customer Obsession* – deliver timely insights that drive business decisions.  
*Ownership* – architect solutions that are reliable, cost‑effective, and future‑proof.

**Situation / Task**  
In my last role I was asked to compare batch and stream processing for a real‑time fraud detection system that processes 10 M transactions per day.

**Action**  
I mapped the requirements:  
| Requirement | Batch | Stream |
|-------------|-------|--------|
| Latency | ≥ 12 h | ≤ 5 s |
| Throughput | 10 M/day | 1 kTPS |
| Cost | $0.30/GB stored | $0.05/MB processed |

I designed a hybrid architecture:  
- **Batch** – AWS Glue + S3 for nightly data lake consolidation, Athena for ad‑hoc analytics (cost ~$2k/month).  
- **Stream** – Kinesis Data Streams → Lambda → DynamoDB for real‑time scoring (latency 2 s, cost $1.5k/month).

I also added a retry policy and CloudWatch alerts to ensure *high availability* (>99.9%).

**Result**  
The hybrid model cut fraud detection lag from 12 h to <5 s, increasing revenue protection by **$3.6M/year** (10 % lift). Operating cost rose only 15%, but the ROI was >400%.  

**What a bar‑raiser looks for:**  
- Clear ownership of both performance and cost.  
- Deep dive into metrics (latency, throughput, cost).  
- Quantified business impact and lessons learned (e.g., trade‑off between freshness vs. storage cost).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
