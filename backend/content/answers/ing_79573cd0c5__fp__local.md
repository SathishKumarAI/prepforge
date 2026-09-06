---
qid: ing_79573cd0c5__fp__local
question: 'Explain: Week 2 - Context: prompting, RAG, fine-tuning'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 468
total_tokens: 643
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:22:30-05:00'
sources: []
---

**Week 2 – The Geometry of Context in Large Language Models**

The core problem is *information flow*: a transformer must decide, for each token it emits, which past tokens (and external data) are most relevant.  
1. **Prompting** supplies the “context vector” that biases this decision. Formally, we prepend an instruction or example to the input sequence; in attention terms, the prompt’s key‑value pairs influence every query. The optimal prompt is the one that maximizes the mutual information between the desired output distribution and the conditioned context—essentially shaping the posterior \(P(y|x,\text{prompt})\).  
2. **Retrieval‑Augmented Generation (RAG)** addresses the *finite capacity* of model parameters by adding a retrieval module. The model first retrieves documents \(D=\{d_i\}\) from an external index via a similarity score \(s(x,d)\), then concatenates or attends over them. This is equivalent to augmenting the attention map with an extra set of key‑value pairs that are not learned but fetched, thereby expanding the effective context space without increasing parameters.  
3. **Fine‑tuning** shrinks this search: we adjust weights \(\theta\) so that for a given prompt distribution \(P_{\text{prompt}}\), the loss \(L(\theta)=E_{(x,y)\sim D}[-\log P_\theta(y|x)]\) is minimized. By fine‑tuning on domain‑specific data, we implicitly re‑weight the attention landscape to favor in‑domain token patterns.

**Non‑obvious insight:**  
The *retrieval step* can be viewed as a dynamic “soft prompt” that adapts per query; unlike static prompting, it lets the model’s internal geometry shift continuously. This continuous adaptation explains why RAG often outperforms fine‑tuning on tasks with sparse data: the retrieval module supplies high‑information content that the transformer can attend to without needing to store every detail in its weights.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
