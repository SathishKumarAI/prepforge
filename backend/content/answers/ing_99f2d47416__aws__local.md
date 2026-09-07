---
qid: ing_99f2d47416__aws__local
question: 'Explain: Video Comment — Youtubestreaminghld'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 562
total_tokens: 794
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:13:45-05:00'
sources: []
---

**Situation & Task (S)**  
I led a feature‑team at a large media platform that needed to add real‑time sentiment analysis to live video comments for our streaming service. The goal was to surface negative or spammy content within **2 s** of posting and to provide an aggregated sentiment score for each stream.

**Action (A)**  
1. **Data pipeline:** Ingested comment streams with *Amazon Kinesis Data Streams*, then triggered *Lambda* functions that push records into a *DynamoDB* table (low‑latency storage).  
2. **Model inference:** Deployed a pre‑trained BERT model on *AWS SageMaker Edge* for inference, wrapped in a *Lambda@Edge* function to keep latency < 1 s.  
3. **Alerting & visibility:** Sent flagged comments to an *SNS topic*, which triggers an *SQS queue* that feeds into our monitoring dashboard (Grafana + CloudWatch).  
4. **Scaling & cost control:** Autoscaled Kinesis shards based on traffic, and used *Provisioned Concurrency* for Lambda to avoid cold starts.

**Result (R)**  
- Reduced comment‑flagging latency from 8 s to **1.5 s** (a 80 % improvement).  
- Cut false positives by **35 %**, boosting user satisfaction scores (+0.4 on a 5‑point scale).  
- Cost per inference dropped from $0.00025 to **$0.00012** thanks to efficient shard sizing and concurrency tuning.

---

### Leadership Principles

| Principle | How it shows |
|-----------|--------------|
| **Ownership** | Took end‑to‑end responsibility for latency, accuracy, and cost. |
| **Dive Deep** | Benchmarked model variants; tuned Kinesis shards & Lambda concurrency based on metrics. |
| **Bias for Action** | Deployed a minimal viable pipeline in 3 days to meet the product deadline. |
| **Deliver Results** | Achieved measurable performance gains that directly impacted user engagement. |

*Bar‑raiser focus:*  
- Clear ownership of all moving parts.  
- Deep technical dive into AWS services and trade‑offs (latency vs cost).  
- Quantified impact with real numbers.  
- Reflection: initial model over‑fitted to training data; switched to transfer learning, learned the importance of continuous monitoring.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
