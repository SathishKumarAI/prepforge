---
qid: vq_fb71f884f8__faang__local
question: Types of Prompt Engineering ?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 437
total_tokens: 664
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:43:33-05:00'
sources: []
---

**Prompt Engineering – Types & Usage**

| Type | Core Idea | Typical Use‑Case |
|------|-----------|------------------|
| **Zero‑Shot Prompting** | Supply only the instruction; no examples. | Quick fact‑retrieval or simple classification when data is scarce. |
| **One‑Shot Prompting** | Give a single example before the query. | Fine‑tune style or domain language with minimal overhead. |
| **Few‑Shot Prompting** | Provide several labeled examples. | Robust performance on complex tasks (translation, summarization) without fine‑tuning. |
| **Chain‑of‑Thought Prompting** | Explicitly ask model to reason step‑by‑step. | Numerical reasoning or multi‑hop question answering where intermediate logic matters. |
| **Self‑Consistent Prompting** | Run the same prompt multiple times, aggregate most common answer. | Reduces hallucination in open‑ended generation. |
| **Template‑Based Prompting** | Predefine slots (e.g., “Write a [genre] story about [topic].”) and fill them programmatically. | Content creation pipelines or data augmentation. |
| **Reinforcement‑Learning‑Guided Prompting** | Use RL to tweak prompt wording for objective metrics. | Optimizing customer satisfaction in dialogue systems. |

### How to Pick

1. **Task Complexity** – zero/one‑shot for simple retrieval; few‑shot or chain‑of‑thought for reasoning.  
2. **Data Availability** – template or few‑shot if you have labeled examples.  
3. **Latency & Cost** – fewer tokens (zero/one‑shot) are cheaper; longer prompts increase compute.  

### Edge Cases

- Over‑fitting to training examples in few‑shot settings.  
- Hallucinations in zero‑shot queries.  
- Token limits breaking chain‑of‑thought reasoning.

By aligning prompt type with task constraints, you can trade off accuracy, cost, and latency while maintaining reproducible results.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
