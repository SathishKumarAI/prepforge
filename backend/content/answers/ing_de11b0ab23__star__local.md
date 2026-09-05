---
qid: ing_de11b0ab23__star__local
question: 'Explain: Q58: Design a system where one user''s prompt cannot leak to another
  user'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 356
total_tokens: 598
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:52:37-05:00'
sources: []
---

**Situation**  
In a cloud‑based AI platform we launched a shared notebook feature where multiple users could run large language models concurrently. Early beta testers reported that one user’s prompt text was occasionally visible in another user's request logs, raising privacy and compliance concerns.

**Task**  
Redesign the system so that each user’s prompt is strictly isolated from all others while still allowing real‑time inference at scale, and prove the isolation with end‑to‑end tests.

**Action**  
1. Introduced per‑session secure enclaves using Intel SGX to run each model instance in an isolated memory region.  
2. Wrapped every prompt in a user‑specific encryption key derived from their OAuth token; keys were stored in HSM and never persisted on disk.  
3. Replaced shared Redis queues with Kafka topics partitioned by tenant ID, ensuring message routing stayed within the same tenant context.  
4. Added a lightweight audit middleware that hashes prompts before logging, so logs contain only non‑identifiable fingerprints.  
5. Ran a fuzzing suite (using GoFuzz) to inject malicious prompts across tenants; all tests passed with zero cross‑tenant leakage.

**Result**  
The new architecture cut prompt‑leak incidents from 0.7% to 0.0%, reduced latency by 12 ms due to local enclave execution, and achieved compliance audit success in the first pass. I learned that combining hardware isolation with fine‑grained key management is essential for secure multi‑tenant AI services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
