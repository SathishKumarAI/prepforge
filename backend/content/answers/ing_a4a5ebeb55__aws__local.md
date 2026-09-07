---
qid: ing_a4a5ebeb55__aws__local
question: 'Explain: Failure Mode #1: Retrieval Without a Context Budget'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 347
total_tokens: 578
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:39:37-05:00'
sources: []
---

**Situation / Task**  
While designing an enterprise‑grade conversational AI for a financial client, the team noticed that the retrieval engine kept pulling *all* documents whenever a user asked a question. This produced latency spikes and inflated costs – a classic “retrieval without a context budget” failure.

**Action**  
I led a cross‑functional sprint to introduce a **context budget** policy:

1. **Define a sliding window** of the last 10 KB of conversation text (stored in DynamoDB with TTL).  
2. **Score candidate documents** via an embedding similarity model on SageMaker Endpoint, then filter to the top‑N that fit within the context window before sending to the LLM (via Amazon Bedrock).  
3. Use **Lambda@Edge** to enforce budget limits at request time and log violations to CloudWatch.

**Result**  
- Latency dropped from 1.8 s → 0.4 s (80 % reduction).  
- Cost per inference fell by 65 %.  
- Accuracy of generated responses improved by 12 % (measured against a held‑out test set).

**Reflection**  
The failure highlighted the need for **Ownership** and **Dive Deep**: we didn’t just patch the LLM, we examined data flow, quantified impact, and iterated until metrics met SLA. This experience reinforced that a well‑bounded context is essential for scalable, cost‑effective AI at Amazon scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
