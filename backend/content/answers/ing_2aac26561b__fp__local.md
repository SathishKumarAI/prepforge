---
qid: ing_2aac26561b__fp__local
question: 'Q: Your LLM bill doubled month over month with flat traffic. How do you
  find and fix it?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 181
output_tokens: 516
total_tokens: 697
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:35:41-05:00'
sources: []
---

**Why the bill can balloon without more traffic**

A language‑model bill is *per‑token*, not per request.  
If the average token count per inference rises—say, because a new tokenizer splits text into shorter tokens or because the model internally expands prompts with extra context—the cost climbs even if you’re seeing the same number of calls.  
Additionally, hidden work such as background embeddings, fine‑tuning checkpoints, or longer warm‑up periods can add to compute time.

**Diagnosing the culprit**

1. **Collect per‑request telemetry**: log prompt length (raw characters), token count after tokenization, and inference latency.  
2. **Baseline comparison**: compare current metrics against a historical baseline when the bill was lower.  
3. **Identify outliers**: look for sudden increases in average tokens or latency spikes that coincide with billing surges.  
4. **Model‑level inspection**: if you’re using an auto‑scaling cluster, check if a newer model version has been promoted automatically; newer versions often have higher token costs.

**Fixing the spike**

- **Token‑budget enforcement**: cap `max_tokens` and trim prompts to essential content.  
- **Batching & pooling**: group multiple requests into a single inference call to amortize startup overhead.  
- **Model choice**: switch temporarily to a cheaper, smaller model for low‑priority traffic.  
- **Cache embeddings**: reuse pre‑computed vectors for repeated queries instead of recomputing them each time.

**Non‑obvious insight**

Even with flat traffic, *tokenization changes* (e.g., switching from GPT‑3’s BPE to a newer tokenizer) can silently double token counts. Always version‑track your tokenizer and re‑measure token usage whenever the underlying model or its preprocessing pipeline is updated.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
