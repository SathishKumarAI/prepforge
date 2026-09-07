---
qid: ing_2073ad80fe__aws__local
question: You suspect someone is distilling your model through your public API. How
  would you detect it and what can you actually do?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 431
total_tokens: 675
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:40:41-05:00'
sources: []
---

**Situation / Task**  
While launching a new LLM‑powered recommendation API I noticed sudden traffic spikes from a handful of IPs that matched the model’s token usage pattern. My goal was to confirm whether these requests were “model distillation” attempts and to mitigate any data leakage.

**Action**  
1. **Instrumentation & Detection** – Enabled VPC Flow Logs, CloudWatch Metrics (request count, latency, token usage) and Lambda‑based anomaly detection that flags > 2000 tokens per minute from a single source.  
2. **Authentication Enforcement** – Rolled out API keys with per‑key quota via Amazon API Gateway; throttling set to 500 requests/minute.  
3. **Behavioral Analysis** – Collected request payloads into an S3 bucket, ran a lightweight ML model (Amazon SageMaker) to cluster unusual token patterns.  
4. **Mitigation** – If anomaly confirmed, the offending key was revoked automatically; an SNS alert sent to Ops and a Lambda function triggered a temporary “black‑list” rule in WAF.

**Result**  
Within 48 h I reduced potential model extraction attempts by **87 %**, cut token leakage risk to < 0.01 %, and maintained API uptime > 99.9 %. The cost of the added monitoring stack was <$15/month, a 5× ROI compared to the projected loss from data theft.

**Leadership Principles**  
- *Customer Obsession*: Protects user data while keeping service reliable.  
- *Ownership*: Took end‑to‑end responsibility for detection and remediation.  

**Bar‑raiser cues** – Deep dive into metrics, quantified impact (87 % reduction), learning loop (automated revocation) demonstrate ownership and continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
