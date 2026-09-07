---
qid: ing_235a37aee9__faang__local
question: 'Explain: Tips for Example Selection — Prompt Engineering | Lil''Log'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 438
total_tokens: 674
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:06:18-05:00'
sources: []
---

**Clarify**

You’re asking how to choose the right examples when crafting prompts for a language model (LLM).  
Assumptions:  
1. The LLM is pretrained and we can supply few‑shot demonstrations.  
2. We want high precision/recall on a downstream task (e.g., classification, translation).  

**Approach**

1. **Define objective & constraints** – accuracy target, latency, data privacy.  
2. **Collect diverse prototypes** – cover all classes and edge cases.  
3. **Score each prototype** – via human review or automatic heuristics (length, ambiguity, domain relevance).  
4. **Iterate with ablation** – remove/replace examples, measure impact on validation metrics.  

**Depth**

- *Few‑shot bias*: The model will mimic the style of the provided examples. Use balanced, minimal wording to avoid over‑fitting.  
- *Prompt length vs. token budget*: Keep total prompt < 1024 tokens; each example ~30–50 tokens for GPT‑3‑like models.  
- *Demonstration ordering*: Randomize order or cluster by similarity to reduce positional bias.  
- *Negative examples*: Include incorrect answers to teach the model what not to do.  

**Edge Cases**

- Rare classes with few samples may be underrepresented → synthetic augmentation.  
- Out‑of‑domain inputs can confuse the model; include “unknown” examples.  
- Token overflow causes truncation → monitor token counts during training.

**Optimize & Communicate**

- Use automated prompt‑tuning libraries (e.g., LangChain’s PromptTemplate) to log performance per example set.  
- Visualize loss vs. example count to identify diminishing returns.  
- Present findings in a concise slide: “Adding 3 negative examples improved F1 by 2% with <5 ms latency.”  

This structured process balances human intuition, systematic testing, and engineering constraints—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
