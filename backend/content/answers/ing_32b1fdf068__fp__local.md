---
qid: ing_32b1fdf068__fp__local
question: Break down the latency and cost budget of a RAG query. What do you optimise
  first?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 495
total_tokens: 673
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:52:39-05:00'
sources: []
---

**Latency‑vs‑Cost in Retrieval‑Augmented Generation (RAG)**  
A RAG query is a two‑stage pipeline:  

1. **Retrieval** – search an index for \(k\) relevant passages.  
2. **Generation** – feed the retrieved text to a language model and decode.

Let \(t_{\text{idx}}\), \(c_{\text{idx}}\) be per‑query latency and cost of the vector store, and \(t_{\text{gen}}, c_{\text{gen}}\) those of the LLM. The total budget is  

\[
T = t_{\text{idx}} + t_{\text{gen}}, \qquad
C = c_{\text{idx}} + c_{\text{gen}} .
\]

The **fundamental trade‑off** comes from *information bottleneck*: the retrieval stage supplies only a small, highly relevant slice of knowledge; the generator must expand it. If we raise \(k\) or use a denser index, \(t_{\text{idx}}\) grows sublinearly but \(c_{\text{gen}}\) shrinks because the model sees richer context and can finish in fewer tokens.

**First optimisation: reduce retrieval cost while keeping recall high.**  
- Use *compressed embeddings* (e.g., PQ or HNSW with lower‑dimensional vectors).  
- Cache popular queries; a static cache turns \(t_{\text{idx}}\) into near‑zero for hot keys, freeing budget for generation.

Once retrieval is cheap, **second optimisation: control token usage.**  
- Trim context length to the minimal “effective window” that preserves answer quality (often < 200 tokens).  
- Prompt engineering to encourage concise responses.

**Non‑obvious insight:** The *effective dimensionality* of the query vector matters more than raw size. A poorly chosen metric can make a tiny index behave like a gigantic one, inflating \(t_{\text{idx}}\) without improving recall. Optimising the similarity function (e.g., cosine vs inner product) often yields larger latency savings than changing hardware.

In short: cheap, high‑recall retrieval → minimal context → token‑efficient generation = optimal latency‑cost balance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
