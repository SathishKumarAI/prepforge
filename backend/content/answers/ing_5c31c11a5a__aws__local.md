---
qid: ing_5c31c11a5a__aws__local
question: 'Q: When would you choose Long Context over RAG?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 467
total_tokens: 698
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:53:39-05:00'
sources: []
---

**Situation & Task**  
I led a cross‑functional team building a customer‑facing chatbot for an e‑commerce platform that needed to answer complex policy questions while staying compliant with regulatory data retention rules. The core decision was whether to use *Long Context* (LLM loaded with the entire knowledge base) or *Retrieval‑Augmented Generation* (RAG).

**Action**  
I scoped two prototypes:

| Approach | AWS Services | Key Trade‑offs |
|----------|--------------|----------------|
| **Long Context** | Amazon Bedrock (Claude 3.5 Sonnet), EFS for persistent model weights, Lambda@Edge for latency | *Scalability*: limited to ~4 k tokens; *Cost*: high per‑token compute; *Availability*: single model instance |
| **RAG** | SageMaker endpoint + Kendra index + DynamoDB cache | *Scalability*: query any size document; *Cost*: cheaper inference, higher storage cost; *Availability*: multi‑region replication |

I ran a 4‑week A/B test: 50k live sessions each. RAG reduced average response time from **1.2 s** to **0.6 s** (48% faster) and cut compute spend by **$3,200/month** while maintaining an **accuracy of 92 %** versus **88 %** for Long Context.

**Result**  
We rolled out RAG platform‑wide, achieving a 30% lift in CSAT for policy queries and a $14k annual cost saving. The experiment reinforced *Customer Obsession* (faster, accurate answers) and *Ownership* (continuous monitoring of model drift).

**Learning**  
The failure mode—Long Context’s token limit—highlighted the importance of *Dive Deep*: profiling real user intents before committing to an architecture. This insight now informs our go‑to‑market playbook for AI features.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
