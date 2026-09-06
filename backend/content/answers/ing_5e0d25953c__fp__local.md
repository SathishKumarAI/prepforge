---
qid: ing_5e0d25953c__fp__local
question: 'Explain: Example Response (200 OK) — Design Spotify | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 431
total_tokens: 610
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:24:31-05:00'
sources: []
---

In a **system‑design interview** the interviewer often asks you to sketch a service like *Spotify*.  
When you hand back an **“Example Response (200 OK)”**, you’re presenting a minimal yet complete API contract that shows the system’s core behaviour, not just its internal plumbing.

---

### Why 200 OK?

*HTTP is the lingua‑franca of distributed services.*  
A `200 OK` status signals *successful completion* and carries the payload you promised. In design terms it guarantees:

1. **Idempotence** – repeated calls yield the same result (no duplicated tracks, no extra billing).
2. **Observability** – the client can validate success via a simple status code.
3. **Protocol simplicity** – downstream services (caching layers, analytics) can treat 200 as “good data”.

Thus the example response is not arbitrary; it’s the *semantic anchor* around which you build caching, consistency guarantees, and failure handling.

---

### Deeper principle

The response embodies **information‑theoretic minimalism**:  
- It delivers just enough data (track ID, title, artist) to satisfy a client request.  
- Extra metadata is omitted until the client explicitly asks for it (`?fields=...`).  

This follows the *Principle of Least Astonishment* in API design and reduces bandwidth – critical at Spotify’s scale.

---

### Non‑obvious insight

Most candidates focus on the *service layer* (CDN, micro‑services).  
The **“200 OK” response** reminds you that *the contract between client and server is the ultimate bottleneck*.  
If you get the status code wrong or leak internal IDs in the payload, you violate API stability, leading to cascading failures even if the backend works perfectly.  

So, a single line of JSON with `200 OK` is the linchpin that turns an elegant architecture into a reliable, version‑friendly product.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
