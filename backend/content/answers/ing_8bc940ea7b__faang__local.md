---
qid: ing_8bc940ea7b__faang__local
question: 'Explain: BigLaw Bench Tasks — Introducing BigLaw Bench to Evaluate LLMs
  | Harvey'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 524
total_tokens: 764
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:09:21-05:00'
sources: []
---

**Clarify**  
You’re asking how *BigLaw Bench* (Harvey) evaluates large language models on legal “bench” tasks—think exam‑style questions that test statutory, case‑law, and procedural knowledge. I’ll assume the goal is to benchmark LLMs against a curated set of law‑related prompts, measuring accuracy, reasoning depth, and consistency.

**Approach**  
1. **Dataset construction**: Gather real bench‑task questions from bar exam prep, court opinions, and legal textbooks. Annotate each with expected answer(s) and key reasoning steps.  
2. **Model interface**: Wrap the LLM in a prompt‑engineering pipeline that preserves question context and encourages multi‑step responses.  
3. **Evaluation metrics**: Use exact match, partial credit (e.g., correct legal principle), and human expert review for ambiguous cases.  
4. **Iterative refinement**: Run baseline models, analyze error patterns, adjust prompts or fine‑tune on the dataset.

**Depth**  
- *Prompt design*: Start with “You are a seasoned attorney…” plus the question; append an instruction to list relevant statutes and precedents before answering.  
- *Scoring*: Exact match gives 1 point; correct legal reasoning earns 0.5 even if wording differs. Aggregate over thousands of questions for overall accuracy.  
- *Complexity*: Evaluation is \(O(N)\) per model, where N is the number of bench tasks; inference cost dominates. Fine‑tuning on 10k examples costs ~\(10^6\) tokens.

**Edge Cases**  
- Ambiguous or multi‑correct answers: human adjudication required.  
- Models hallucinating statutes: flagged as errors by a legal‑knowledge validator.  
- Out‑of‑domain questions (e.g., non‑U.S. law): excluded from scoring or given separate weight.

**Optimize & Communicate**  
- Use caching for repeated sub‑prompts to cut inference time.  
- Parallelize across GPUs; batch 32–64 queries per GPU.  
- Present results in a dashboard: accuracy heatmaps by topic, trend over time.  
- Explain trade‑offs: tighter prompts improve precision but may reduce coverage; fine‑tuning boosts performance but risks overfitting to the dataset.

This structured pipeline mirrors FAANG’s emphasis on clear problem framing, rigorous metrics, and scalable engineering—exactly what Harvey expects for a robust LLM legal benchmark.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
