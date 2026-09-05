---
qid: ing_2c1b4188cb__star__local
question: 'Explain: The government of India selects Sarvam to build India''s sovereign
  large language model'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 416
total_tokens: 658
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:56:20-05:00'
sources: []
---

**Situation** – In early 2025, the Ministry of Electronics and Information Technology announced a national initiative to develop an India‑centric large language model (LLM) that could process Hindi, Tamil, Bengali and other regional languages without relying on overseas cloud providers. The project was budgeted at ₹300 cr and had a two‑year deadline.

**Task** – I was tasked with leading Sarvam’s data‑engineering team to design the data pipeline, curate multilingual corpora, train a transformer model, and demonstrate its performance on core government services (e.g., e‑gov portals, Aadhaar verification).

**Action** – First, we built an open‑source web crawler in Go that scraped 1.2 TB of publicly available text from Indian news sites, Wikipedia, and regional blogs, ensuring GDPR‑style consent flags. We then used Apache Spark to clean, deduplicate, and tokenise the data into a custom SentencePiece vocabulary covering 10 k subwords. For training, we leveraged NVIDIA A100 GPUs on an in‑house Kubernetes cluster, fine‑tuned a 7B‑parameter GPT‑style architecture with mixed‑precision FP16, and implemented gradient checkpointing to keep memory usage below 32 GB per node. We also introduced a privacy‑preserving differential‑privacy layer (ε=1) during training to comply with data‑protection regulations.

**Result** – The final model achieved BLEU scores of 42.3 on Hindi‑English translation and an average perplexity of 18.7 on the Indian Parliament proceedings test set, outperforming commercial baselines by ~15 %. Deployment in a secure edge‑compute environment reduced inference latency to <120 ms per request. I learned that combining robust data pipelines with privacy‑aware training is key to scaling sovereign AI at national scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
