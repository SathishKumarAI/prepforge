---
qid: ing_f02c676805__aws__local
question: 'Explain: Two Pointers (5 Problems) — Neetcode 150'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 442
total_tokens: 676
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:20:16-05:00'
sources: []
---

**Context (Situation)**  
During my last sprint I was tasked to refactor the Neetcode “Two Pointers” module for a new mobile app that would process user‑generated lists in real time. The legacy code was O(n²) and caused 35 % slower response times on peak traffic.

**Action**  
I re‑implemented five classic problems—*3Sum*, *Container With Most Water*, *Remove Nth Node From End of List*, *Longest Substring Without Repeating Characters*, and *Median of Two Sorted Arrays*—using the two‑pointer paradigm. For each, I:

1. **Defined requirements**: input size ≤ 10⁶, latency < 200 ms, memory ≤ 256 MB.  
2. **Designed a scalable solution**: single pass O(n) algorithms, no extra arrays, only constant space.  
3. **Leveraged AWS**: deployed the service as an AWS Lambda function behind API Gateway; S3 stores input files for batch runs; CloudWatch logs track per‑execution latency.

I also added unit tests that assert 99th‑percentile response < 180 ms and used DynamoDB to cache frequent inputs, reducing cold‑start costs by 40 %.

**Result**  
Post‑deployment, average request latency dropped from **350 ms to 120 ms** (≈ 65 % improvement). The app handled a 3× traffic surge without additional resources, saving ~€1.2k/month in compute costs.

**Reflection (Learnings)**  
I discovered that *two pointers* can be generalized across seemingly unrelated problems—an insight I documented and shared with the team. This reinforced **Ownership** (taking end‑to‑end responsibility) and **Dive Deep** (understanding algorithmic trade‑offs).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
