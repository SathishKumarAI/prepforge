---
qid: ing_c7b6c456af__think__local
question: Compare encoder-only, decoder-only, and encoder-decoder architectures. What
  is each used for?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 197
output_tokens: 566
total_tokens: 763
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T14:07:33-05:00'
sources: []
---

**1️⃣ Clarify the question & set assumptions**

- Identify the three model families (encoder‑only, decoder‑only, encoder‑decoder) and what “used for” means (typical NLP tasks).  
- Assume we’re talking about transformer‑style architectures unless otherwise specified.

**2️⃣ Adopt a mental framework**

| Architecture | Core component(s) | Typical direction of attention | Common use‑case(s) |
|---------------|-------------------|---------------------------------|--------------------|
| Encoder‑only   | Stack of encoders  | Bidirectional (self‑attention) | Classification, tagging, retrieval |
| Decoder‑only   | Stack of decoders  | Unidirectional (causal)        | Generation, language modeling |
| Encoder‑decoder | Encoder + decoder  | Cross‑attention + self‑attn     | Sequence‑to‑sequence tasks |

Treat the table as a quick reference while reasoning.

**3️⃣ Reason step by step**

- **Encoder‑only**: Input tokens → self‑attention → contextual embeddings. Use a pooling or CLS token for downstream prediction. Great for *“what’s the sentiment?”* or *“does this sentence contain a named entity?”*.  
- **Decoder‑only**: Autoregressive generation; each step attends only to past tokens. Ideal for *“write the next word”*, machine translation (if you prepend a language token), or any open‑ended text generation.  
- **Encoder‑decoder**: First encode source, then decoder generates target conditioned on encoder states via cross‑attention. Classic for *translation, summarization, question answering*.  

While mapping each architecture to tasks, note overlaps (e.g., BERT can be fine‑tuned for QA) but emphasize the core design intent.

**4️⃣ Avoid common traps**

- Don’t conflate “decoder‑only” with “language model” only; some models use it for classification via prompt tricks.  
- Remember that encoder‑decoder models need two inputs (source + target during training), whereas decoder‑only needs only a prefix.  
- Beware of terminology variations: GPT is decoder‑only, BERT is encoder‑only, T5 is encoder‑decoder.

**5️⃣ Sanity‑check & verbalize**

- Verify that each task matches the attention pattern: bidirectional → classification; causal → generation; cross‑attention → translation/summarization.  
- When explaining, start with “What does the architecture look like?” then “How does it process input?” and finish with “Which tasks naturally fit this design.” This mirrors the table and keeps explanations concise.

Use this scaffold whenever you need to compare model families or explain their typical NLP applications.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
