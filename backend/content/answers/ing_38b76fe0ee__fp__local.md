---
qid: ing_38b76fe0ee__fp__local
question: 'Explain: Cost — Content Delivery Network (CDN) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 426
total_tokens: 600
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:05:20-05:00'
sources: []
---

**Why a CDN matters for cost‑aware system design**

The *fundamental problem* is delivering user data with low latency while keeping bandwidth and infrastructure expenses bounded. In an edge‑centric world, the optimal solution places storage replicas close to requesters—this is what a Content Delivery Network (CDN) does.  

1. **Latency–Cost trade‑off**  
   The round‑trip time \(t\) between origin and client grows linearly with physical distance \(d\): \(t \approx d/c\). Simultaneously, the network cost per megabyte is roughly proportional to \(d\) because each hop consumes carrier bandwidth. Placing a cache at distance \(d_{\text{edge}}\ll d_{\text{origin}}\) reduces both latency and transit cost by the same factor.  

2. **Economies of scale**  
   CDNs aggregate traffic from many clients, so the marginal cost per request shrinks: each edge server amortizes its fixed cost (hardware, maintenance) over millions of requests, yielding a lower effective price than a single origin server would face.

3. **Deep principle – *information locality***  
   Shannon’s source coding theorem tells us that the optimal representation of data depends on the observer’s position in probability space. By caching at the edge we effectively “compress” the network’s entropy: requests are served locally, so the channel capacity required from origin to client is reduced.

**Non‑obvious insight:**  
A CDN isn’t just a latency shim; it *reconfigures* the cost function of your system. The per‑request bandwidth cost becomes a convex function of the number of edge nodes, allowing you to solve for an optimal distribution that minimizes total expenditure while meeting SLA constraints. This coupling of geometry (distance) and economics is why CDN design is central to scalable, cost‑effective architectures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
