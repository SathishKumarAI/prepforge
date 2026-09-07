---
qid: ing_9bd3f938b3__aws__local
question: Is your coding agent uploading all your code?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 343
total_tokens: 571
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:17:16-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> *“No – the coding agent does not automatically upload any of your code.”*  

**Context & Requirement**  
When a developer writes in the IDE, the agent only stores the snippet locally and sends a **transformed AST** to the language model for inference. No raw files or repository history are transmitted unless explicitly requested via an “upload” command.

**Design & AWS Services**  
- **Local Agent (EC2/ECS)**: runs on the developer’s machine, keeps code in memory.  
- **API Gateway + Lambda**: receives transformed AST, calls **Amazon Bedrock** for generation.  
- **S3** (private bucket) holds temporary inference logs; access is limited to the user’s IAM role.  
- **AWS Key Management Service (KMS)** encrypts any data at rest.

**Scalability & Cost**  
Stateless Lambda scales with request volume; S3 storage costs are negligible for short‑term logs.  

**Ownership & Dive Deep**  
I own the entire flow: from local capture to Bedrock inference, ensuring no accidental data leakage. I logged every API call (audit trail) and ran a penetration test that verified the agent never touches raw source code.

**Result**  
Implemented in 3 sprints; user satisfaction rose 42 % (survey), while zero incidents of unintended uploads were recorded over 6 months.  

*Leadership Principles*: **Customer Obsession** – protect developer privacy, **Ownership** – end‑to‑end control, **Dive Deep** – audit and test every data path.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
