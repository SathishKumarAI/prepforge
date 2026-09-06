---
qid: ing_ffd6b49b9f__think__local
question: How do you generate synthetic training data with an LLM, and what are the
  pitfalls?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 196
output_tokens: 414
total_tokens: 610
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T17:53:34-05:00'
sources: []
---

**1. Clarify scope & assumptions**  
   - *What “synthetic” means*: text only or multimodal?  
   - *Target domain* (e.g., medical notes, legal contracts).  
   - *Quality metrics* you care about (realism, diversity, label fidelity).  

**2. Choose a mental model: data‑generation pipeline**  
   1. **Prompt design** → seed prompt that elicits the desired format.  
   2. **LLM inference** → control temperature, top‑p, repetition penalty to balance creativity vs. plausibility.  
   3. **Post‑processing & filtering** → regex, style checks, domain‑specific validators.  

**3. Step‑by‑step reasoning**  
   - Draft a template with placeholders for key entities.  
   - Use few‑shot examples in the prompt to anchor style and content.  
   - Run inference at scale, but sample a small batch first.  
   - Apply rule‑based filters (e.g., no copyrighted names).  
   - Run domain‑specific checks (grammar, terminology accuracy).  

**4. Common pitfalls to avoid**  
   - *Hallucinations*: unverified facts or fabricated data.  
   - *Over‑fitting to prompt*: synthetic set mirrors prompt structure too closely.  
   - *Bias amplification*: LLM reproduces training biases into new samples.  
   - *Label drift*: when generating labeled data, labels may not match the content.  

**5. Sanity‑check & communicate**  
   - Spot‑check random samples for realism and label correctness.  
   - Compare distribution stats (e.g., word counts) against real dataset.  
   - Present a small “demo set” to stakeholders before scaling.  
   - Document prompt, inference settings, and filtering rules so the process is reproducible.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
