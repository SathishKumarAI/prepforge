---
qid: ing_ec54c72e53__eli5__local
question: 'Explain: A customer''s LLM endpoint p99 latency jumped from 2s to 20s this
  week. No code changes on their side. Debug it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 440
total_tokens: 619
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:49:44-05:00'
sources: []
---

Think of the LLM endpoint as a busy post office that delivers answers (packages). The “p99 latency” is the time taken for almost all deliveries—only 1% take longer than this. If suddenly the 99‑th percentile jumps from 2 seconds to 20 seconds, it’s like the post office has started having one or two very slow days.

**What could be causing it?**

1. **Server overload (traffic spike)** – Even if your code hasn’t changed, more users might be hitting the endpoint, filling up servers and making each request wait longer.
2. **Resource contention (CPU/Memory throttling)** – The machines that run the model may be sharing CPU or memory with other jobs, slowing down inference for some requests.
3. **Model warm‑up / caching issues** – If a new model version was rolled out or caches were cleared, the first few runs can be slower until everything “warms up.”
4. **External dependencies (database, network)** – Slow database queries or network hiccups between services can add extra seconds to a request.
5. **Hardware failures or maintenance** – A failing GPU or scheduled update could temporarily degrade performance.

**Debugging steps**

1. **Check traffic logs** – Look for a sudden increase in requests around the week of the spike.
2. **Monitor resource usage** – CPU, memory, and GPU utilization on the inference nodes during that period.
3. **Inspect model deployment history** – Verify if a new model or container image was pushed recently.
4. **Review external calls** – Time database queries or API calls made by the endpoint; see if any are slow.
5. **Look at error logs** – Even silent failures can cause retries, adding latency.

By tracing where the delay occurs—whether in the “post office” itself or in its supply chain—you’ll pinpoint why the 99‑th percentile ballooned from 2 s to 20 s and restore smooth deliveries.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
