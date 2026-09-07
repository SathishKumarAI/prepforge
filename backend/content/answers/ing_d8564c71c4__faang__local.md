---
qid: ing_d8564c71c4__faang__local
question: 'Explain: 1.5 - Limitations of BERT — A Complete Guide to BERT with Code
  | Towards Data Science'
topic: Data Science
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 645
total_tokens: 893
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:02:36-05:00'
sources: []
---

**Clarify**  
You’re asking for a concise guide on the **limitations of BERT**—why it can’t be the “one‑size‑fits‑all” model for every NLP task and what pitfalls to watch for when deploying it in production.

**Approach**  
1. List key constraints (computational, data, architecture).  
2. Illustrate each with a short code snippet or pseudo‑code example.  
3. Highlight trade‑offs and suggest mitigations.  

**Depth**  
| Limitation | Why It Matters | Code‑Level Illustration | Mitigation |
|------------|----------------|------------------------|-----------|
| **Heavy GPU/TPU Footprint** | 12 B layers × 768 hidden → ~110 M params; inference latency >100 ms on CPU. | `model = BertModel.from_pretrained('bert-base-uncased')` – runs in ~200 ms per forward pass on a single core. | Use distilled BERT (TinyBERT), pruning, or ONNX runtime. |
| **Static Context Window** | 512‑token limit; long documents truncated → loss of global signal. | `input_ids = tokenizer.encode(text[:1024])` – discards >512 tokens. | Hierarchical encoding or Longformer/BigBird. |
| **Bidirectional but Not Causal** | Can't model left‑to‑right generation directly (e.g., GPT‑style). | Fine‑tune for next‑token prediction still requires masking all future tokens, hurting speed. | Use autoregressive variants (BERT‑GPT hybrid) or switch to causal transformer. |
| **Data Hungry & Overfitting** | Requires millions of unlabeled sentences; fine‑tuning on small corpora overfits quickly. | `trainer = Trainer(..., train_dataset=small_ds)` – validation loss spikes after 3 epochs. | Data augmentation, early stopping, and regularization (dropout). |
| **Domain Mismatch** | Pretraining on Wikipedia + BookCorpus → poor performance on legal or medical text. | Sentiment on clinical notes drops from 85 % to 62 %. | Domain‑specific pretraining or adapters. |

**Edge Cases**  
- Very long sequences (>512 tokens) → truncation errors.  
- Low‑resource languages with limited corpora → catastrophic forgetting.  
- Real‑time inference on edge devices → unacceptable latency.

**Optimize & Communicate**  
Explain that BERT’s strengths (rich bidirectional embeddings, transfer learning) come at the cost of size and flexibility. Emphasize pragmatic choices: use **distilled or pruned models** for latency, **adapter modules** for domain shift, and **Longformer** when sequence length matters. Convey this trade‑off diagrammatically in a presentation slide, then walk through a quick demo of quantizing BERT with `torch.quantization`. This shows both deep understanding and the ability to communicate actionable solutions—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
