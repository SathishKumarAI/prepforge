---
qid: ing_c7b6c456af__faang__local
question: Compare encoder-only, decoder-only, and encoder-decoder architectures. What
  is each used for?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 534
total_tokens: 775
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:24:39-05:00'
sources: []
---

**Clarify**  
You’re asking how the three transformer‑style families differ in *architecture* (input vs output handling) and *typical use cases*. I’ll assume we’re talking about standard attention‑only models (no RNNs), and that “encoder‑only” means a masked or non‑masked encoder, “decoder‑only” is a left‑to‑right autoregressive decoder, and “encoder‑decoder” has both.

**Approach**  
1. Define each block’s flow of information.  
2. List the primary tasks where it shines.  
3. Note any trade‑offs (parallelism, causal masking, etc.).

---

### Depth

| Architecture | Flow | Core idea | Typical Tasks |
|--------------|------|-----------|---------------|
| **Encoder‑only** | Input → multi‑head self‑attention → feed‑forward → output embeddings | Joint representation of the whole sequence; no causality constraint. | *Masked language modeling* (BERT), *sentence classification*, *semantic search*, *feature extraction*. |
| **Decoder‑only** | Left‑to‑right autoregressive self‑attention + optional encoder cross‑attention → vocab logits | Generates tokens one by one, conditioned on past outputs (causal mask). | *Autoregressive language modeling* (GPT), *text generation*, *chatbots*, *code completion*. |
| **Encoder‑decoder** | Encoder processes source; decoder attends to encoder output and its own past tokens. | Combines context from an input sequence with autoregressive generation. | *Machine translation*, *summarization*, *question answering* (seq2seq), *dialogue systems*.

**Edge Cases**  
- **Encoder‑only** can’t generate sequences directly; need a separate decoder or generative head.  
- **Decoder‑only** struggles with bidirectional context unless trained as masked LM first.  
- **Encoder‑decoder** models are slower at inference due to sequential decoding and heavier memory usage.

**Optimize & Communicate**  
For interviewers: highlight that the choice hinges on *causality* (need for generation vs. representation) and *parallelism* (encoders can be fully parallelized, decoders cannot). Mention recent trends—e.g., GPT‑4 uses a decoder‑only backbone with massive context windows, while BERT variants dominate NLP classification tasks. Conclude by noting that hybrid architectures (like encoder‑only pretraining followed by decoder finetuning) often yield the best practical performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
