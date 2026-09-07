---
qid: ing_72b0d0850f__aws__local
question: How would you evaluate an Indic LLM properly? Why is running translated
  English benchmarks not enough?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 515
total_tokens: 753
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:44:54-05:00'
sources: []
---

**Situation / Task**  
When I joined the NLP team at a startup that was launching an Indic‑language LLM, the product manager asked me to design a robust evaluation framework. The goal was to prove that our model truly understood Hindi, Tamil, Bengali, etc., not just “pass” English benchmarks that had been machine‑translated.

**Action**  
1. **Build native test suites** – I collected 30 k hand‑annotated examples per language (POS tags, named entities, question answering) from open corpora and crowdsourced new data where gaps existed.  
2. **Cross‑lingual consistency checks** – For each prompt I ran the model in both English and the target language, then used AWS Translate + Comprehend to align outputs; any divergence flagged a potential mistranslation bug.  
3. **Metric stack** – Accuracy, F1, BLEU (native), and a custom “semantic drift” score that measured difference between human‑translated and model‑generated responses using cosine similarity in sentence embeddings (SageMaker Ground Truth + SageMaker Feature Store).  
4. **Infrastructure** – Deployed inference on Lambda for low‑latency unit tests; used SageMaker Batch Transform for large‑scale sweeps, storing results in DynamoDB with TTL to keep cost under \$0.02 per 1 k queries.

**Result**  
- Discovered a 12 % drop in F1 for Tamil QA when compared to English benchmarks, leading to a model retrain that raised overall multilingual accuracy from **73 % → 84 %**.  
- Reduced translation‑bias incidents by 40 %, directly impacting user satisfaction scores (NPS ↑15).  
- Cut evaluation cost from \$1k/month to \$120/month.

**Reflection**  
*Ownership*: I took full responsibility for the pipeline, documented it in Confluence, and set up CI/CD via CodePipeline.  
*Dive Deep*: By quantifying semantic drift I learned that translation alone masks subtle cultural nuances—critical for customer obsession.  

Bar‑raiser signals: clear ownership, depth of metrics, tangible impact, and a learning loop (model retrain after failure).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
