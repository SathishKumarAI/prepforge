---
qid: ing_bbbde0d004__star__local
question: 'Explain: Query an Absent URL — Bloom Filters | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 384
total_tokens: 623
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:46:56-05:00'
sources: []
---

**Situation:**  
At my last company we ran a URL‑shortening service that handled ~1.5 million new links per day. Every click request had to be checked against a blacklist of known malicious domains, and the blacklist grew to over 10 million entries.

**Task:**  
I was tasked with designing an ultra‑fast “query‑for‑absent” cache so we could immediately reject clicks on URLs that were *not* in our whitelist without hitting the database or causing latency spikes. The goal was sub‑millisecond response time and <1 % false positive rate.

**Action:**  
I chose a Bloom filter because it offers constant‑time membership checks with minimal memory usage. I built a 256‑bit filter per shard, using MurmurHash3 seeded three times to spread bits uniformly. The filter was kept in Redis as a bitmap for persistence and replicated across shards. When a click came in, the service performed a bitwise AND of the three hash indices; if any bit was unset we knew the URL definitely wasn’t present and could immediately return “blocked.” I also added a secondary cache layer with an LRU eviction policy to handle false positives from the Bloom filter. To keep the false positive rate under 0.5 %, I periodically refreshed the filter nightly using the latest blacklist snapshot.

**Result:**  
The new lookup reduced per‑click latency by 70 % (from ~12 ms to 3 ms) and cut database hits by 95 %. The false positive rate stayed at 0.4 %, keeping user experience intact. I learned how careful hash choice, bit‑array sizing, and layered caching can turn a theoretical data structure into a production‑grade performance win.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
