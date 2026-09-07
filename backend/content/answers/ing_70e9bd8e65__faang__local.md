---
qid: ing_70e9bd8e65__faang__local
question: 'Q27: How do you evaluate LLM outputs when there is no ground truth?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 488
total_tokens: 727
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:06:13-05:00'
sources: []
---

**Clarify**  
We’re asked how to judge a large language model’s output when we can’t compare it against an exact “right” answer—e.g., creative writing, brainstorming, or open‑ended explanations. I’ll assume the goal is quality (usefulness, coherence, safety) rather than factual correctness alone.

**Approach**  
1. **Define evaluation criteria** that matter to stakeholders (fluency, relevance, novelty, consistency, bias/safety).  
2. **Design a rubric** or scoring system for each dimension.  
3. **Collect human judgments** using crowdworkers or domain experts; calibrate inter‑rater agreement.  
4. **Automated proxies**: language model perplexity, semantic similarity to reference prompts, toxicity scores, and factuality via external knowledge bases.  
5. **Iterative refinement**: use feedback loops to improve the rubric and training data.

**Depth**  
- *Human evaluation*: 5‑point Likert scales per dimension; compute Krippendorff’s α for reliability.  
- *Automatic metrics*: BLEU/BLEURW are weak for open‑ended tasks; instead use embedding similarity (e.g., Sentence‑BERT) to gauge semantic closeness, and ROUGE for content overlap when partial references exist.  
- *Safety*: run outputs through a toxicity classifier (Perspective API), flagging profanity or hate speech.  
- *Bias*: measure distribution of demographic mentions vs. baseline corpora.  
Complexity: human scoring is O(n·r) where n=samples, r=raters; automated metrics are linear in n.

**Edge Cases**  
- Outputs that are correct but ungrammatical may score poorly on fluency yet be useful.  
- Highly creative responses may lack references, causing similarity metrics to underrate them.  
- Toxicity detectors can produce false positives for figurative language.

**Optimize & Communicate**  
Start with a lightweight pilot (10 samples) to validate the rubric, then scale. Explain that combining human judgment with automated proxies gives robust, actionable quality scores while keeping evaluation cost manageable. Highlight trade‑offs: more raters improve reliability but increase time; richer metrics capture nuance but add latency. This structured pipeline aligns with FAANG standards for rigorous, reproducible AI assessment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
