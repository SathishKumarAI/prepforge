---
qid: ing_9589736076__faang__local
question: 'Explain: ── Synthesis prompt ──────────────────────────────────────────────────────────'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 391
total_tokens: 629
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:31:48-05:00'
sources: []
---

**Clarify**  
The interviewer asks you to *explain a “synthesis prompt”*—a technique used in few‑shot or zero‑shot learning where we give a model a concise description of the task and let it generate new examples that match that description. Clarify that you’re speaking about prompting large language models (LLMs) rather than traditional data synthesis.

**Approach**  
1. Define what a prompt is.  
2. Explain the “synthesis” variant: we supply a *template* or *few labeled instances* and ask the model to produce additional, unlabeled samples.  
3. Mention typical use cases (data augmentation, generating synthetic dialogues, code snippets).  

**Depth**  
- A synthesis prompt usually contains:  
  - **Task definition** (“Write a short email in Spanish”).  
  - **Few examples** (one or two pairs of input‑output).  
  - **Constraints** (length, style tags).  
- The model uses *in‑context learning*: it infers the pattern from the few examples and continues generating.  
- Evaluation: compare generated data to real distribution via perplexity or downstream task performance.  
- Complexity is O(1) per token; memory depends on context window.

**Edge Cases**  
- Ambiguous prompts → hallucinations.  
- Too many constraints → low diversity.  
- Model bias can propagate into synthetic data.  

**Optimize & Communicate**  
Iterate prompt wording, add negative examples to steer away from undesired outputs. For interviewers: “By refining the prompt we trade off precision for variety; a well‑crafted synthesis prompt can boost training data size without manual labeling.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
