---
qid: ing_b96701968e__faang__local
question: 'Explain: Tier 2: Run on traces that passed Tier 1 (cheap LLM, ~$0.50/1K)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 533
total_tokens: 782
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:54:14-05:00'
sources: []
---

**Clarify**  
You’re asking how we process the data that survived an initial cheap‑LLM filter (Tier 1). The goal is to run a higher‑quality model on only those traces, keeping cost per 1K tokens around $0.50 while improving accuracy.

Assumptions:  
- Tier 1 already removed obvious noise; remaining traces are roughly 20–30 % of the original set.  
- We have a more expensive LLM (e.g., GPT‑4) that costs ~\$5–10/1K tokens.  
- The downstream task is classification or intent extraction.

**Approach**  
1. **Batching & Chunking** – group traces into 1 k‑token batches; split longer traces to stay within token limits.  
2. **Parallel Execution** – use a worker pool that scales with available GPU instances, throttling to respect API rate limits.  
3. **Caching & Deduplication** – hash traces; skip identical ones already processed in earlier runs.  
4. **Cost Tracking** – instrument per‑batch token usage and cost, feeding back into budget alerts.

**Depth**  
- Token counting: use the model’s tokenizer to count exact tokens before sending.  
- Parallelism: a thread pool of size N (≈ number of GPU cores) with async I/O; ensures we hit ~90% throughput.  
- Complexity: O(T) where T is total token count after Tier 1; memory overhead is O(batch‑size).  
- Trade‑offs: Larger batches reduce API call overhead but increase latency; smaller batches give finer control over cost spikes.

**Edge Cases**  
- Traces that cross the 1 k‑token limit → split or truncate with a warning.  
- API failures → exponential backoff and retry up to 3 times.  
- Unexpected spike in trace volume → throttle by temporarily reducing batch size.

**Optimize & Communicate**  
We can reduce cost further by:  
- Fine‑tuning the expensive LLM on our own data, lowering inference cost per token.  
- Implementing a “confidence threshold” – if Tier 1 confidence is high, skip Tier 2 for that trace.  
When explaining this to stakeholders, I’d highlight that we’re leveraging Tier 1 as a cheap sieve, then applying the heavy‑weight model only where it truly adds value—achieving an overall cost per 1K token of ~$0.50 while maintaining top‑tier accuracy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
