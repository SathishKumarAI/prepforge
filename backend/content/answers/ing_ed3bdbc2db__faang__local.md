---
qid: ing_ed3bdbc2db__faang__local
question: What is zero-shot CoT - and why did "Let's think step by step" become famous?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 455
total_tokens: 697
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:51:56-05:00'
sources: []
---

**Clarify**  
You’re asking about *zero‑shot chain‑of‑thought* (CoT) prompting and the “Let’s think step by step” trick. The goal is to get a large language model (LLM) to produce multi‑step reasoning without having seen examples of that style in training.

**Approach**  
1. Define zero‑shot CoT.  
2. Explain why adding a short instruction (“Let’s think step by step”) changes behavior.  
3. Cite evidence from key papers/benchmarks.  

**Depth**  
Zero‑shot CoT is a prompting technique where we prepend a *generic* reasoning prompt to the input, forcing the model to generate intermediate logical steps before giving an answer. Unlike few‑shot or fine‑tuning, no examples of step‑by‑step solutions are provided; the LLM must internally simulate a chain of thought.

The “Let’s think step by step” phrase works because it aligns with the model’s training objective: generating fluent text conditioned on context. By explicitly requesting a decomposition, we tap into the internal attention patterns that have learned to produce detailed explanations when prompted. Empirically, OpenAI’s GPT‑3 paper (Wei et al., 2022) showed up to **+30%** accuracy on arithmetic and symbolic reasoning tasks after adding this cue.

**Edge cases**  
- Tasks requiring domain knowledge may still fail; the chain can drift into hallucination.  
- Very short or ambiguous prompts may not trigger CoT, yielding direct answers.  
- Over‑prompting can lead to verbose but irrelevant reasoning.

**Optimize & communicate**  
To improve robustness:  
1. Combine the step‑by‑step cue with a *question type* identifier (e.g., “Compute the sum”).  
2. Use temperature control to reduce hallucination.  
3. For production, log and cache generated chains for auditability.

When explaining this to interviewers, highlight that the technique leverages the model’s latent reasoning capability without additional training, making it a low‑cost, high‑impact tool for complex NLP problems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
