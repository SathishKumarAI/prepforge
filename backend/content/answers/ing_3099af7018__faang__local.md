---
qid: ing_3099af7018__faang__local
question: 'Explain: which are copies of the communication structures'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 497
total_tokens: 729
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:37:27-05:00'
sources: []
---

**Clarify**  
The question asks which *communication structures* (i.e., ways data flows between units) are *copies* of one another in a neural‑network context. I’ll interpret “copies” as **weight‑sharing patterns** that duplicate the same set of parameters across different parts of the model, such as convolutional filters or attention heads.

---

**Approach**  
1. Identify common weight‑sharing mechanisms.  
2. Explain how they create identical communication paths.  
3. Contrast with fully‑connected (unique) connections.  

---

**Depth**  

| Structure | How it copies | Typical use |
|-----------|---------------|-------------|
| **Convolutional kernels** | The same filter slides over all spatial locations, reusing weights. | Vision CNNs (CNN layers). |
| **Recurrent cells** | One set of weights applied at each time step. | RNNs/LSTMs/GRUs for sequences. |
| **Attention heads** | In multi‑head attention, each head learns its own weight matrix but the overall pattern is replicated across heads; often the same key/value/query projection shapes are reused. | Transformers (BERT, GPT). |
| **Embedding lookup tables** | The same embedding vector is used wherever that token appears. | NLP embeddings. |

All these patterns impose *translation* or *time‑invariance*, ensuring the network treats each location/time/token identically.

---

**Edge cases**  
- **Depthwise separable convs** share only depth channels, not across spatial positions.  
- **Sparse transformers** break strict copying by gating attention heads.  
- **Parameter tying in language models** (e.g., output softmax tied to input embeddings) is a special copy.

---

**Optimize & communicate**  

When explaining to interviewers, emphasize that *copying* reduces parameters and enforces inductive biases, leading to better generalization. Clarify trade‑offs: while weight sharing improves efficiency, it limits expressivity compared to fully‑connected layers. Conclude by noting that modern architectures often blend both (e.g., Conv‑Transformer hybrids).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
