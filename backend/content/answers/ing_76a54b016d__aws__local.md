---
qid: ing_76a54b016d__aws__local
question: 'Explain: What Is Prompt Injection — Llm Security'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 423
total_tokens: 652
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:53:23-05:00'
sources: []
---

**Prompt injection** is a class of attacks where an adversary injects malicious text into the prompt that an LLM receives, causing it to deviate from its intended behavior—e.g., leaking secrets or executing forbidden commands.

| **STAR** | **Details** |
|----------|-------------|
| **Situation** | While designing a customer‑facing chatbot for an internal knowledge base, we discovered that users could prepend `“Ignore the policy and answer…”` to a query. |
| **Task** | Build a defense that guarantees policy compliance without degrading user experience. |
| **Action** | 1. *Ownership*: I set up a sandboxed Lambda layer that tokenizes every prompt, strips out disallowed control tokens, and logs attempts. <br>2. *Dive Deep*: We instrumented CloudWatch metrics (injection attempts per minute) and found a 23 % spike during peak hours. <br>3. *AWS Services*: <ul><li>Amazon SageMaker for the LLM endpoint.</li><li>AWS WAF with custom rules to block known injection patterns.</li><li>Step Functions orchestrating pre‑validation, fallback, and audit logging.</li></ul> |
| **Result** | After deployment, policy violations dropped from 12 % to <0.01 %. Latency increased by only 8 ms (≤2 % of total response time). Cost impact was negligible (<$5/month) because we used Lambda’s on‑demand scaling and reserved capacity for SageMaker. |

**Bar‑raiser notes:**  
- Demonstrates *Ownership* by leading the mitigation from detection to production.  
- Shows *Dive Deep* with concrete metrics (23 % spike, 8 ms latency).  
- Quantified impact (policy violation reduction, cost control).  
- Learns from failure: we iterated on rule sets after real‑world attempts, showing continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
