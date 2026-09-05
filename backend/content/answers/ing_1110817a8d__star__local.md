---
qid: ing_1110817a8d__star__local
question: 'Explain: See Also — My 2026 Perplexity AI Interview Process and Actual
  Questions'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 339
total_tokens: 582
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:02:48-05:00'
sources: []
---

**Situation:**  
During my last internship at a fintech startup, we were preparing an internal demo for a senior AI conference. The team had built a prototype chatbot that leveraged Perplexity’s API to answer complex financial queries, but the response latency was unacceptable—around 4 seconds per request—so our demo wouldn’t meet the live‑stream time constraints.

**Task:**  
I needed to reduce the average response time to under 1.5 seconds while keeping accuracy (measured by BLEU score against a curated test set) above 0.78, so that we could showcase the model’s real‑time capabilities during the conference.

**Action:**  
First, I profiled the API calls with `cProfile` and identified that tokenization overhead was the bottleneck. I switched to Perplexity’s “fast” tokenizer and cached embeddings for frequently used query prefixes. Next, I implemented a lightweight pre‑filter using a Bloom filter to reject obviously nonsensical inputs before hitting the model. Finally, I parallelized the API calls across two worker threads with an asyncio event loop, ensuring that we respected the API rate limits by batching requests.

**Result:**  
Latency dropped from 4 seconds to 1.2 seconds on average, and BLEU stayed at 0.81. The demo ran flawlessly, earning us a standing ovation at the conference. I learned that profiling early, smart caching, and concurrency can turn an impractical prototype into a production‑ready solution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
