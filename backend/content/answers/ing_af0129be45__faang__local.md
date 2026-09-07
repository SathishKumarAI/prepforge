---
qid: ing_af0129be45__faang__local
question: 'Explain: setReader — Tokenizer (Lucene 7.3.1 API)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 536
total_tokens: 777
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:30:30-05:00'
sources: []
---

**Clarify**  
The interview asks about `setReader` in Lucene’s `Tokenizer`. In Lucene 7.3.1 a `Tokenizer` is a `TokenFilter` that reads raw text and emits tokens. `setReader(Reader reader)` replaces the underlying source of characters for the next tokenization cycle. I’ll assume we’re talking about re‑using a tokenizer instance, not creating a new one each time.

**Approach**  
1. Describe the lifecycle: construction → `reset()` → `incrementToken()` loop → `end()`/`close()`.  
2. Explain how `setReader` hooks into this cycle.  
3. Show typical usage pattern in an indexing pipeline.  
4. Touch on thread‑safety and resource cleanup.

**Depth**  
- `Tokenizer` extends `CharFilter`, which implements `Reader`. The `setReader(Reader)` method is inherited from `TokenStream`. It simply assigns the provided reader to the internal field (`this.reader = new ReaderWrapper(reader)`) and resets token offsets.  
- After calling `setReader`, one must call `reset()` before tokenization; otherwise the stream’s state remains unchanged.  
- Internally, Lucene buffers characters in a `CharArraySet` via `ReusableStringReader`. The method also clears any pending tokens and resets counters (`offset = 0`).  
- Thread‑safety: `Tokenizer` is not thread‑safe; concurrent calls to `setReader` or tokenization on the same instance will corrupt state. Each indexing thread should own its tokenizer.

**Edge Cases**  
- Passing `null` throws `IllegalArgumentException`.  
- A reader that throws an IOException during read leads to `IOError` in the consumer.  
- Forgetting `reset()` after `setReader` causes `IllegalStateException: stream not reset`.  

**Optimize & Communicate**  
For high‑throughput pipelines, reuse a single tokenizer per thread and batch calls to `setReader` with minimal object churn. If you need multi‑thread safety, wrap each instance in a pool or use a thread‑local. In an interview, I’d highlight that the design allows back‑pressure: tokenizers can be reused without allocating new buffers, which is why Lucene exposes `setReader`. I’d finish by summarizing: “`setReader` swaps the character source, clears internal state, and must be paired with `reset()`; it’s cheap but requires careful lifecycle management.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
