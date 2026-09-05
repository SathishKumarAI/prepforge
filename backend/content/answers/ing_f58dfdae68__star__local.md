---
qid: ing_f58dfdae68__star__local
question: 'Explain: Pros: — Rate Limiting Algorithms Explained with Code'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 465
total_tokens: 702
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:39:36-05:00'
sources: []
---

**Situation**  
When I joined a fintech startup, our payment‑processing API was being hit by a sudden spike in traffic during a promotional campaign. The service crashed because we had no throttling mechanism; latency jumped from <50 ms to >2 s and error rates spiked to 18 %.  

**Task**  
I needed to design a rate‑limiting solution that would keep the API responsive, prevent abuse, and still allow legitimate users to reach their quotas during peak periods.  

**Action**  
I compared three algorithms: Fixed Window, Sliding Log, and Token Bucket. I chose **Token Bucket** for its smooth traffic handling and easy tuning. Using Redis as a shared store, I implemented it in Python:

```python
import redis, time

r = redis.Redis()
BUCKET_KEY = "user:{uid}:bucket"

def allow_request(uid, capacity=100, refill_rate=5):
    key = BUCKET_KEY.format(uid=uid)
    now = int(time.time() * 1000)   # ms
    pipe = r.pipeline()
    pipe.get(key)
    pipe.set(key, now, nx=True, ex=3600)
    tokens, last_ts = pipe.execute()

    if not tokens:
        tokens, last_ts = capacity, now

    elapsed = now - int(last_ts)
    new_tokens = min(capacity, float(tokens) + elapsed * refill_rate / 1000)

    if new_tokens < 1:
        return False
    r.set(key, str(new_tokens-1), ex=3600)
    return True
```

I deployed this with a middleware layer in our FastAPI app and added a per‑user dashboard showing current token counts.  

**Result**  
Latency dropped to <80 ms for 95 % of requests, error rates fell below 2 %, and the system handled a 4× traffic surge without downtime. I learned that choosing an algorithm with tunable parameters (capacity & refill rate) lets you balance fairness and performance, and that Redis’s atomic ops make distributed throttling reliable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
