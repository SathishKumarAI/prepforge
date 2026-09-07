---
qid: ing_a0487c4f62__faang__local
question: 'Explain: Server-Side Encryption — Amazon Kinesis Data Streams Terminology
  and concepts - Amazon Kinesis Data Streams'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 548
total_tokens: 793
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:56:57-05:00'
sources: []
---

**Clarify**  
You’re asking about how *server‑side encryption (SSE)* works for **Amazon Kinesis Data Streams (KDS)**: what it protects, the terminology (e.g., SSE‑KMS vs. SSE‑Customer), and the underlying concepts (key rotation, audit trails). I’ll assume you want a concise explanation suitable for an interview setting.

**Approach**  
1. Define SSE in KDS context.  
2. Distinguish the two modes: **SSE‑KMS** (AWS Key Management Service) and **SSE‑Customer** (customer‑managed keys via KMS).  
3. Explain key lifecycle, how data is encrypted/decrypted on the server side, and what happens during put/get operations.  
4. Mention auditability and compliance benefits.

**Depth**  
- **SSE‑KMS**: When you enable it, each shard’s records are encrypted with a *data encryption key (DEK)* that KDS generates. The DEK is wrapped (encrypted) by an *encryption context* using the customer master key (CMK) stored in KMS. On read, KDS unwraps the DEK via KMS and decrypts data locally before delivering it to the consumer.  
- **SSE‑Customer**: Similar flow but you provide your own CMK ARN; KDS never stores plaintext keys.  
- Both modes guarantee that data at rest in the storage layers (SSD, HDD) is unreadable without the CMK.  
- Key rotation is handled automatically by KMS; KDS can re‑encrypt existing records on read or when a consumer requests it.  
- All API calls are logged in CloudTrail, giving immutable audit trails.

**Edge Cases**  
- If the CMK is deleted or disabled, new writes fail; reads of previously encrypted data also fail until the key is restored.  
- Misconfigured IAM policies can block KDS from accessing KMS, causing service disruption.  
- Performance impact is minimal (a few ms per record) but measurable at very high ingest rates.

**Optimize & Communicate**  
Highlight that SSE‑KMS offers a balance of security and operational simplicity: no key management code in your app, automatic rotation, and tight integration with AWS IAM for fine‑grained access control. Explain trade‑offs (slight latency vs. zero‑trust model) and reassure interviewers you’d monitor CloudWatch metrics to detect decryption failures early. This demonstrates both technical depth and practical system‑design awareness.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
