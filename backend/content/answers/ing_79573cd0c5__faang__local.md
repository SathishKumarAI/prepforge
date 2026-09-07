---
qid: ing_79573cd0c5__faang__local
question: 'Explain: Week 2 - Context: prompting, RAG, fine-tuning'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 438
total_tokens: 676
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:25:53-05:00'
sources: []
---

**Clarify**  
You’re asking for a concise overview of three key concepts in modern NLP—prompting, Retrieval‑Augmented Generation (RAG), and fine‑tuning. I’ll assume the audience is familiar with large language models but new to these techniques.

**Approach**  
I’ll first define each concept, then compare their goals and workflows, finally touch on when a team would pick one over another.

**Depth**  

| Technique | Purpose | Workflow |
|-----------|---------|----------|
| **Prompting** | Leverage the pretrained LLM as is; guide its output via crafted text. | Provide context + instruction → send to model → parse response. No model weight changes. |
| **Fine‑tuning** | Adapt a base model’s weights to domain‑specific data for higher accuracy or safety. | Collect labeled corpus → train with gradient descent on top layers (or full stack) → evaluate. |
| **RAG** | Combine retrieval of external knowledge with generation, keeping the base LLM frozen. | Query index → retrieve relevant passages → concatenate with prompt → feed to LLM → generate answer. |

*When to use:*  
- Prompting: quick prototyping or when data is scarce.  
- Fine‑tuning: when you need consistent domain behavior and can afford compute.  
- RAG: when up‑to‑date facts are needed but fine‑tuning is costly or prohibited.

**Edge Cases**  
- Prompting may hallucinate; test with adversarial prompts.  
- Fine‑tuned models risk overfitting; monitor validation loss.  
- RAG can suffer from noisy retrieval; evaluate recall‑precision trade‑off.

**Optimize & Communicate**  
Iterate on prompt templates via A/B testing, use parameter‑efficient fine‑tuning (LoRA) to cut GPU time, and cache retrieved documents in a vector store for latency gains. Present findings with clear metrics (BLEU, ROUGE, latency) so stakeholders see tangible ROI.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
