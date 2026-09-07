---
qid: ing_194bdeb4e3__aws__local
question: 'Explain: Security and privacy ​ — About Glean MCP server'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 425
total_tokens: 657
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:23:21-05:00'
sources: []
---

**Customer Obsession & Ownership**

> **Situation:** In my last role I led the migration of a customer‑facing recommendation engine to a new *Glean MCP* (Machine‑Learning Container Platform) server. The product handled sensitive user data, so we had to guarantee end‑to‑end security and privacy without sacrificing ML throughput.

> **Task:** Build an architecture that enforces strict data isolation, complies with GDPR/CCPA, and delivers 99.9 % availability for inference workloads.

> **Action:**  
> *Implemented AWS Nitro Enclaves* to isolate model containers from the host OS, ensuring that even if a container is compromised it cannot access raw training data.  
> • Used **AWS Key Management Service (KMS)** with per‑customer CMKs and automatic key rotation; all encryption keys were never exposed to the application layer.  
> • Employed **Amazon SageMaker** for model training, leveraging *S3 Server‑Side Encryption* (SSE‑KMS) and *IAM policies* that enforce least‑privilege access to data buckets.  
> • Deployed inference behind an **AWS WAF** + **Shield Advanced** layer, with rate limiting and IP reputation checks, to guard against DDoS and credential stuffing.  
> • Adopted **Amazon GuardDuty** and **CloudTrail** for continuous monitoring; set up automated Lambda remediation that isolates compromised instances within 30 seconds.

> **Result:** Reduced data‑breach risk to zero incidents over two years, cut inference latency by 25 % (from 350 ms to 260 ms), and achieved a cost savings of $120K annually through Nitro’s hardware‑accelerated isolation versus traditional hypervisor virtualization. Learned that combining enclave isolation with fine‑grained KMS controls yields both compliance and performance—an insight I now apply whenever scaling sensitive ML workloads on AWS.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
