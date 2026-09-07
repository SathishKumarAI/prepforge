---
qid: ing_92f57be222__aws__local
question: 'Explain: Layout, injection resistance, long context'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 472
total_tokens: 700
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:58:26-05:00'
sources: []
---

**Customer Obsession & Dive Deep**

> **Situation:** Our product team wanted an AI that could understand user queries spanning 10 000+ tokens while resisting prompt‑injection attacks that could mislead the model.

> **Task:** Design a system that (1) supports long context, (2) mitigates injection resistance, and (3) remains cost‑effective at scale.

> **Action:**  
> *Layout:* I chose a **decentralized transformer** with **segment‑wise attention** (e.g., Longformer). Each segment attends only to its window plus global tokens, reducing O(n²) complexity to ~O(n·k).  
> *Injection Resistance:* Implemented **prompt‑guarding layers** that detect and strip malicious trigger phrases before tokenization. Added a lightweight discriminator trained on adversarial examples (≈ 5 % of training data).  
> *Long Context:* Employed **Sparse Attention + Retrieval‑Augmented Generation**: the model retrieves relevant past segments from an S3‑backed vector store (using Amazon Kendra) and re‑injects them as context.  
> *AWS Services:* Lambda for pre‑processing, SageMaker Endpoint with GPU fleet for inference, DynamoDB for metadata, and CloudWatch for monitoring injection attempts.

> **Result:** Deployed to production in 4 weeks; latency dropped from 3 s (standard transformer) to 0.8 s per request. Injection success rate fell from 12% to <1%. User satisfaction scores rose by **15 points** on our NPS survey, and monthly inference cost decreased by **18%**.

> **Learnings:** Early integration of security checks prevented costly post‑deployment patches; continuous monitoring revealed that a slight increase in window size (from 512 to 1024 tokens) further improved recall without affecting latency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
