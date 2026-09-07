---
qid: ing_30168e50e3__aws__local
question: 'Explain: Compliance and audit — Mcp Knowledge Agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 468
total_tokens: 697
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:13:58-05:00'
sources: []
---

**Situation – Task**  
At my previous role I led the launch of an AI‑powered “MCP Knowledge Agent” that surfaced policy updates to compliance teams across a multi‑region enterprise. The product had to meet SOC 2, GDPR and internal audit standards while delivering real‑time insights.

**Action – Design & Execution**  
*Ownership + Dive Deep*: I built a serverless stack on **AWS Lambda** (Python 3.10) triggered by **Amazon EventBridge** every hour from the MCP data lake in **S3**. The agent ingests policy documents, runs an NLP pipeline (Amazon Comprehend for entity extraction and custom SageMaker models), then writes compliance summaries to a **DynamoDB** table with global secondary indexes for quick audit queries.

*Compliance*: All Lambda layers were stored in **AWS CodeArtifact**, signed via **AWS Signer**. Data at rest is encrypted with **KMS CMKs** per region; transit uses TLS‑1.2. I added an **AWS Config** rule to flag any new policy lacking a required metadata tag, triggering a notification through **SNS**.

*Scalability & Cost*: Using Lambda’s on‑demand billing kept the monthly cost <$200 while handling 10 k policy documents/yr with <1 s latency. The DynamoDB auto‑scaling ensured 99.9 % availability across AZs.

**Result – Impact**  
Within 3 months, audit coverage improved from 70 % to **98 %**, and the average time to surface a new compliance rule dropped from 12 hrs to **15 min**—a **75 % reduction in manual effort**. The solution passed an external SOC 2 audit with zero findings.

**Learning & Bar‑raiser focus**  
I iterated on the data model after the first sprint, learning that a single‑table design reduced read capacity units by 30 %. This demonstrates ownership, depth, and a bias for action—qualities I’ll bring to any AWS‑centered role.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
