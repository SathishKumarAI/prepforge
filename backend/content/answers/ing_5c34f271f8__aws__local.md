---
qid: ing_5c34f271f8__aws__local
question: 'Explain: Step 6 — How Password Managers Work'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 686
total_tokens: 916
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:53:40-05:00'
sources: []
---

**Step 6 – How Password Managers Encrypt & Store Secrets**

> **Situation:** I led the redesign of our enterprise‑grade password manager (PM) used by 30 k employees across 120 countries. The previous implementation stored vaults in a single MySQL database and relied on a static master key, leading to *O(10⁴)* latency spikes during peak login windows and a single point of failure.

> **Task:** Reduce the time to retrieve a user’s password vault from > 200 ms to < 20 ms while ensuring zero‑downtime migration and GDPR compliance. I had to architect a fully distributed, highly available system that scales with millions of credential lookups per day.

> **Action:**  
> 1. **Separation of concerns** – split the *encryption* layer from the *storage* layer.  
>    - **Encryption service**: A stateless Lambda (Node.js) wrapped in an API Gateway that receives a user‑specific nonce, derives a key via Argon2id + KDF, and returns an AES‑GCM encrypted blob.  
>    - **Storage service**: Amazon DynamoDB with *partition key = user_id* and *sort key = vault_version*. Enable **DAX** for sub‑10 ms reads.  
> 2. **Key rotation & CMK** – use AWS KMS to store a customer master key (CMK) per tenant; rotate every 90 days automatically with CloudWatch Events.  
> 3. **Audit & compliance** – enable DynamoDB Streams + Lambda to write immutable audit logs to Amazon S3 (server‑side encryption, versioning).  
> 4. **Scalability & cost** – provisioned throughput of 10 k RCU/WCU for peak periods; auto‑scaling keeps idle costs < $0.02/hr.

> **Result:**  
> *Latency* dropped from 220 ms to **18 ms** (95th percentile).  
> *Availability* improved from 99.9 % to 99.999 %.  
> *Cost* fell by **30 %** per month due to DAX caching and reduced RCU/WCU usage.  

---

### Amazon Leadership Principles

| Principle | How I Demonstrated It |
|-----------|-----------------------|
| **Ownership** | Took full responsibility for the migration, coordinating cross‑team effort and handling post‑deployment incidents. |
| **Dive Deep** | Conducted root‑cause analysis of latency bottlenecks, benchmarked encryption libraries, and profiled DynamoDB access patterns. |

### What a Bar‑Raiser Looks For

* **Ownership:** Clear accountability for end‑to‑end delivery and risk mitigation.  
* **Depth (Dive Deep):** Demonstrated data‑driven decisions (latency metrics, cost calculations).  
* **Quantified Impact:** Precise numbers on latency, availability, and cost savings.  
* **Learning from Failure:** Iterative refactor of the encryption pipeline after initial spikes; documented lessons in a post‑mortem that informed future PM releases.

---

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
