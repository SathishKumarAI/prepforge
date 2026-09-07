---
qid: ing_ffd6b49b9f__faang__local
question: How do you generate synthetic training data with an LLM, and what are the
  pitfalls?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 410
total_tokens: 650
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:34:38-05:00'
sources: []
---

**Clarify**  
You want to use a large language model (LLM) to create realistic synthetic data for downstream ML tasks. Key assumptions:  
* The target task is text‑centric (classification, QA, etc.).  
* You have a seed corpus or domain knowledge to guide generation.  
* Quality can be measured against real data distributions or downstream performance.

**Approach**  
1. **Prompt engineering & fine‑tuning** – craft prompts that constrain style, length, and content; optionally fine‑tune the LLM on in‑domain examples.  
2. **Sampling strategy** – use temperature/ top‑k/top‑p to balance diversity vs. coherence.  
3. **Post‑processing filters** – remove duplicates, profanity, or hallucinated facts via rule‑based checks or a secondary classifier.  
4. **Label generation** – either embed labels in the prompt or generate them separately with another model.

**Depth**  
*Generation pipeline*: seed → prompt → LLM output → filter → label → dataset.  
Complexity is dominated by inference cost (O(batch × model‑size)). Trade‑offs: higher temperature → more variety but noisier data; stricter filtering → cleaner but less diverse samples.

**Edge Cases**  
* Hallucinations leading to false facts.  
* Over‑fitting to prompt patterns, producing repetitive artifacts.  
* Bias amplification if the seed corpus is skewed. Test with perplexity, BLEU against real samples, and downstream accuracy drops.

**Optimize & Communicate**  
Iterate prompt templates via A/B testing; use reinforcement learning from human feedback (RLHF) to steer quality. Explain that synthetic data can boost coverage but must be validated; present a monitoring dashboard showing distribution drift and model performance impact. This structured plan demonstrates clear reasoning, technical depth, and awareness of pitfalls—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
