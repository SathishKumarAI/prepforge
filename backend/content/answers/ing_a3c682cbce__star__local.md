---
qid: ing_a3c682cbce__star__local
question: When would you fine-tune a model instead of using RAG or prompt engineering
  - and if you do fine-tune, LoRA or full fine-tuning?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 258
output_tokens: 345
total_tokens: 603
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:00:58-05:00'
sources: []
---

**Situation**  
In early Q3 I was tasked with building a legal document summarizer for our client’s contract review platform. Their compliance team required summaries that were not only accurate but also adhered to strict confidentiality guidelines, so we couldn’t rely on an open‑source LLM or a public RAG pipeline without heavy filtering.

**Task**  
I needed to deliver a model that produced 100 % coverage of key clauses while keeping inference latency under 800 ms per document, and the system had to be easily updatable as new contract templates arrived.

**Action**  
After benchmarking GPT‑4o (RAG) and prompt‑engineered Claude on our dataset, I found latency was 3.5× higher than acceptable and fine‑tuning a smaller base model would give us tighter control over outputs. I chose to fine‑tune a distilled Llama‑2‑7B with LoRA adapters, freezing the backbone to keep GPU memory low (≈4 GB). We used a curated 10k clause dataset, applied data augmentation for rare clauses, and trained for 12 epochs on an A100. The LoRA rank of 64 balanced performance gains with minimal parameter overhead.

**Result**  
The fine‑tuned model reduced inference latency to 650 ms per document and increased F1 score from 0.78 (prompt) to 0.92, meeting the compliance threshold. I learned that when strict latency or domain specificity is required, lightweight LoRA fine‑tuning on a smaller backbone can outperform RAG or prompt engineering, especially in regulated environments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
