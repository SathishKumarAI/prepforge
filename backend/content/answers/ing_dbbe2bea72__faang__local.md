---
qid: ing_dbbe2bea72__faang__local
question: 'Explain: Optimising prompts — Prompt Engineering And Context'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 429
total_tokens: 661
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:09:08-05:00'
sources: []
---

**Clarify**  
We need to explain how to *optimise prompts* for large‑language models, covering **prompt engineering** and the role of **context**. Key assumptions: the model is stateless, inference cost matters, and we target high‑quality outputs (e.g., summarisation or code generation).  

**Approach**  
1. Define the task & desired output format.  
2. Construct a concise prompt that gives clear instruction + minimal example(s).  
3. Add contextual tokens (metadata, prior dialogue) to anchor the model.  
4. Iterate: measure accuracy/fluency → tweak wording or add constraints.  

**Depth**  
- **Prompt Engineering**: Use *few‑shot* prompting when domain knowledge is sparse; otherwise use *zero‑shot* with explicit instruction (“Write a 200‑word summary”).  
- **Context Management**: Include relevant background (e.g., user’s previous query, entity facts) as part of the prompt. For long contexts, employ chunking or hierarchical prompting to keep token limits.  
- **Token Budget**: Keep prompts < 30 tokens; allocate remaining budget to context and desired output length.  
- **Prompt Templates**: Store reusable templates per task; parameterise with variables (e.g., `[TITLE]`, `[DATE]`).  

**Edge Cases**  
- *Out‑of‑scope*: model hallucinating facts if context is weak.  
- *Token overflow*: truncation of crucial context leads to errors.  
- *Ambiguous instructions*: leads to varied outputs; test with multiple users.  

**Optimize & Communicate**  
Iteratively A/B test prompt variants, track metrics (BLEU, ROUGE, user satisfaction). Use a versioned prompt repository and document changes for reproducibility. Explain trade‑offs: shorter prompts reduce cost but risk less control; richer context improves relevance but consumes tokens. This systematic strategy aligns with FAANG’s emphasis on clear communication, rigorous testing, and scalability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
