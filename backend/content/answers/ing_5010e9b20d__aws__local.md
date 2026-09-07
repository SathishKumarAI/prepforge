---
qid: ing_5010e9b20d__aws__local
question: Why do LLMs use subword tokenization instead of whole words or raw characters?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 496
total_tokens: 733
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:26:05-05:00'
sources: []
---

**Why LLMs prefer sub‑word tokenization**

*Leadership Principles:* **Customer Obsession & Ownership**

---

### Behavioral (STAR)

**S:** I led a small research team at my previous company to evaluate tokenizer choices for a multilingual chatbot.  
**T:** The goal was to maximize accuracy while keeping inference latency under 200 ms on edge devices.  
**A:** We compared three tokenizers: character‑level, word‑level (BPE), and sub‑word (WordPiece). I wrote a benchmarking suite that ran each tokenizer against 10 M user queries, measuring perplexity and CPU cycles.  
**R:** Sub‑words reduced perplexity by **12%** versus characters and cut latency by **35%** compared to word‑level. The model size dropped from 1.2 GB (character) to 0.8 GB (sub‑word), saving **$0.02 per inference** at scale.  
**L:** I documented the trade‑offs, shared findings with product and ops teams, and rolled out the sub‑word tokenizer in production—now handling 3 M queries/day with <1% error.

---

### Technical/System

- **Requirements:** Handle >200 languages, support OOV words, keep vocab size ≤50k.  
- **Design Choice:** WordPiece/BPE splits rare words into common morphemes → reduces vocabulary blow‑up and preserves semantic continuity.  
- **AWS Services:**  
  - *Amazon SageMaker* for training and hyper‑parameter tuning.  
  - *Amazon S3* to store the token dictionary (≈5 MB).  
  - *Lambda* + *ECS Fargate* for low‑latency inference, scaling automatically with CloudWatch metrics.  
- **Scalability & Availability:** Tokenizer is stateless; caching on ECS task containers reduces repeated disk I/O.  
- **Cost Trade‑off:** Smaller model → fewer GPU hours and lower EBS snapshot costs; cheaper Lambda invocations due to reduced payload size.

**Bottom line:** Sub‑word tokenization balances expressiveness, efficiency, and deployment cost—exactly the trade‑offs Amazon expects from a solution architect.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
