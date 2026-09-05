---
qid: ing_3e22f183ae__think__local
question: 'Q60: How would you evaluate whether an LLM is hallucinating?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 193
output_tokens: 433
total_tokens: 626
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:51:48-05:00'
sources: []
---

**Thinking Process for Evaluating LLM Hallucinations**

1. **Clarify the Goal & Context**  
   - *What* do we mean by “hallucination” (fabricated facts, nonsensical claims, or incorrect context)?  
   - *Assumptions*: The model outputs text; we have a reference (ground truth) or criteria for correctness.

2. **Choose an Evaluation Framework**  
   - Adopt a **multi‑criteria rubric**: factual accuracy, coherence with input, plausibility, and source traceability.  
   - Decide on **quantitative vs qualitative** metrics (e.g., BLEU for style, manual fact‑checking for truth).

3. **Reason Step‑by‑Step**  
   - 1️⃣ Run the LLM on a controlled prompt set covering various domains.  
   - 2️⃣ For each output, compare against verified sources or domain experts.  
   - 3️⃣ Score each dimension: factual correctness (0–1), relevance (0–1), coherence (0–1).  
   - 4️⃣ Aggregate scores to flag hallucinations (e.g., any zero in factualness triggers a warning).

4. **Avoid Common Pitfalls**  
   - *Over‑generalizing*: A single wrong sentence shouldn’t dismiss the entire response.  
   - *Confirmation bias*: Blindly accept model outputs that match expectations; always verify against independent data.  
   - *Context loss*: Ensure prompts are not truncated, as missing context can falsely appear as hallucination.

5. **Sanity‑Check & Communicate**  
   - Cross‑validate with a second annotator or automated fact‑checking API.  
   - Summarize findings in plain language: “X% of responses contained at least one factual error; Y% were incoherent.”  
   - Use this feedback to iterate on prompt design, model fine‑tuning, or post‑processing filters.

By following these structured steps, you can systematically identify and quantify hallucinations in LLM outputs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
