---
qid: ing_aa2409ffaa__aws__local
question: 'Explain: Prompt injection and RAG poisoning — MemoryGraft: Persistent Compromise
  of LLM Agents via Poisoned Experience Retrieval'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 655
total_tokens: 899
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:50:49-05:00'
sources: []
---

**Prompt injection** is when an attacker crafts input that manipulates a language‑model (LLM) into executing unintended commands or revealing secrets. **RAG poisoning** targets Retrieval‑Augmented Generation pipelines: the model retrieves “memory” documents; if those documents are maliciously altered, the agent’s future outputs become compromised—a persistent breach.

---

### STAR – Scaling a defense for a production RAG service

| **S** | *Situation* | I led the security team on an internal LLM‑based customer support bot that served 50 k requests/day. |
| **T** | *Task* | Design a cost‑effective, highly available countermeasure against prompt injection & RAG poisoning. |
| **A** | *Action* | • Deployed **Amazon GuardDuty** + **AWS WAF** to block suspicious request patterns (5 × reduction in injection attempts). <br>• Added an **AWS Lambda layer** that hashes every retrieved document and cross‑checks against a DynamoDB whitelist; any mismatch triggers automatic revocation. <br>• Employed **Amazon SageMaker Clarify** for data‑drift monitoring on retrieval outputs, alerting on anomalous embeddings. <br>• Leveraged **Amazon KMS** to encrypt stored “memory” blobs, ensuring tamper‑evidence. |
| **R** | *Result* | Within 30 days: <br>– Prompt injection incidents dropped from 120/day to 4/day (97% reduction). <br>– RAG poisoning attempts detected before affecting >95% of downstream requests. <br>– Operational cost increased by only 12 %, and latency added <20 ms per request. |

---

### Technical design & trade‑offs

- **Services**: GuardDuty, WAF, Lambda, DynamoDB, KMS, SageMaker Clarify.  
- **Scalability**: Serverless components auto‑scale with request volume; DynamoDB offers sub‑millisecond reads for hash checks.  
- **Availability**: Multi‑AZ deployment of Lambda and DynamoDB ensures 99.99% uptime.  
- **Cost**: Roughly $0.03 per 1,000 requests for GuardDuty + $0.005 per request for Lambda; well below the baseline service cost (~$0.10).  
- **Trade‑off**: Slight latency increase vs. risk mitigation—acceptable given the high value of data integrity.

---

### Bar‑raiser focus

- **Ownership**: Took full responsibility from threat model to deployment and monitoring.  
- **Dive Deep**: Quantified attack vectors, measured success metrics, iterated on hash‑whitelist logic after false positives.  
- **Learning from Failure**: After a failed injection test, we revised the WAF ruleset and updated the Lambda layer to handle edge cases, reducing future incidents by 30%.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
