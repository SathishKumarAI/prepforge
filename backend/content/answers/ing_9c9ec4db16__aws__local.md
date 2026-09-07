---
qid: ing_9c9ec4db16__aws__local
question: When would you fine-tune a model instead of using prompting or RAG?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 582
total_tokens: 817
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:18:57-05:00'
sources: []
---

**Situation / Task**  
While building a customer‑support chatbot for a global e‑commerce platform, I had to decide whether to rely on prompt engineering or fine‑tune an LLM. The goal was to reduce average handling time (AHT) by 30 % and improve first‑contact resolution (FCR) to >90 %.  

**Action**  
I benchmarked three approaches:  
1. **Prompting** – using Bedrock’s GPT‑4o with carefully crafted system prompts.  
2. **RAG** – a retrieval‑augmented pipeline that pulls policy docs from S3 via Kendra.  
3. **Fine‑tuning** – a domain‑specific model on SageMaker, trained on 1 M past ticket transcripts (≈ 5 GB).  

I ran A/B tests over two weeks: prompting yielded FCR = 84 %, RAG → 87 %, but fine‑tuned model hit **92 %** and cut AHT from 3.2 min to **1.8 min** (≈ 44 % reduction).  

**Result**  
Fine‑tuning delivered the largest impact on key metrics, justifying the extra compute cost (~$0.12/1k tokens vs $0.03 for prompting) because it reduced downstream support tickets by 25 % and saved $350K annually in agent hours.

---

### Why Fine‑Tune Wins Here  
- **Ownership & Customer Obsession** – we owned the customer journey end‑to‑end, not just surface prompts.  
- **Dive Deep** – we measured token usage, latency, and error rates across all models.  
- **Bias for Action & Deliver Results** – we iterated quickly on training data and hyperparameters.  

### Trade‑offs  
| Factor | Prompting | RAG | Fine‑Tune |
|--------|-----------|-----|-----------|
| Latency | <200 ms | 400–600 ms (index lookup) | 300–500 ms (inference) |
| Cost per request | $0.03 | $0.04 | $0.12 |
| Customization | Low | Medium | High |
| Maintenance | Minimal | Index refreshes | Retrain on drift |

**Bar‑raiser cue:** I quantified impact, showed ownership of the data pipeline, and learned that a small training set (200k high‑quality tickets) could still achieve >90 % FCR, reducing cost while maintaining performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
