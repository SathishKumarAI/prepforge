---
qid: ing_7bca0f5ef1__faang__local
question: 'Explain: Create prompt — Ai Evals Complete Guide Langwatch Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 484
total_tokens: 721
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:32:02-05:00'
sources: []
---

**Clarify**  
You want a concise guide on how to build an evaluation prompt for an AI model, specifically using *LangWatch* and *LangFuse*. I’ll assume:  
1. The model is a large‑language‑model (LLM) exposed via API.  
2. You have access to LangWatch’s monitoring tools and LangFuse’s data‑pipeline utilities.  
3. Evaluation metrics will be quantitative (accuracy, BLEU, etc.) and qualitative (human feedback).

**Approach**  
1. **Define objective & metrics** – decide what “success” means for the task.  
2. **Collect benchmark data** – use LangFuse to ingest a labeled dataset into a structured schema.  
3. **Build prompt template** – include instructions, context, and placeholders for dynamic content.  
4. **Inject evaluation logic** – embed scoring code (Python or JavaScript) that LangWatch can execute post‑response.  
5. **Run batch tests** – send prompts through the LLM via LangFuse’s pipeline, capture responses, and auto‑score with LangWatch dashboards.  
6. **Iterate & refine** – analyze failure cases, adjust prompt wording or weighting.

**Depth**  
- Prompt template: `“Given input: {text}. Generate a concise summary in ≤50 words.”`  
- Scoring script (Python): `len(summary.split()) <= 10 and similarity_score(input, summary) > 0.8`.  
- Complexity: O(n) per batch; storage cost negligible if using streaming.  
- Trade‑off: richer prompts improve accuracy but increase token usage.

**Edge Cases**  
- Empty or malformed inputs → fallback to “No data provided.”  
- Model hallucinations → add a verification step against LangFuse’s reference corpus.  
- API rate limits → implement exponential back‑off and batch queueing.

**Optimize & Communicate**  
- Cache frequent prompts in LangWatch’s cache layer.  
- Use LangFuse’s versioned datasets to track drift over time.  
- Narrate results via a real‑time dashboard, highlighting mean scores and variance per prompt variant.  

This structured workflow lets you iteratively refine prompts while keeping evaluation reproducible and auditable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
