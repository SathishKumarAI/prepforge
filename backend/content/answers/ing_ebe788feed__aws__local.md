---
qid: ing_ebe788feed__aws__local
question: 'Q65: Your agent can execute arbitrary Python code. How do you make this
  safe?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 377
total_tokens: 614
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:11:57-05:00'
sources: []
---

**Situation / Task**  
I was tasked with adding a feature that let users run custom Python snippets in our AI‑powered recommendation engine while ensuring the system stayed secure and compliant.

**Action (Technical)**  
1. **Sandboxing** – I wrapped each user script in an AWS Lambda function that runs inside an isolated VPC, using *AWS Nitro Enclaves* to protect memory from the host.  
2. **Resource limits** – The Lambda’s timeout was set to 5 s and CPU allocated to 512 MB; a CloudWatch alarm throttles any exceeding usage.  
3. **Code vetting** – A pre‑execution lint step uses *bandit* + custom regex to block imports like `os`, `subprocess`, or network calls.  
4. **Audit & monitoring** – All executions are logged in CloudTrail and sent to an Elasticsearch domain for real‑time anomaly detection (e.g., unexpected file system writes).  

**Result**  
Within 90 days, we launched the feature with zero security incidents; our internal audit score rose from 78 % to 99 %. Execution latency stayed under 200 ms, keeping the recommendation latency <50 ms for 95 % of users. The cost per invocation was $0.0002, below our target of $0.0005.

**Reflection (Bar‑raiser)**  
I owned the end‑to‑end flow, dove deep into AWS Nitro Enclave docs to understand memory isolation, quantified impact with latency and cost metrics, and learned that a simple timeout isn’t enough—combining sandboxing, linting, and monitoring is essential for safe code execution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
