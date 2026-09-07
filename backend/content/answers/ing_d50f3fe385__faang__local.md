---
qid: ing_d50f3fe385__faang__local
question: 'Explain: IndicGenBench (One-shot) — sarvamai/sarvam-1 \u00b7 Hugging Face'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 458
total_tokens: 706
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:55:00-05:00'
sources: []
---

**Clarify**  
You’re asking about *IndicGenBench (One‑shot)* from the `sarvamai/sarvam-1` repo on Hugging Face. The goal is to evaluate a language model’s ability to generate text in Indian languages with only a single prompt (one‑shot) and measure its performance against a curated benchmark set.

**Approach**  
1. Identify the benchmark’s format: each sample contains a prompt, target language, and reference completion.  
2. Load `sarvam-1` via 🤗 Transformers, configure it for *generation* (temperature=0.7, max_length≈256).  
3. For every sample, feed the prompt to the model, capture the generated text, and compare it against the ground truth using BLEU/ROUGE or a language‑specific metric.  
4. Aggregate scores per language and overall.

**Depth**  
- The repo ships a `datasets` script that auto‑downloads the benchmark JSONL file.  
- Use `AutoModelForCausalLM` + `AutoTokenizer`.  
- Generation: `model.generate(**tokenizer(prompt, return_tensors="pt"))`.  
- Evaluation: Hugging Face’s `evaluate` library offers pre‑built BLEU/ROUGE; for Indic languages, we might use *IndicBLEU* to respect script nuances.  
- Complexity: O(N) generation time plus O(M) metric computation, where N = number of prompts and M ≈ N.

**Edge Cases**  
- Empty or malformed prompts → skip with warning.  
- Model outputs exceeding max_length → truncate but note potential bias.  
- Non‑Indic scripts in the dataset → fallback to generic tokenizer.

**Optimize & Communicate**  
To speed up, batch prompts (batch_size=8) and use GPU inference. Explain that batching trades memory for latency. I’d summarize: “We load IndicGenBench, generate one‑shot completions with `sarvam-1`, evaluate via IndicBLEU, report per‑language scores, and note any language‑specific issues.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
