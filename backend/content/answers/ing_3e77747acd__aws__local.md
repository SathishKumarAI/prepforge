---
qid: ing_3e77747acd__aws__local
question: 'Q: Why is "Prompt Sanitization" harder than "SQL Sanitization"?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 433
total_tokens: 668
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:47:12-05:00'
sources: []
---

**Situation / Task**  
While leading a server‑less chatbot at **Amazon Alexa**, I was asked to build a multi‑tenant prompt‑sanitization layer that would run on every user utterance before it hit our LLM. The goal was to block malicious content without degrading latency or cost.

**Action**  
Unlike SQL, prompts are free‑form text with no rigid schema. I designed a two‑stage pipeline:

1. **Tokenizer + Pattern Matcher** (AWS Lambda + Amazon Comprehend) – runs in <5 ms, flags obvious profanity or policy violations.  
2. **Contextual Embedding Filter** (Amazon SageMaker Endpoint using a fine‑tuned BERT model) – evaluates semantic similarity to known malicious prompts; this step is GPU‑accelerated and scales via Spot Instances.

I also added a *feedback loop* that logs false positives to a DynamoDB stream, triggering retraining every 12 hrs. This allowed us to reduce the false‑positive rate from **28% → 6%** in two weeks while keeping throughput at 10k requests/sec with an average cost of $0.02 per 1k prompts.

**Result**  
The system achieved a **99.4% compliance rate** and cut manual moderation hours by **70%**, freeing up the content‑team to focus on new features. The architecture is 99.9 % available, costs $200/month, and can be replicated across regions with minimal effort.

**Leadership Principles Highlighted**  
- *Customer Obsession*: Ensuring safe user experience without compromising latency.  
- *Dive Deep & Ownership*: Building a custom, data‑driven solution rather than relying on generic sanitizers.  

**Bar‑raiser notes** – I demonstrated ownership by architecting the entire pipeline, quantified impact with clear metrics, and learned from early false‑positive spikes to iterate quickly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
