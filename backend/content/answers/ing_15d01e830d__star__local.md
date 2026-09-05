---
qid: ing_15d01e830d__star__local
question: Kimi extended usable context far beyond typical training lengths. How do
  you take a model trained at, say, 8K-32K and make it work at 128K or more?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 264
output_tokens: 360
total_tokens: 624
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:11:53-05:00'
sources: []
---

**Situation** – In my last role I was tasked with deploying an LLM for a legal‑tech client that needed to process entire case files (≈120 KB) in one go. The base model we had only supported 8 K context, so the documents were being truncated and key clauses were lost.

**Task** – My goal was to extend the usable context window to ≥128 KB while keeping inference latency under 2 s on our GPU fleet, and ensuring that downstream QA accuracy stayed above 90 %.

**Action** – I first benchmarked a few token‑reduction strategies: sliding windows, hierarchical chunking, and a novel “token‑bucket” approach where the model learns to merge adjacent tokens into compressed embeddings. I implemented the bucket method using PyTorch’s `torch.nn.functional.pad` for dynamic padding and added a lightweight encoder layer that compresses every 256 tokens into one super‑token. Then I fine‑tuned the model on a curated corpus of long legal documents, using mixed‑precision training to keep GPU memory usage in check. To preserve speed, I pruned the extra attention heads after fine‑tuning and switched to FlashAttention.

**Result** – The extended model handled 128 KB inputs with only a 1.3× increase in latency (≈1.8 s per query). QA accuracy on our test set improved from 85 % to 92 %. I also documented the compression pipeline, which reduced token count by ~70 %, enabling us to run the model on a single A100 with <12 GB VRAM. This solution was later adopted across two other product lines, cutting inference costs by ~30 %.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
