---
qid: ing_9578a18878__faang__local
question: 'Explain: Hard Throttling — Ratelimiting'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 512
total_tokens: 746
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:31:42-05:00'
sources: []
---

**Hard Throttling (Ratelimiting) – FAANG‑style explanation**

---

### **1️⃣ Clarify**
*Problem:*  
A service receives a burst of requests from many clients and must prevent overload while maintaining fairness.  
*Assumptions to confirm:*  
- Requests are idempotent or can be queued safely.  
- Each client has an identifiable token (API key, IP, user ID).  
- We care about per‑client rate limits, not just global traffic.

---

### **2️⃣ Approach**
1. **Token Bucket / Leaky Bucket** – maintain a bucket of “tokens” per client.  
2. On each request, attempt to consume a token; if none left, reject with *429 Too Many Requests*.  
3. Refill tokens at a fixed rate (e.g., 10 req/s).  
4. Persist state in a fast store (Redis) for horizontal scaling.

---

### **3️⃣ Depth**
- **Complexity:** O(1) per request; constant‑time bucket lookup & update.  
- **Trade‑offs:**  
  - *Token Bucket* allows short bursts, good for interactive apps.  
  - *Leaky Bucket* smooths traffic, better for batch jobs.  
- **Implementation details:**  
  ```python
  def allow_request(client_id):
      now = time.monotonic()
      tokens, last = redis.hgetall(client_id)
      # Refill logic...
      if tokens > 0:
          redis.hset(client_id, tokens=tokens-1)
          return True
      else:
          return False
  ```

---

### **4️⃣ Edge Cases**
- Clock skew across servers → use monotonic clock or NTP sync.  
- Sudden spike of new clients → pre‑allocate minimal buckets to avoid memory blowup.  
- Persistent storage latency → fallback to in‑memory cache with eventual consistency.

---

### **5️⃣ Optimize & Communicate**
- **Sliding Window** for stricter limits if needed (O(log n) with sorted sets).  
- Expose *Retry‑After* header so clients back off gracefully.  
- Log denied requests for anomaly detection.  

Narrate as: “We treat each client like a water tank that can only fill at a steady rate; when it’s empty we refuse service to protect the whole system.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
