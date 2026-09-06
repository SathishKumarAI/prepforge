---
qid: ing_abfee3eec1__fp__local
question: 'Explain: Common Cache Key Choices — Content Delivery Network (CDN) | System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 559
total_tokens: 736
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:10:45-05:00'
sources: []
---

**Why a CDN needs a “cache key”**

A CDN’s job is to store copies of web assets close to users so that requests can be answered quickly and cheaply.  
When a request arrives, the edge node must decide whether it already holds the exact resource requested or if it has to fetch a fresh copy from the origin. That decision hinges on a *cache key* – an identifier that uniquely maps a request to a stored object.

**The fundamental problem**

Different HTTP requests can map to the same underlying content (e.g., `/style.css?v=3` vs. `/style.css`). Conversely, identical URLs may refer to different content if query parameters or headers influence rendering (e.g., language‑specific styles). The key must therefore encode **all observable variables that affect the response** while remaining as short and hashable as possible.

**Typical key components**

| Component | Why it matters | Typical inclusion |
|-----------|----------------|-------------------|
| Path + filename | Primary content identifier | Yes |
| Query string (sorted) | Influences caching policies or content variants | Often included if query‑based cache control is enabled |
| Accept‑encoding / ETag | Determines compressed vs. uncompressed versions | Included when compression is negotiated |
| Vary headers (e.g., `Accept-Language`) | Server may return different representations for the same URL | Included as a hash of the header values |
| Origin server or tenant ID | Multi‑tenant environments | Yes |

**Deep principle: Information entropy**

A cache key can be seen as a *hash function* that compresses all relevant request attributes into a fixed‑size token. By Shannon’s theorem, the minimal length required to uniquely identify all distinguishable responses equals the entropy of those attributes. If we drop an attribute that actually changes the response (e.g., omit `Accept-Language` when it affects content), we increase collision probability and degrade cache hit rate—effectively wasting bandwidth and violating the principle of *information preservation*.

**Non‑obvious insight**

Most designers focus on URL + query string, but **headers that influence caching (`Vary`) are often ignored**. Even a single header like `Accept-Charset` can produce distinct responses; failing to hash it leads to stale or incorrect content being served from the cache. A CDN should treat each unique combination of path, sorted query, and *significant* Vary headers as a separate key—this guarantees correctness without sacrificing hit rate.

---

*In short*: a CDN’s cache key is a carefully engineered hash that captures every request attribute that can alter the response, grounded in information theory to balance uniqueness against storage efficiency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
