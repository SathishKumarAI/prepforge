---
qid: ing_3ac04e9880__faang__local
question: 'Explain: Payment Flow — Payment System'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 565
total_tokens: 795
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:01:04-05:00'
sources: []
---

**Payment Flow – Payment System (FAANG‑style)**  

| Step | What Happens | Key Tech / Trade‑offs |
|------|--------------|-----------------------|
| **1️⃣ Initiate** | User selects product → app sends *payment intent* to gateway (e.g., Stripe). | REST/GraphQL + idempotent POST; use HMAC for request integrity. |
| **2️⃣ Authorize** | Gateway contacts card network → “authorized” or “declined.” | 3‑way handshake, PCI‑DSS compliance; latency ≈ 200 ms, can fallback to async (e.g., Apple Pay). |
| **3️⃣ Capture** | Merchant requests capture (immediate) or schedule future capture. | Batch processing vs real‑time; choose based on business model (e.g., e‑commerce vs ticketing). |
| **4️⃣ Settlement** | Network settles funds → merchant bank receives transfer. | ACH/SEPA vs instant payouts; settlement window 1–3 days; risk of chargebacks. |
| **5️⃣ Reconciliation** | System reconciles gateway logs, merchant records, and bank statements. | Use event sourcing + Kafka streams; idempotency keys prevent double‑counting. |

### Clarify
- Assume a single‑currency e‑commerce flow.
- Need to support credit/debit cards, digital wallets, and ACH.

### Approach
1. Design stateless API for payment intent creation (idempotent).  
2. Integrate with multiple gateways via adapters; use circuit breaker pattern.  
3. Store events in an immutable log; expose a read‑model for reconciliation.  

### Depth
- **Security**: TLS 1.3, tokenization of card data, PCI‑DSS scope reduction.  
- **Scalability**: Horizontal scaling with Kubernetes + serverless functions for low‑latency auth.  
- **Reliability**: Retry logic with exponential backoff; dead‑letter queues for failures.  

### Edge Cases
- Network partition → optimistic concurrency on payment intent.  
- Chargeback scenario → flag and hold merchant balance until dispute resolution.  
- Currency conversion errors → use real‑time FX APIs, round‑up to nearest cent.

### Optimize & Communicate
- **Batching**: Group captures for bulk settlements to reduce per‑transaction overhead.  
- **Observability**: Distributed tracing (OpenTelemetry) + dashboards for latency SLA.  
- Present the flow diagrammatically in an interview, then walk through each component’s responsibilities and failure modes, highlighting how design choices satisfy both performance and compliance constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
