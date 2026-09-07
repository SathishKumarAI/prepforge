---
qid: ing_eee356b5a1__faang__local
question: 'Explain: Basic Prompting — Prompt Engineering | Lil''Log'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 490
total_tokens: 725
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:55:23-05:00'
sources: []
---

**Clarify**  
We’re asked to explain *Basic Prompting* in the context of **Prompt Engineering**—the practice of crafting input text (prompts) that guides a language model to produce desired outputs. Assume the audience knows what LLMs are but may not know how prompt wording affects behavior.

**Approach**  
1. Define prompting and its purpose.  
2. Break down key elements: format, instruction, context, examples.  
3. Illustrate with a simple “translate” prompt.  
4. Mention evaluation metrics (accuracy, coherence).  

**Depth**  
Prompt engineering is the art of shaping an LLM’s input to steer generation. A *basic prompt* typically contains:

| Component | Role |
|-----------|------|
| **Instruction** | Directs the model (“Translate the following sentence…”) |
| **Context** | Provides background or constraints (e.g., target language, style). |
| **Input data** | The actual text to transform. |
| **Optional examples** | Few‑shot demonstrations that bias the model toward a specific format. |

Example:  
```
Translate into French: "The quick brown fox jumps over the lazy dog."
```
Here, the instruction (“Translate into French”) and input are explicit; no extra context is needed. The model learns to output a French sentence. Adding an example:

```
English: "Hello" → French: "Bonjour"
English: "Goodbye" → French: "Au revoir"
Translate into French: "The quick brown fox jumps over the lazy dog."
```

Now the model has a template, improving consistency.

**Edge Cases**  
- Ambiguous instructions (“Explain”) can lead to vague outputs.  
- Long inputs may exceed token limits.  
- Cultural or domain‑specific terms might confuse the model without context.  

Testing: Run multiple prompts varying instruction wording; compare BLEU scores for translation tasks.

**Optimize & Communicate**  
Iterate by tightening constraints (e.g., “Use formal French”), adding negative examples, or limiting response length with tokens like `max_tokens`. Document each tweak and its effect on evaluation metrics. This systematic loop—clarify → design → test → refine—is what FAANG interviewers value in prompt‑engineering discussions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
