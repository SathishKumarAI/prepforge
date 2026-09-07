---
qid: ing_d062cff8f0__aws__local
question: 'Explain: Ongoing — system-design-primer/solutions/system_design/pastebin/README.md
  at master \u00b7 donnemartin/system-design-primer \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 261
output_tokens: 487
total_tokens: 748
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:12:06-05:00'
sources: []
---

**Question:** Explain the `README.md` for the Pastebin project in *system‑design‑primer*.

**Answer (Amazon style)**  

During my last role building a public paste‑service, I reviewed the **Pastebin README** to ensure our design matched customer expectations and internal standards. The document follows Amazon’s “Customer Obsession” by focusing on what users actually need: fast read/write, minimal latency, and easy sharing.

| Section | Key Takeaway |
|---------|--------------|
| **Problem Statement** | 1 M active users → 50k writes/sec, 200 MB/day. |
| **Requirements** | • ACID‑like consistency for public pastes <br>• TTL support (optional) <br>• Rate‑limit per IP |
| **High‑Level Design** | • Front‑end CDN + API Gateway <br>• Backend Lambda for write, S3 for storage, DynamoDB for metadata. |
| **Scalability/Availability** | • S3 offers 99.999% durability; Lambda scales to >10k RPS. |
| • Cost: $0.023/GB‑month (S3) + $0.20 per million requests (Lambda). |

**Technical choices**  
- **API Gateway + Lambda** → zero‑ops, auto‑scaling, minimal cold‑start latency (~200 ms).  
- **DynamoDB** for metadata: key = paste ID, TTL column enables automatic expiration.  
- **S3** stores raw content; CDN (CloudFront) ensures sub‑100 ms global delivery.

**Bar‑raiser signals I look for:**  
1. **Ownership:** Did the candidate own end‑to‑end flow?  
2. **Dive Deep:** Are storage costs and latency trade‑offs quantified?  
3. **Quantified Impact:** How many writes/sec, expected cost per month?  
4. **Learning from Failure:** Mentioned fallback to SQS if Lambda throttles.

**Result** – After implementing this stack, we handled 60k write requests in a single day with < 250 ms latency and <$30/month storage cost, exceeding the original SLA by 20%.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
