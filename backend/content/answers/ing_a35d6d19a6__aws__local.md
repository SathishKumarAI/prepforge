---
qid: ing_a35d6d19a6__aws__local
question: What is the difference between reference-based and reference-free evaluation,
  and why do BLEU, ROUGE and exact match fail on LLM output?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 381
total_tokens: 629
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:34:48-05:00'
sources: []
---

**Situation & Task**  
While leading a research‑engineering team that built an in‑house conversational AI for our marketplace, I was asked to evaluate model quality against customer feedback. Existing metrics (BLEU, ROUGE, Exact Match) consistently over‑rated outputs and missed user intent.

**Action**  
I conducted a *reference‑free* evaluation pipeline:  
1. **Human‑in‑the‑loop scoring** – trained annotators on “semantic relevance” using the 5‑point Likert scale; achieved inter‑annotator agreement of κ = 0.78.  
2. **Semantic similarity with sentence embeddings (Siamese BERT)** to capture paraphrase and contextual nuance.  
3. Integrated a *reference‑based* metric, ROUGE‑L, only for factual consistency checks.

I mapped the results to AWS services:  
- **Amazon SageMaker** for model training and inference.  
- **Amazon Comprehend Custom** to extract entities for fact validation.  
- **AWS Step Functions** orchestrated the evaluation workflow, ensuring 99.9 % availability while keeping costs < $0.05 per evaluation.

**Result**  
After deploying the new metrics, we saw a 32 % reduction in post‑launch support tickets related to misinterpretations and a 27 % increase in Net Promoter Score for the chat feature within three months.  

---

### Leadership Principles Highlighted
- **Customer Obsession** – focused on real user dissatisfaction rather than proxy scores.  
- **Dive Deep & Ownership** – built a custom evaluation stack, quantified impact, and iterated after failure (BLEU/ROUGE’s low correlation with user satisfaction).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
