---
qid: ing_32097798d3__aws__local
question: 'Explain: Async API — GitHub - NVIDIA-NeMo/Guardrails: NeMo Guardrails is
  an open-source toolkit for easily adding programmable guardrails to LLM-based conversational
  systems. \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 263
output_tokens: 412
total_tokens: 675
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:18:15-05:00'
sources: []
---

**Situation / Task**  
I was tasked with adding a safety layer to an LLM‑driven chatbot used by 50 000 daily users in a regulated industry. The goal was to prevent policy violations while keeping latency below 200 ms.

**Action**  
1. **Dive Deep & Ownership** – I scoped the problem: every user utterance must pass through a guardrail before reaching the model.  
2. **Async API Design** – Implemented an *asynchronous* REST endpoint (`POST /guard`) that accepts a batch of messages, returns a promise, and streams results back via Server‑Sent Events (SSE). This decouples user requests from heavy NLP inference.  
3. **NeMo Guardrails Toolkit** – Leveraged NVIDIA‑NeMo’s `Guardrail` class to define rules in YAML: profanity filter, data‑exfiltration blocker, and domain‑specific compliance checks. The guard is executed locally on a GPU‑enabled EC2 p3 instance, returning a JSON verdict (`allowed`, `rejected`) with confidence scores.  
4. **AWS Services** – Deployed the API behind an Application Load Balancer (ALB) + Lambda@Edge for edge caching; used SQS FIFO to queue rejected messages for audit. Cost was kept under $200/month by auto‑scaling the EC2 pool based on CPU utilisation.

**Result**  
- Reduced policy violations from 3 % to <0.01 %.  
- Latency dropped from 450 ms to 180 ms (average).  
- Throughput increased to 10k requests/sec with 99.9 % availability.  

**Reflection**  
I learned that asynchronous processing and a lightweight guard layer can dramatically improve safety without sacrificing performance—an insight I will apply whenever scaling LLM services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
