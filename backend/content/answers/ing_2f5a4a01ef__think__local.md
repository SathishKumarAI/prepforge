---
qid: ing_2f5a4a01ef__think__local
question: 'Explain: Prefill vs Decode — Attention Mechanisms'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 188
output_tokens: 688
total_tokens: 876
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T05:48:01-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
- *What is being compared?* We’re looking at two decoding strategies in transformer‑based language models: **prefill** (also called “beam search with pre‑tokenization” or “pre‑generation”) vs. **decode** (auto‑regressive generation token‑by‑token).  
- *Which attention mechanisms are relevant?* Standard self‑attention in the encoder, cross‑attention between encoder and decoder, and the causal masking used during decoding.  
- Assume we’re dealing with a typical encoder–decoder architecture (e.g., T5, BART) or a purely decoder model (GPT).

**2️⃣ Mental model / framework**  
1. **Prefill phase**: all target tokens are supplied at once; the model computes attention over them in parallel using *full* self‑attention (no causal mask).  
2. **Decode phase**: tokens are generated one by one; each step uses a *causal* mask so that token *i* can only attend to positions < *i*.  
3. Compare how this changes the pattern of attention heads, computational load, and latency.

**3️⃣ Step‑by‑step reasoning**  

| Aspect | Prefill | Decode |
|--------|---------|--------|
| **Attention pattern** | Full self‑attention on target sequence; cross‑attention uses all encoder positions. | Causal masked self‑attention: each token only sees previous tokens; cross‑attention still attends to all encoder outputs. |
| **Parallelism** | All tokens processed in one forward pass → high throughput, low latency for batch generation. | Sequential passes → higher latency, lower throughput but allows dynamic length and early stopping. |
| **Memory footprint** | Needs to store the entire target sequence’s hidden states simultaneously; grows quadratically with output length. | Stores only past states up to current step; memory grows linearly. |
| **Use‑cases** | Fast inference for fixed‑length outputs (machine translation, summarization). | Interactive or streaming generation where output length is unknown or must be truncated early. |

**4️⃣ Common traps**  
- *Confusing “prefill” with “beam search”*: prefill refers to feeding all tokens at once, not the beam strategy itself.  
- *Assuming attention weights are identical*: In decode the causal mask changes head utilization; some heads become useless for future tokens.  
- *Ignoring encoder‑decoder interactions*: Cross‑attention remains unchanged but its impact differs because decoder self‑attention is altered.

**5️⃣ Sanity checks & verbalizing**  
- **Check latency numbers**: Prefill should be faster for a given batch size; decode scales linearly with output length.  
- **Visualize attention maps**: In prefill you’ll see dense connections; in decode the map is triangular.  
- **Explain to a peer**: “Prefill treats the whole answer as a known sequence and runs one big pass, so every token can look at all others. Decode builds the answer step by step, masking future tokens, which means each new token only sees what’s already written.”  

By following these five steps you’ll have a clear, reproducible reasoning path for comparing prefill vs decode attention mechanisms.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
