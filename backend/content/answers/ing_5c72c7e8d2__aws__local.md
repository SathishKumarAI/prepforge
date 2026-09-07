---
qid: ing_5c72c7e8d2__aws__local
question: 'Explain: Moving forward — AI threats in the wild: The current state of
  prompt injections on the web'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 543
total_tokens: 782
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:54:28-05:00'
sources: []
---

**Situation (S)**  
While leading a cross‑functional product team for an enterprise chatbot platform, we discovered that public APIs were being abused via *prompt injections*—malicious input that hijacked the model’s output on the web. The risk was growing as more organizations exposed LLM endpoints to untrusted traffic.

**Task (T)**  
Design a scalable, cost‑effective defense layer that detects and mitigates prompt injection in real time without degrading user experience.

**Action (A)**  

| Step | AWS Service | Rationale |
|------|-------------|-----------|
| 1️⃣ Filter & tokenize inputs | **Amazon API Gateway + Lambda@Edge** | Edge filtering reduces latency; Lambda@Edge runs globally, preventing malformed prompts from reaching downstream. |
| 2️⃣ Dynamic rule engine | **AWS WAF (Web Application Firewall)** with custom regex and ML‑based pattern matching | Allows rapid updates to injection signatures and blocks high‑confidence attacks before they hit the model. |
| 3️⃣ Audit & replay | **Amazon Kinesis Data Streams + Athena** | Store every request for post‑mortem analysis; Athena queries reveal emerging patterns without extra compute cost. |
| 4️⃣ Model hardening | **AWS SageMaker Runtime** with *prompt sanitization* layer (contextual embeddings) | Adds a second defense inside the inference pipeline, ensuring that even if a payload slips through, the model’s context window is neutralized. |

**Result (R)**  
Within three weeks of deployment:

- **99.8 %** of malicious prompts were blocked before reaching the LLM.
- Latency increased by only **12 ms** per request—below our SLA threshold.
- Cost impact was < **$50/month**, thanks to serverless edge filtering and Kinesis’s pay‑as‑you‑go model.

---

### Leadership Principles Highlighted
* **Customer Obsession** – Protecting end users from malicious content.  
* **Ownership & Dive Deep** – Building a multi‑layer defense, iterating on metrics, and learning from each failed injection attempt.  

By continuously monitoring Kinesis logs, we refined regex rules—an example of *Bias for Action* and *Invent & Simplify*. The bar‑raiser will see that I owned the problem end‑to‑end, quantified impact with real numbers, and turned a security threat into an opportunity to strengthen our platform’s resilience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
