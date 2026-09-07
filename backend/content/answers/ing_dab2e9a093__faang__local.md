---
qid: ing_dab2e9a093__faang__local
question: 'Explain: Round 1: Practical LLM coding (45 minutes)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 503
total_tokens: 739
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:07:04-05:00'
sources: []
---

**Clarify**  
The interviewer wants a concise, interview‑ready description of the first round in an AI hiring pipeline that focuses on *practical large language model (LLM) coding*. I’ll assume:  
- Candidates have a CS background and know Python/ML basics.  
- The round is time‑boxed to ~45 min and evaluates hands‑on skill, problem framing, and code quality.

**Approach**  
1. Outline the round’s purpose and format.  
2. Detail typical tasks (e.g., fine‑tune a transformer on a small dataset, implement a prompt‑engineering pipeline).  
3. Mention evaluation criteria (correctness, efficiency, readability, robustness).  

**Depth**  
- **Structure**: 5 min briefing → 30 min coding + live discussion → 10 min Q&A.  
- **Sample Problem**: “Fine‑tune GPT‑2 on a custom FAQ corpus and expose a REST endpoint that returns context‑aware answers.”  
  - Load tokenizer & model (`transformers`), prepare `Dataset`, use `Trainer`.  
  - Post‑process logits, apply temperature sampling.  
  - Wrap in FastAPI with `/ask` route; add simple cache for latency.  
- **Complexity**: Training is O(N·B·T) where N=examples, B=batch size, T=sequence length. Deployment inference is linear in sequence length.  
- **Trade‑offs**: Use `fp16` to save GPU memory vs. possible numeric instability; batch size tuned for latency vs. throughput.

**Edge Cases**  
- Empty or malformed prompts → return graceful error.  
- OOM during fine‑tuning on large corpora → fall back to gradient accumulation.  
- Non‑English data → tokenization errors; test with multilingual samples.

**Optimize & Communicate**  
- Highlight code modularity: separate data prep, training loop, and API layer.  
- Use type hints and docstrings for readability.  
- In the interview, narrate decisions (“I chose fp16 to keep GPU usage <4 GB while still preserving accuracy”).  
- Conclude by stressing how this round demonstrates real‑world impact: from dataset ingestion to production‑ready inference.

*Word count: ~200.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
