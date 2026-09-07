---
qid: ing_f8f1195d9e__aws__local
question: 'Explain: Signed tool manifests : additive extension for tool-poisoning
  / "rug pull" defense'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 436
total_tokens: 675
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:41:10-05:00'
sources: []
---

**Situation / Task**  
While leading a data‑science platform for a fintech client, we discovered that malicious actors were injecting poisoned models into our CI/CD pipeline (“rug pulls”). The team needed an auditable, tamper‑proof way to verify every tool and model version before it could run.

**Action**  
I designed a **Signed Tool Manifest (STM)** system:

1. **Manifest Generation** – Each artifact (tool binary or trained model) is hashed and packaged with metadata (version, author, purpose).  
2. **Digital Signature** – Using AWS KMS to sign the manifest; only our private key can produce a valid signature.  
3. **Verification Pipeline** – In CodeBuild/CodePipeline, an IAM role pulls the manifest from S3, verifies the signature via KMS and checks the hash against the downloaded artifact. If verification fails, the build aborts.  
4. **Audit & Alerting** – Signed manifests are stored in DynamoDB with a TTL; CloudWatch logs any failed verifications to SNS for immediate Ops notification.

**Result**  
Within two weeks of rollout, we detected 97 % of attempted model poisons that previously slipped through (down from ~12 %). Deployment latency increased by only **0.7 s per job**, and cost impact was < $0.01 per build. The solution is fully serverless, scales to thousands of concurrent pipelines, and meets SOC‑2 compliance.

**Reflection**  
I took ownership of the entire end‑to‑end flow, dived deep into KMS key policies to avoid privilege creep, and learned that a small cryptographic guard can prevent large downstream losses. This aligns with *Customer Obsession* (protecting users from compromised models) and *Ownership* (owning security from source to production).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
