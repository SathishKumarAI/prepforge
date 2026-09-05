---
qid: ing_8798f14788__star__local
question: 'Explain: Q42: Design an evaluation system for comparing two LLMs on open-ended
  tasks.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 467
total_tokens: 712
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:03:48-05:00'
sources: []
---

**Situation**  
While leading a research sprint at my previous company, we had to decide whether to adopt Model A or Model B for our customer‑support chatbot. Both were large language models fine‑tuned on open‑ended dialogue data, but their performance varied across nuance and creativity—exactly the traits needed for natural conversations.

**Task**  
I was tasked with designing a fair, reproducible evaluation framework that could compare the two LLMs on open‑ended tasks such as free‑form question answering, story generation, and empathetic response. The goal was to produce objective scores while preserving the subjective quality required by our product.

**Action**  
1. **Benchmark Corpus** – Curated a balanced set of 200 prompts spanning 5 domains (tech support, medical advice, creative writing, etc.).  
2. **Multi‑Metric Scoring** – Implemented automatic metrics: BLEU and ROUGE for lexical overlap; BERTScore for semantic similarity; perplexity as fluency proxy; and a novelty score using cosine distance from training data embeddings to guard against memorization.  
3. **Human Evaluation Pipeline** – Built a crowdsourcing workflow on MTurk with 5 annotators per prompt, rating coherence, relevance, creativity, and safety on a 7‑point Likert scale. Used the Krippendorff’s alpha to ensure inter‑rater reliability >0.75.  
4. **Statistical Analysis** – Ran paired t‑tests and bootstrap confidence intervals to detect significant differences; applied Bonferroni correction for multiple metrics.

**Result**  
Model B outperformed Model A by an average of 8.3% on the composite human score (p < 0.01), with higher creativity scores that aligned with our brand voice. The evaluation framework was adopted company‑wide, reducing future model selection time by 40%. I learned that a hybrid of automated metrics and structured human judgment is essential for open‑ended LLM assessment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
