---
qid: ing_785c817ef0__faang__local
question: 'Explain: Prefer Names for Service Contracts — IP Address | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 577
total_tokens: 813
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:24:00-05:00'
sources: []
---

**Problem Clarification**  
We’re asked why a system design should use DNS names (e.g., `orders.service.local`) instead of hard‑coded IPs in its service contracts. I’ll assume we’re designing an internal microservice mesh that needs to be resilient, scalable, and secure.

---

### 1️⃣ Approach
* **Identify the contract** – each service advertises a *hostname + port* pair.
* **Explain benefits** – dynamic discovery, load balancing, TLS, and observability.
* **Show trade‑offs** – latency of DNS lookup vs. static IP stability.

---

### 2️⃣ Depth (Technical Detail)
| Benefit | How it works |
|---------|--------------|
| **Dynamic scaling** | Adding/removing instances updates the DNS zone; clients resolve to the new set without redeploy. |
| **Load balancing** | DNS round‑robin or service mesh sidecar injects traffic split, keeping IP‑agnostic routing. |
| **TLS termination & mTLS** | Hostname is used for SNI and certificate validation (`CN`/`SAN`). |
| **Observability** | Names map to logical services in tracing (e.g., Jaeger), simplifying correlation. |
| **Security** | Network policies can reference service names; IPs change frequently, breaking static rules. |

*Complexity*: DNS lookup is O(1) per request with caching (~10‑100 ms). Overhead negligible compared to RPC latency (~1–5 ms).  

---

### 3️⃣ Edge Cases
| Case | Potential issue |
|------|-----------------|
| **DNS cache staleness** | Stale IPs may route traffic to removed instances. Mitigate with short TTL (≤30 s) or service‑mesh discovery. |
| **IPv6/dual‑stack** | Name resolves to both A and AAAA; clients must support both. |
| **Service outage** | DNS failure → fallback to static IP list, or use *DNS failover* policies. |

---

### 4️⃣ Optimize & Communicate
* **Use a dedicated service registry (Consul/Etcd)** behind the scenes; expose names via internal DNS.
* **Cache aggressively** in sidecars and application layers to reduce round‑trips.
* **Document** contract format (`{service}.{env}.svc.cluster.local:443`) so teams auto‑generate configs.

By preferring names, we decouple clients from infrastructure changes, enabling zero‑downtime scaling, secure communication, and richer observability—exactly the kind of design clarity FAANG interviewers value.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
