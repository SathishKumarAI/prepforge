---
qid: ing_d8c30428f1__faang__local
question: 'Explain: Compaction — Context Engineering'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 507
total_tokens: 736
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:03:34-05:00'
sources: []
---

**Clarify**  
The interviewer asks for an explanation of *compaction* in the context of AI language models and how it ties into *context engineering*. I’ll assume they mean: (1) compressing large context windows to fit memory limits, and (2) designing prompts or embeddings so that only the most relevant tokens influence generation.

**Approach**  
I’ll first define each term separately, then show their interaction. I’ll illustrate a typical workflow: token‑level compression → sparse retrieval → prompt tuning. Finally, I’ll discuss trade‑offs and real‑world use cases.

**Depth**  

| Concept | What it is | Why it matters |
|---------|------------|----------------|
| **Compaction** | Techniques (e.g., token pruning, clustering, attention sparsity) that reduce the number of tokens fed to a model while preserving semantic content. | Enables longer user queries or document retrieval in models with hard 4k–8k‑token limits without sacrificing quality. |
| **Context Engineering** | The art of shaping the input (prompt design, key‑value pairs, embeddings) so that the model’s attention focuses on useful information. | Improves accuracy, reduces hallucination, and aligns generation with user intent. |

Typical pipeline:  
1. **Compress** a 30k‑token article into ~4k tokens via semantic clustering or LLM‑guided summarization.  
2. **Engineer context** by inserting “You are an expert in X; answer concisely.” plus a few high‑confidence key facts.  
3. Feed the compacted, engineered prompt to the model → generate.

**Edge Cases**  
- Over‑compression can drop rare but critical entities.  
- Poor engineering may mislead the model into hallucinating.  
- Retrieval latency spikes if compaction is done on‑the‑fly.

**Optimize & Communicate**  
Future work: hybrid sparse‑dense attention to keep all tokens but weight them; learnable context selectors that auto‑tune prompts per user. I’d explain these ideas with a diagram and complexity numbers (e.g., O(n log n) for clustering). Finally, I’d note that the key is balancing *information retention* against *computational budget*, which is what top AI teams obsess over.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
