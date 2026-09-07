---
qid: ing_b0a8751fe7__aws__local
question: 'Explain: Memory poisoning via prompt injection — Agent Memory And State'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 416
total_tokens: 647
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:04:38-05:00'
sources: []
---

**Situation & Task**  
While building a conversational AI for an enterprise help‑desk, I discovered that malicious users could inject prompts that “poisoned” the agent’s short‑term memory, causing it to output incorrect policies and leak internal data. The goal was to eliminate this attack vector while keeping latency under 200 ms and cost below $0.01 per inference.

**Approach & Design**  
I scoped the problem with **Customer Obsession** (protect user data) and **Ownership** (own the entire pipeline). I introduced a two‑tier memory architecture:

1. **Secure State Store** – an encrypted DynamoDB table holding user context, keyed by session ID, accessed via **AWS KMS** for fine‑grained IAM policies.  
2. **Prompt Sanitizer Service** – a Lambda function that parses incoming prompts with a regex whitelist and rejects any tokens outside the allowed vocabulary before they reach the LLM.

The sanitizer runs in a VPC with **AWS WAF** to block known injection patterns, and I added a CloudWatch metric filter to alert on anomalous request rates. The design scales horizontally (Lambda concurrency) and keeps availability at 99.9 % by using DynamoDB’s built‑in replication.

**Result & Learnings**  
After deployment:

- Injection attempts dropped from ~12 per day to 0 within 48 h.  
- Latency increased only 15 ms on average, well below our SLA.  
- Operational cost grew by <2 % of the existing inference spend.

I logged this as a **“Memory Poisoning” incident** in the post‑mortem repository and created automated tests that simulate prompt injections, ensuring future releases inherit this safety net. This exercise reinforced my belief that **Dive Deep** into threat modeling and continuous monitoring is essential for secure AI services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
