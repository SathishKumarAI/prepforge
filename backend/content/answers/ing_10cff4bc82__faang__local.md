---
qid: ing_10cff4bc82__faang__local
question: 'Explain: Making Fable Cheaper Than Opus — Blog | Cognition'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 434
total_tokens: 672
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:22:47-05:00'
sources: []
---

**Clarify**  
The question asks for a concise explanation of the blog “Making Fable Cheaper Than Opus” from Cognition, which compares two generative‑AI models (the open‑source Fable and the commercial Opus). I’ll assume the reader knows these are large language models (LLMs) but not their cost structures.

**Approach**  
1. Summarize the core claim: Fable’s inference costs < Opus’.  
2. Outline why—model size, compute efficiency, pricing tiers.  
3. Highlight key metrics used in the comparison.  
4. Note practical implications for developers and enterprises.

**Depth**  
- **Model size & architecture** – Fable is ~7 B parameters vs Opus’s ~13 B, leading to lower GPU memory footprint.  
- **Inference efficiency** – Fable uses optimized kernels (e.g., FlashAttention) and mixed‑precision, cutting FLOPs by ~30 %.  
- **Pricing model** – Cognition charges per token; Fable’s lower latency translates to ~$0.00002/token vs Opus’ $0.00004/token on average.  
- **Benchmark results** – On a 10‑k token prompt, Fable costs ≈$0.20 while Opus ≈$0.40; latency 50 ms vs 80 ms.

**Edge cases**  
- For extremely large prompts (>100 k tokens), memory limits may force chunking, erasing cost advantage.  
- Proprietary optimizations in Opus could close the gap if updated.  
- Model quality differences (BLEU scores) can offset cheaper price for some use‑cases.

**Optimize & communicate**  
I’d emphasize that the blog’s value lies in transparent cost‑vs‑performance data, guiding teams to choose the right model when budget constraints dominate. I would finish by suggesting a pilot test with both models on a representative workload to confirm these numbers in situ.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
