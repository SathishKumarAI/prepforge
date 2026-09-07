---
qid: ing_055b31b69a__aws__local
question: 'Explain: Scaling & ops — Realtime Voice Agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 415
total_tokens: 644
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:38:00-05:00'
sources: []
---

**Situation / Task**  
While leading a product‑launch for a fintech app, we needed to replace our legacy IVR with an AI voice agent that could handle 200 k concurrent calls during peak hours without manual intervention.

**Action**  
I architected a serverless pipeline:  
* **Amazon Transcribe Streaming** → real‑time transcription, fed into **AWS Lex** for intent detection.  
* Lex responses were passed to **Amazon Polly** (neural) and streamed back via **Amazon Connect**.  
* All logs landed in **S3**; metrics surfaced through **CloudWatch Alarms**.  
I added a **Lambda@Edge** layer to throttle requests, ensuring **99.9 % availability** across 3 AZs. Cost was capped by auto‑scaling the Lambda concurrency and using **Provisioned Concurrency** only during predicted peaks (average $12/day vs $45 with EC2).  

**Result**  
- Call latency dropped from 1.5 s to <300 ms, improving NPS from 78 % to 92 %.  
- Peak traffic handled 350 k concurrent calls with zero outages.  
- Operational cost reduced by 73 %, freeing $200K for R&D.  

**Learnings**  
Ownership: I maintained the end‑to‑end stack and set up a **blameless post‑mortem** process that surfaced a subtle Lex timeout bug—fixed it before production.  
Dive Deep: Continuous profiling with X-Ray revealed that 12 % of calls hit Polly’s “slow voice” path; I switched to neural voices, cutting response time by 15 %.  

*Leadership Principles:* **Customer Obsession**, **Ownership**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
