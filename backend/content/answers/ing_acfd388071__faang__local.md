---
qid: ing_acfd388071__faang__local
question: 'Q48: When would you choose fine-tuning over prompt engineering?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 564
total_tokens: 800
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:25:49-05:00'
sources: []
---

**Clarify**  
You’re being asked to decide *when* a model‑centric approach (fine‑tuning) is preferable to a usage‑centric one (prompt engineering). Key assumptions:  

1. The base LLM is available and can be modified (e.g., OpenAI’s GPT‑4 fine‑tune API or open‑source equivalents).  
2. You have labeled data that reflects the target task/domain.  
3. Latency, cost, and deployment constraints are known.

**Approach**  
1. List criteria: performance needs, data availability, operational cost, privacy, model size, update frequency.  
2. Map each criterion to fine‑tuning or prompt engineering.  
3. Build a decision matrix and walk through typical scenarios.

**Depth**  
| Criterion | Fine‑tune | Prompt‑engineer |
|-----------|-----------|-----------------|
| **Task specificity** (e.g., legal document summarization) | ✔️ | ❌ – prompts drift; hard to encode domain rules. |
| **Data volume** (>10k examples) | ✔️ – statistical signal outweighs prompt cost | ❌ – prompts ineffective with large corpora. |
| **Privacy / data security** (on‑prem, no third‑party API calls) | ✔️ – model can be hosted locally | ❌ – requires sending data to external LLM. |
| **Latency budget** (<100 ms per request) | ❌ – larger fine‑tuned models heavier; may need distillation | ✔️ – lightweight prompt inference. |
| **Model updates** (rapid iteration) | ❌ – retraining costly | ✔️ – quick prompt tweaks. |
| **Cost constraints** (per‑token pricing) | ❌ – compute cost high | ✔️ – cheaper inference, but may need more tokens. |

**Edge cases**  
- *Small niche domain*: fine‑tuning with few shots might overfit; prompts + few‑shot can generalize better.  
- *Regulatory compliance*: fine‑tuned model must be audited; prompts are auditable at runtime.

**Optimize & communicate**  
Explain that the decision hinges on a cost–benefit trade‑off: if you need deterministic, high‑accuracy outputs and own data pipelines, fine‑tune. If you prioritize agility, low latency, or avoid hosting large weights, prompt engineering wins. Emphasize monitoring: log inference quality for both approaches to validate the chosen path. This structured reasoning demonstrates clear communication, analytical depth, and pragmatic trade‑offs—exactly what FAANG interviewers value.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
