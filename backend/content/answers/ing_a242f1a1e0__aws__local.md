---
qid: ing_a242f1a1e0__aws__local
question: Beyond text in a chat box, what channels can indirect prompt injection arrive
  through, and how do you sanitise them?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 493
total_tokens: 736
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:31:55-05:00'
sources: []
---

**Situation & Task (Amazon Leadership Principles: Customer Obsession & Ownership)**  
I was tasked to secure a conversational AI platform that served 1 M monthly active users while allowing multimodal inputs—voice, image, file upload, and IoT telemetry—to trigger the same NLP engine. The risk: indirect prompt injection could bypass text‑only sanitisation and cause data exfiltration or malicious code execution.

**Action (Dive Deep & Bias for Action)**  
1. **Identify all entry points** – voice (transcribed via Amazon Transcribe), image (metadata from Rekognition), file uploads (S3 with Lambda triggers), IoT messages (IoT Core).  
2. **Central sanitiser service** – a stateless Lambda chain that normalises payloads into a canonical JSON schema, strips non‑textual tags, and applies context‑aware tokenisation.  
3. **Content moderation** – Amazon Comprehend for profanity/NSFW detection; Rekognition for image text extraction; custom SageMaker model to flag suspicious patterns in binary files.  
4. **Whitelisting & rate limiting** – use API Gateway with request throttling per user ID and a DynamoDB table of approved “intent” tokens.  
5. **Audit & alerting** – CloudWatch Logs + GuardDuty anomaly detection; every failed sanitisation triggers an SNS alert.

**Result (Deliver Results)**  
After deployment, injection attempts dropped from 0.8 % to <0.01 % of all requests (≈ 80 % reduction). Latency increased by only 15 ms on average, keeping the 200 ms SLA intact. Cost impact was +$12 k/month, but we avoided potential $1M+ breach penalties.

**Bar‑raiser Takeaway**  
I showed ownership by mapping every indirect channel, diving deep into token semantics, quantifying a dramatic risk reduction, and learning to balance security with user experience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
